const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateTokenPair, authenticateToken, refreshToken, requireAdmin } = require('../middleware/auth');
const { validateRegister, validateLogin, validateUpdateProfile } = require('../middleware/validation');
const { asyncHandler, AppError } = require('../middleware/errorHandler');

const router = express.Router();

/**
 * @route   POST /api/auth/seed-admin
 * @desc    Create initial admin user (only if no admin exists)
 * @access  Public (one-time setup)
 */
router.post('/seed-admin', asyncHandler(async (req, res) => {
  // Check if any admin user already exists
  const existingAdmin = await User.findOne({ role: 'admin' });
  
  if (existingAdmin) {
    return res.status(400).json({
      success: false,
      message: 'Admin user already exists'
    });
  }

  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({
      success: false,
      message: 'Email, password, firstName, and lastName are required'
    });
  }

  // Create admin user
  const adminUser = new User({
    email: email.toLowerCase(),
    password,
    firstName,
    lastName,
    role: 'admin',
    department: 'Administration',
    position: 'System Administrator'
  });

  await adminUser.save();

  // Generate tokens
  const tokens = generateTokenPair(adminUser);

  res.status(201).json({
    success: true,
    message: 'Admin user created successfully',
    data: {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: adminUser._id,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role,
        department: adminUser.department,
        position: adminUser.position
      }
    }
  });
}));

/**
 * @route   POST /api/auth/register
 * @desc    Register new user (admin/hr can create any role, employees self-register)
 * @access  Public for employees, Protected for admin/hr creating other roles
 */
router.post('/register', validateRegister, asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName, role, department, position } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new AppError('User with this email already exists', 400);
  }

  // Only allow employee self-registration, admin/hr must be created by existing admin
  if (role && role !== 'employee') {
    // Check if request is from authenticated admin
    const authHeader = req.headers.authorization;
    if (authHeader) {
      try {
        const token = authHeader.split(' ')[1];
        const jwt = require('jsonwebtoken');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const adminUser = await User.findById(decoded.userId);
        
        if (!adminUser || adminUser.role !== 'admin') {
          throw new AppError('Only administrators can create admin/hr accounts', 403);
        }
      } catch (error) {
        throw new AppError('Only administrators can create admin/hr accounts', 403);
      }
    } else {
      throw new AppError('Only administrators can create admin/hr accounts', 403);
    }
  }

  // Create new user
  const user = new User({
    email: email.toLowerCase(),
    password,
    firstName,
    lastName,
    role: role || 'employee',
    department,
    position
  });

  await user.save();

  // Generate token pair
  const tokens = generateTokenPair(user);

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        department: user.department,
        position: user.position
      }
    }
  });
}));

/**
 * @route   POST /api/auth/login
 * @desc    Login user and return JWT token
 * @access  Public
 */
router.post('/login', validateLogin, asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user and include password for comparison
  const user = await User.findOne({ 
    email: email.toLowerCase(),
    isActive: true 
  }).select('+password');

  if (!user) {
    throw new AppError('Invalid email or password', 401);
  }

  // Check password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new AppError('Invalid email or password', 401);
  }

  // Generate token pair
  const tokens = generateTokenPair(user);

  // Update last login (optional)
  user.lastLogin = new Date();
  await user.save();

  res.json({
    success: true,
    message: 'Login successful',
    data: {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        department: user.department,
        position: user.position,
        onboardingStatus: user.onboardingStatus
      }
    }
  });
}));

/**
 * @route   GET /api/auth/me
 * @desc    Get current user profile
 * @access  Protected
 */
router.get('/me', authenticateToken, asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate('assignedAgents', 'name description isActive')
    .select('-password');

  res.json({
    success: true,
    data: { user }
  });
}));

/**
 * @route   POST /api/auth/refresh
 * @desc    Refresh access token using refresh token
 * @access  Public
 */
router.post('/refresh', refreshToken);

/**
 * @route   POST /api/auth/validate-admin
 * @desc    Validate admin token and return admin status
 * @access  Protected (Admin only)
 */
router.post('/validate-admin', authenticateToken, requireAdmin, asyncHandler(async (req, res) => {
  res.json({
    success: true,
    data: {
      isAdmin: true,
      user: {
        id: req.user._id,
        email: req.user.email,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        role: req.user.role
      }
    }
  });
}));

/**
 * @route   PUT /api/auth/profile
 * @desc    Update user profile
 * @access  Protected
 */
router.put('/profile', authenticateToken, validateUpdateProfile, asyncHandler(async (req, res) => {
  const { firstName, lastName, department, position } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(department && { department }),
      ...(position && { position })
    },
    { new: true, runValidators: true }
  ).select('-password');

  res.json({
    success: true,
    message: 'Profile updated successfully',
    data: { user }
  });
}));

/**
 * @route   POST /api/auth/change-password
 * @desc    Change user password
 * @access  Protected
 */
router.post('/change-password', authenticateToken, asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Validation
  if (!currentPassword || !newPassword) {
    throw new AppError('Current password and new password are required', 400);
  }

  if (newPassword.length < 6) {
    throw new AppError('New password must be at least 6 characters long', 400);
  }

  // Get user with password
  const user = await User.findById(req.user._id).select('+password');

  // Verify current password
  const isCurrentPasswordValid = await user.comparePassword(currentPassword);
  if (!isCurrentPasswordValid) {
    throw new AppError('Current password is incorrect', 400);
  }

  // Update password
  user.password = newPassword;
  await user.save();

  res.json({
    success: true,
    message: 'Password changed successfully'
  });
}));

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user (client-side token removal)
 * @access  Protected
 */
router.post('/logout', authenticateToken, (req, res) => {
  // In a more sophisticated setup, you might maintain a blacklist of tokens
  // For now, we rely on client-side token removal
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});

module.exports = router;