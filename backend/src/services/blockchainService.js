const { ethers } = require('ethers');

class BlockchainService {
  constructor() {
    this.network = process.env.BLOCKCHAIN_NETWORK || 'testnet';
    this.rpcUrl = this.network === 'mainnet' 
      ? process.env.SONIC_MAINNET_RPC_URL 
      : process.env.SONIC_TESTNET_RPC_URL;
    
    this.contractAddress = this.network === 'mainnet'
      ? process.env.CONTRACT_ADDRESS_MAINNET
      : process.env.CONTRACT_ADDRESS_TESTNET;

    // Initialize provider
    this.provider = new ethers.JsonRpcProvider(this.rpcUrl);
    
    // Initialize wallet only if private key is valid
    this.wallet = null;
    this.initializeWallet();

    // Smart contract ABI - HR Agent Registry Contract
    this.contractABI = [
      {
        "inputs": [
          {"name": "agentId", "type": "string"},
          {"name": "name", "type": "string"},
          {"name": "creator", "type": "address"},
          {"name": "metadataHash", "type": "string"}
        ],
        "name": "registerAgent",
        "outputs": [{"name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [{"name": "agentId", "type": "string"}],
        "name": "getAgent",
        "outputs": [
          {"name": "name", "type": "string"},
          {"name": "creator", "type": "address"},
          {"name": "metadataHash", "type": "string"},
          {"name": "isActive", "type": "bool"},
          {"name": "createdAt", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {"name": "agentId", "type": "string"},
          {"name": "isActive", "type": "bool"}
        ],
        "name": "updateAgentStatus",
        "outputs": [{"name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [{"name": "creator", "type": "address"}],
        "name": "getAgentsByCreator",
        "outputs": [{"name": "", "type": "string[]"}],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {"indexed": true, "name": "agentId", "type": "string"},
          {"indexed": true, "name": "creator", "type": "address"},
          {"indexed": false, "name": "name", "type": "string"}
        ],
        "name": "AgentRegistered",
        "type": "event"
      }
    ];

    // Initialize contract instance (will be set after wallet initialization)
    this.contract = null;
  }

  /**
   * Initialize wallet with proper error handling
   */
  initializeWallet() {
    try {
      const privateKey = process.env.PRIVATE_KEY;
      
      // Check if private key exists and is not a placeholder
      if (!privateKey || privateKey === 'your-wallet-private-key-here' || privateKey.includes('REDACTED')) {
        console.warn('⚠️  No valid private key found. Blockchain features will be disabled.');
        console.warn('   Set PRIVATE_KEY in your .env file to enable blockchain functionality.');
        return;
      }

      // Validate private key format
      if (!privateKey.match(/^0x[a-fA-F0-9]{64}$/)) {
        console.warn('⚠️  Invalid private key format. Expected 64-character hex string with 0x prefix.');
        console.warn('   Blockchain features will be disabled.');
        return;
      }

      // Initialize wallet
      this.wallet = new ethers.Wallet(privateKey, this.provider);
      
      // Initialize contract instance
      this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.wallet);
      
      console.log('✅ Blockchain service initialized successfully');
      console.log(`   Network: ${this.network}`);
      console.log(`   Wallet: ${this.wallet.address}`);
      
    } catch (error) {
      console.error('❌ Failed to initialize blockchain wallet:', error.message);
      console.warn('   Blockchain features will be disabled.');
      this.wallet = null;
      this.contract = null;
    }
  }

  /**
   * Check if blockchain service is available
   */
  isAvailable() {
    return this.wallet !== null && this.contract !== null;
  }

  /**
   * Register a new agent on the blockchain
   * @param {Object} agentData - Agent data to register
   * @returns {Promise<Object>} - Transaction result
   */
  async registerAgent(agentData) {
    try {
      if (!this.isAvailable()) {
        console.warn('⚠️  Blockchain service not available. Skipping blockchain registration.');
        return {
          success: false,
          error: 'Blockchain service not configured',
          skipped: true
        };
      }

      console.log(`🔗 Registering agent ${agentData.agentId} on ${this.network}...`);

      // Create metadata hash (simplified - in production, use IPFS)
      const metadataHash = ethers.keccak256(
        ethers.toUtf8Bytes(JSON.stringify({
          name: agentData.name,
          description: agentData.description,
          configuration: agentData.configuration,
          createdAt: new Date().toISOString()
        }))
      );

      // Estimate gas
      const gasEstimate = await this.contract.registerAgent.estimateGas(
        agentData.agentId,
        agentData.name,
        this.wallet.address,
        metadataHash
      );

      // Execute transaction with 20% gas buffer
      const tx = await this.contract.registerAgent(
        agentData.agentId,
        agentData.name,
        this.wallet.address,
        metadataHash,
        {
          gasLimit: gasEstimate * 120n / 100n // 20% buffer
        }
      );

      console.log(`📝 Transaction submitted: ${tx.hash}`);

      // Wait for confirmation
      const receipt = await tx.wait();
      
      console.log(`✅ Agent registered successfully! Block: ${receipt.blockNumber}`);

      return {
        success: true,
        txHash: tx.hash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString(),
        metadataHash
      };

    } catch (error) {
      console.error('❌ Blockchain registration error:', error);
      
      // Handle specific error types
      if (error.code === 'INSUFFICIENT_FUNDS') {
        throw new Error('Insufficient funds for blockchain transaction');
      } else if (error.code === 'NETWORK_ERROR') {
        throw new Error('Blockchain network connection error');
      } else if (error.reason) {
        throw new Error(`Smart contract error: ${error.reason}`);
      }
      
      throw new Error('Failed to register agent on blockchain');
    }
  }

  /**
   * Get agent data from blockchain
   * @param {string} agentId - Agent ID to lookup
   * @returns {Promise<Object>} - Agent data from blockchain
   */
  async getAgent(agentId) {
    try {
      if (!this.isAvailable()) {
        throw new Error('Blockchain service not configured');
      }

      console.log(`🔍 Fetching agent ${agentId} from blockchain...`);

      const result = await this.contract.getAgent(agentId);
      
      return {
        name: result[0],
        creator: result[1],
        metadataHash: result[2],
        isActive: result[3],
        createdAt: new Date(Number(result[4]) * 1000).toISOString()
      };

    } catch (error) {
      console.error('❌ Error fetching agent from blockchain:', error);
      throw new Error('Failed to fetch agent from blockchain');
    }
  }

  /**
   * Update agent status on blockchain
   * @param {string} agentId - Agent ID
   * @param {boolean} isActive - New active status
   * @returns {Promise<Object>} - Transaction result
   */
  async updateAgentStatus(agentId, isActive) {
    try {
      if (!this.isAvailable()) {
        console.warn('⚠️  Blockchain service not available. Skipping status update.');
        return {
          success: false,
          error: 'Blockchain service not configured',
          skipped: true
        };
      }

      console.log(`🔄 Updating agent ${agentId} status to ${isActive}...`);

      const gasEstimate = await this.contract.updateAgentStatus.estimateGas(agentId, isActive);
      
      const tx = await this.contract.updateAgentStatus(agentId, isActive, {
        gasLimit: gasEstimate * 120n / 100n
      });

      const receipt = await tx.wait();
      
      console.log(`✅ Agent status updated! Block: ${receipt.blockNumber}`);

      return {
        success: true,
        txHash: tx.hash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString()
      };

    } catch (error) {
      console.error('❌ Error updating agent status:', error);
      throw new Error('Failed to update agent status on blockchain');
    }
  }

  /**
   * Get all agents created by a specific address
   * @param {string} creatorAddress - Creator's wallet address
   * @returns {Promise<Array>} - Array of agent IDs
   */
  async getAgentsByCreator(creatorAddress) {
    try {
      if (!this.isAvailable()) {
        throw new Error('Blockchain service not configured');
      }

      console.log(`🔍 Fetching agents for creator ${creatorAddress}...`);

      const agentIds = await this.contract.getAgentsByCreator(creatorAddress);
      
      return agentIds;

    } catch (error) {
      console.error('❌ Error fetching agents by creator:', error);
      throw new Error('Failed to fetch agents by creator');
    }
  }

  /**
   * Get current network info
   * @returns {Object} - Network information
   */
  getNetworkInfo() {
    return {
      network: this.network,
      rpcUrl: this.rpcUrl,
      contractAddress: this.contractAddress,
      hrTokenAddress: this.hrTokenAddress,
      walletAddress: this.wallet ? this.wallet.address : 'Not configured',
      isAvailable: this.isAvailable()
    };
  }

  /**
   * Check wallet balance
   * @returns {Promise<string>} - Balance in ETH
   */
  async getWalletBalance() {
    try {
      if (!this.isAvailable()) {
        throw new Error('Blockchain service not configured');
      }

      const balance = await this.provider.getBalance(this.wallet.address);
      return ethers.formatEther(balance);
    } catch (error) {
      console.error('❌ Error fetching wallet balance:', error);
      throw new Error('Failed to fetch wallet balance');
    }
  }

  /**
   * Verify contract connection
   * @returns {Promise<boolean>} - Connection status
   */
  async verifyConnection() {
    try {
      if (!this.isAvailable()) {
        return false;
      }

      // Try to call a view function to verify connection
      await this.contract.getAgentsByCreator(this.wallet.address);
      return true;
    } catch (error) {
      console.error('❌ Contract connection verification failed:', error);
      return false;
    }
  }
}

module.exports = new BlockchainService();