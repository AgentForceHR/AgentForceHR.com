const express = require('express');
const User = require('../models/User');
const Agent = require('../models/Agent');
const Conversation = require('../models/Conversation');
const blockchainService = require('../services/blockchainService');
const hrTokenService = require('../services/hrTokenService');
const { authenticateToken, requireAdmin, requireAdminOrHR } = require('../middleware/auth');
const { validatePagination, validateMongoId } = require('../middleware/validation');
const { asyncHandler, AppError } = require('../middleware/errorHandler');

const router = express.Router();

/**
 * @route   GET /api/admin/dashboard
 * @desc    Get admin dashboard statistics
 * @access  Protected (Admin/HR only)
 */
router.get('/dashboard', authenticateToken, requireAdminOrHR, asyncHandler(async (req, res) => {
  // Get basic counts
  const [
    totalUsers,
    totalAgents,
    totalConversations,
    activeEmployees,
    pendingOnboarding,
    completedOnboarding
  ] = await Promise.all([
    User.countDocuments({ isActive: true }),
    Agent.countDocuments({ isActive: true }),
    Conversation.countDocuments(),
    User.countDocuments({ role: 'employee', isActive: true }),
    User.countDocuments({ role: 'employee', onboardingStatus: 'pending' }),
    User.countDocuments({ role: 'employee', onboardingStatus: 'completed' })
  ]);

  // Get recent activity
  const recentUsers = await User.find({ isActive: true })
    .sort({ createdAt: -1 })
    .limit(5)
    .select('firstName lastName email role createdAt');

  const recentAgents = await Agent.find({ isActive: true })
    .populate('createdBy', 'firstName lastName')
    .sort({ createdAt: -1 })
    .limit(5)
    .select('name description createdBy createdAt metrics');

  // Get agent performance metrics
  const agentMetrics = await Agent.aggregate([
    { $match: { isActive: true } },
    {
      $group: {
        _id: null,
        totalInteractions: { $sum: '$metrics.totalInteractions' },
        avgResponseTime: { $avg: '$metrics.averageResponseTime' },
        avgSatisfactionScore: { $avg: '$metrics.satisfactionScore' }
      }
    }
  ]);

  // Get onboarding progress statistics
  const onboardingStats = {
    total: activeEmployees,
    pending: pendingOnboarding,
    inProgress: activeEmployees - pendingOnboarding - completedOnboarding,
    completed: completedOnboarding,
    completionRate: activeEmployees > 0 ? Math.round((completedOnboarding / activeEmployees) * 100) : 0
  };

  // Get blockchain network info
  const networkInfo = blockchainService.getNetworkInfo();
  let blockchainStatus = 'unknown';
  try {
    const isConnected = await blockchainService.verifyConnection();
    blockchainStatus = isConnected ? 'connected' : 'disconnected';
  } catch (error) {
    blockchainStatus = 'error';
  }

  const stats = {
    overview: {
      totalUsers,
      totalAgents,
      totalConversations,
      activeEmployees
    },
    onboarding: onboardingStats,
    agents: {
      total: totalAgents,
      totalInteractions: agentMetrics[0]?.totalInteractions || 0,
      avgResponseTime: Math.round(agentMetrics[0]?.avgResponseTime || 0),
      avgSatisfactionScore: Math.round((agentMetrics[0]?.avgSatisfactionScore || 0) * 100) / 100
    },
    blockchain: {
      network: networkInfo.network,
      status: blockchainStatus,
      contractAddress: networkInfo.contractAddress
    },
    recent: {
      users: recentUsers,
      agents: recentAgents
    }
  };

  res.json({
    success: true,
    data: stats
  });
}));

/**
 * @route   GET /api/admin/users
 * @desc    Get all users with pagination and filtering
 * @access  Protected (Admin/HR only)
 */
router.get('/users', 
  authenticateToken, 
  requireAdminOrHR, 
  validatePagination, 
  asyncHandler(async (req, res) => {
    const { page, limit, sort } = req.query;
    const { role, department, onboardingStatus, search } = req.query;

    // Build query
    let query = { isActive: true };

    if (role) query.role = role;
    if (department) query.department = department;
    if (onboardingStatus) query.onboardingStatus = onboardingStatus;
    
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find(query)
        .populate('assignedAgents', 'name')
        .select('-password')
        .sort(sort)
        .skip(skip)
        .limit(limit),
      User.countDocuments(query)
    ]);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  })
);

/**
 * @route   GET /api/admin/users/:id
 * @desc    Get user details
 * @access  Protected (Admin/HR only)
 */
router.get('/users/:id', 
  authenticateToken, 
  requireAdminOrHR, 
  validateMongoId, 
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
      .populate('assignedAgents', 'name description isActive')
      .select('-password');

    if (!user) {
      throw new AppError('User not found', 404);
    }

    // Get user's conversation statistics
    const conversationStats = await Conversation.aggregate([
      { $match: { employee: user._id } },
      {
        $group: {
          _id: null,
          totalConversations: { $sum: 1 },
          totalMessages: { $sum: { $size: '$messages' } }
        }
      }
    ]);

    const stats = conversationStats[0] || { totalConversations: 0, totalMessages: 0 };

    res.json({
      success: true,
      data: {
        user,
        stats
      }
    });
  })
);

/**
 * @route   PUT /api/admin/users/:id
 * @desc    Update user (admin only)
 * @access  Protected (Admin only)
 */
router.put('/users/:id', 
  authenticateToken, 
  requireAdmin, 
  validateMongoId, 
  asyncHandler(async (req, res) => {
    const { role, isActive, onboardingStatus, department, position } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...(role && { role }),
        ...(isActive !== undefined && { isActive }),
        ...(onboardingStatus && { onboardingStatus }),
        ...(department && { department }),
        ...(position && { position })
      },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      throw new AppError('User not found', 404);
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      data: { user }
    });
  })
);

/**
 * @route   GET /api/admin/agents/analytics
 * @desc    Get detailed agent analytics
 * @access  Protected (Admin/HR only)
 */
router.get('/agents/analytics', 
  authenticateToken, 
  requireAdminOrHR, 
  asyncHandler(async (req, res) => {
    // Get agent performance data
    const agentAnalytics = await Agent.aggregate([
      { $match: { isActive: true } },
      {
        $lookup: {
          from: 'conversations',
          localField: '_id',
          foreignField: 'agent',
          as: 'conversations'
        }
      },
      {
        $addFields: {
          totalConversations: { $size: '$conversations' },
          totalMessages: {
            $sum: {
              $map: {
                input: '$conversations',
                as: 'conv',
                in: { $size: '$$conv.messages' }
              }
            }
          }
        }
      },
      {
        $project: {
          name: 1,
          'metrics.totalInteractions': 1,
          'metrics.averageResponseTime': 1,
          'metrics.satisfactionScore': 1,
          totalConversations: 1,
          totalMessages: 1,
          assignedEmployees: { $size: '$assignedEmployees' },
          createdAt: 1
        }
      },
      { $sort: { 'metrics.totalInteractions': -1 } }
    ]);

    // Get usage trends (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const usageTrends = await Conversation.aggregate([
      {
        $match: {
          createdAt: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            date: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }
          },
          conversations: { $sum: 1 },
          messages: { $sum: { $size: '$messages' } }
        }
      },
      { $sort: { '_id.date': 1 } }
    ]);

    res.json({
      success: true,
      data: {
        agentAnalytics,
        usageTrends
      }
    });
  })
);

/**
 * @route   GET /api/admin/blockchain/status
 * @desc    Get blockchain connection and contract status
 * @access  Protected (Admin only)
 */
router.get('/blockchain/status', 
  authenticateToken, 
  requireAdmin, 
  asyncHandler(async (req, res) => {
    const networkInfo = blockchainService.getNetworkInfo();
    
    let status = {
      network: networkInfo.network,
      rpcUrl: networkInfo.rpcUrl,
      contractAddress: networkInfo.contractAddress,
      walletAddress: networkInfo.walletAddress,
      connected: false,
      balance: '0',
      error: null
    };

    try {
      // Check connection
      status.connected = await blockchainService.verifyConnection();
      
      // Get wallet balance
      status.balance = await blockchainService.getWalletBalance();
      
    } catch (error) {
      status.error = error.message;
    }

    res.json({
      success: true,
      data: { blockchain: status }
    });
  })
);

/**
 * @route   GET /api/admin/system/health
 * @desc    Get system health status
 * @access  Protected (Admin only)
 */
router.get('/system/health', 
  authenticateToken, 
  requireAdmin, 
  asyncHandler(async (req, res) => {
    const health = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      services: {}
    };

    // Check database connection
    try {
      await User.findOne().limit(1);
      health.services.database = { status: 'healthy', responseTime: 0 };
    } catch (error) {
      health.services.database = { status: 'unhealthy', error: error.message };
      health.status = 'degraded';
    }

    // Check blockchain connection
    try {
      const startTime = Date.now();
      await blockchainService.verifyConnection();
      health.services.blockchain = { 
        status: 'healthy', 
        responseTime: Date.now() - startTime,
        network: blockchainService.getNetworkInfo().network
      };
    } catch (error) {
      health.services.blockchain = { status: 'unhealthy', error: error.message };
      health.status = 'degraded';
    }

    // Check AI service (simplified check)
    health.services.ai = {
      status: process.env.GEMINI_API_KEY ? 'configured' : 'not_configured',
      provider: 'Google Gemini'
    };

    res.json({
      success: true,
      data: health
    });
  })
);

/**
 * @route   POST /api/admin/agents/:id/retry-blockchain
 * @desc    Retry blockchain registration for agent
 * @access  Protected (Admin only)
 */
router.post('/agents/:id/retry-blockchain', 
  authenticateToken, 
  requireAdmin, 
  validateMongoId, 
  asyncHandler(async (req, res) => {
    const agent = await Agent.findById(req.params.id);
    
    if (!agent) {
      throw new AppError('Agent not found', 404);
    }

    if (agent.blockchainTxHash && agent.blockchainTxHash !== 'PENDING_REGISTRATION') {
      throw new AppError('Agent already registered on blockchain', 400);
    }

    try {
      const blockchainResult = await blockchainService.registerAgent({
        agentId: agent.agentId,
        name: agent.name,
        description: agent.description,
        configuration: agent.configuration
      });

      agent.blockchainTxHash = blockchainResult.txHash;
      await agent.save();

      res.json({
        success: true,
        message: 'Agent successfully registered on blockchain',
        data: {
          txHash: blockchainResult.txHash,
          blockNumber: blockchainResult.blockNumber
        }
      });

    } catch (error) {
      throw new AppError(`Blockchain registration failed: ${error.message}`, 500);
    }
  })
);

/**
 * @route   GET /api/admin/hr-token/info
 * @desc    Get HR token contract information
 * @access  Protected (Admin/HR only)
 */
router.get('/hr-token/info', 
  authenticateToken, 
  requireAdminOrHR, 
  asyncHandler(async (req, res) => {
    try {
      const tokenInfo = await hrTokenService.getTokenInfo();
      
      res.json({
        success: true,
        data: { tokenInfo }
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
        data: {
          tokenInfo: {
            name: 'HR Token',
            symbol: 'HRT',
            decimals: 18,
            totalSupply: 'Unknown',
            contractAddress: hrTokenService.getNetworkInfo().tokenAddress,
            network: hrTokenService.getNetworkInfo().network,
            status: 'disconnected'
          }
        }
      });
    }
  })
);

/**
 * @route   GET /api/admin/hr-token/balance/:address
 * @desc    Get HR token balance for specific address
 * @access  Protected (Admin/HR only)
 */
router.get('/hr-token/balance/:address', 
  authenticateToken, 
  requireAdminOrHR, 
  asyncHandler(async (req, res) => {
    const { address } = req.params;

    // Validate Ethereum address format
    if (!ethers.isAddress(address)) {
      throw new AppError('Invalid wallet address format', 400);
    }

    try {
      const balance = await hrTokenService.getTokenBalance(address);
      
      res.json({
        success: true,
        data: {
          address,
          balance,
          network: hrTokenService.getNetworkInfo().network
        }
      });
    } catch (error) {
      throw new AppError(`Failed to fetch token balance: ${error.message}`, 500);
    }
  })
);

/**
 * @route   POST /api/admin/hr-token/transfer
 * @desc    Transfer HR tokens (admin only)
 * @access  Protected (Admin only)
 */
router.post('/hr-token/transfer', 
  authenticateToken, 
  requireAdmin, 
  asyncHandler(async (req, res) => {
    const { toAddress, amount, purpose } = req.body;

    // Validation
    if (!toAddress || !amount) {
      throw new AppError('Recipient address and amount are required', 400);
    }

    if (!ethers.isAddress(toAddress)) {
      throw new AppError('Invalid recipient address format', 400);
    }

    if (parseFloat(amount) <= 0) {
      throw new AppError('Amount must be greater than 0', 400);
    }

    try {
      const result = await hrTokenService.transferTokens(toAddress, amount);
      
      // Log the transfer for audit purposes
      console.log(`💰 Admin ${req.user.email} transferred ${amount} HR tokens to ${toAddress}`, {
        purpose: purpose || 'Not specified',
        txHash: result.txHash,
        adminId: req.user._id
      });

      res.json({
        success: true,
        message: 'HR tokens transferred successfully',
        data: result
      });
    } catch (error) {
      throw new AppError(`Token transfer failed: ${error.message}`, 500);
    }
  })
);

/**
 * @route   GET /api/admin/hr-token/status
 * @desc    Get HR token service status
 * @access  Protected (Admin/HR only)
 */
router.get('/hr-token/status', 
  authenticateToken, 
  requireAdminOrHR, 
  asyncHandler(async (req, res) => {
    const networkInfo = hrTokenService.getNetworkInfo();
    
    let status = {
      ...networkInfo,
      connected: false,
      balance: '0',
      error: null
    };

    try {
      // Check connection
      status.connected = await hrTokenService.verifyConnection();
      
      // Get admin wallet balance if connected
      if (status.connected && status.walletAddress !== 'Not configured') {
        status.balance = await hrTokenService.getTokenBalance(status.walletAddress);
      }
      
    } catch (error) {
      status.error = error.message;
    }

    res.json({
      success: true,
      data: { hrToken: status }
    });
  })
);

module.exports = router;