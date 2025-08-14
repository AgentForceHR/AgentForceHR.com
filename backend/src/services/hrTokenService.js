const { ethers } = require('ethers');

class HRTokenService {
  constructor() {
    this.network = process.env.BLOCKCHAIN_NETWORK || 'testnet';
    this.rpcUrl = this.network === 'mainnet' 
      ? process.env.SONIC_MAINNET_RPC_URL 
      : process.env.SONIC_TESTNET_RPC_URL;
    
    this.tokenAddress = this.network === 'mainnet'
      ? process.env.HR_TOKEN_CONTRACT_MAINNET
      : process.env.HR_TOKEN_CONTRACT_TESTNET;

    // Initialize provider
    this.provider = new ethers.JsonRpcProvider(this.rpcUrl);
    
    // Initialize wallet
    this.wallet = null;
    this.tokenContract = null;
    this.initializeWallet();

    // ERC-20 Token ABI (standard functions)
    this.tokenABI = [
      // Read functions
      {
        "inputs": [],
        "name": "name",
        "outputs": [{"name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol", 
        "outputs": [{"name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [{"name": "account", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {"name": "owner", "type": "address"},
          {"name": "spender", "type": "address"}
        ],
        "name": "allowance",
        "outputs": [{"name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
      },
      // Write functions
      {
        "inputs": [
          {"name": "to", "type": "address"},
          {"name": "amount", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {"name": "spender", "type": "address"},
          {"name": "amount", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {"name": "from", "type": "address"},
          {"name": "to", "type": "address"},
          {"name": "amount", "type": "uint256"}
        ],
        "name": "transferFrom",
        "outputs": [{"name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      // Events
      {
        "anonymous": false,
        "inputs": [
          {"indexed": true, "name": "from", "type": "address"},
          {"indexed": true, "name": "to", "type": "address"},
          {"indexed": false, "name": "value", "type": "uint256"}
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {"indexed": true, "name": "owner", "type": "address"},
          {"indexed": true, "name": "spender", "type": "address"},
          {"indexed": false, "name": "value", "type": "uint256"}
        ],
        "name": "Approval",
        "type": "event"
      }
    ];
  }

  /**
   * Initialize wallet with proper error handling
   */
  initializeWallet() {
    try {
      const privateKey = process.env.PRIVATE_KEY;
      
      if (!privateKey || privateKey === 'your-wallet-private-key-here' || privateKey.includes('REDACTED')) {
        console.warn('⚠️  No valid private key found. HR Token features will be disabled.');
        return;
      }

      if (!privateKey.match(/^0x[a-fA-F0-9]{64}$/)) {
        console.warn('⚠️  Invalid private key format. HR Token features will be disabled.');
        return;
      }

      this.wallet = new ethers.Wallet(privateKey, this.provider);
      this.tokenContract = new ethers.Contract(this.tokenAddress, this.tokenABI, this.wallet);
      
      console.log('✅ HR Token service initialized successfully');
      console.log(`   Network: ${this.network}`);
      console.log(`   Token Contract: ${this.tokenAddress}`);
      console.log(`   Wallet: ${this.wallet.address}`);
      
    } catch (error) {
      console.error('❌ Failed to initialize HR Token wallet:', error.message);
      this.wallet = null;
      this.tokenContract = null;
    }
  }

  /**
   * Check if HR Token service is available
   */
  isAvailable() {
    return this.wallet !== null && this.tokenContract !== null;
  }

  /**
   * Get HR token balance for a wallet address
   * @param {string} address - Wallet address to check
   * @returns {Promise<string>} - Token balance in readable format
   */
  async getTokenBalance(address) {
    try {
      if (!this.isAvailable()) {
        throw new Error('HR Token service not configured');
      }

      const balance = await this.tokenContract.balanceOf(address);
      const decimals = await this.tokenContract.decimals();
      
      return ethers.formatUnits(balance, decimals);
    } catch (error) {
      console.error('❌ Error fetching token balance:', error);
      throw new Error('Failed to fetch HR token balance');
    }
  }

  /**
   * Get token information (name, symbol, decimals, total supply)
   * @returns {Promise<Object>} - Token information
   */
  async getTokenInfo() {
    try {
      if (!this.isAvailable()) {
        throw new Error('HR Token service not configured');
      }

      const [name, symbol, decimals, totalSupply] = await Promise.all([
        this.tokenContract.name(),
        this.tokenContract.symbol(),
        this.tokenContract.decimals(),
        this.tokenContract.totalSupply()
      ]);

      return {
        name,
        symbol,
        decimals: Number(decimals),
        totalSupply: ethers.formatUnits(totalSupply, decimals),
        contractAddress: this.tokenAddress,
        network: this.network
      };
    } catch (error) {
      console.error('❌ Error fetching token info:', error);
      throw new Error('Failed to fetch HR token information');
    }
  }

  /**
   * Transfer HR tokens (admin only)
   * @param {string} toAddress - Recipient address
   * @param {string} amount - Amount to transfer (in token units)
   * @returns {Promise<Object>} - Transaction result
   */
  async transferTokens(toAddress, amount) {
    try {
      if (!this.isAvailable()) {
        throw new Error('HR Token service not configured');
      }

      console.log(`💰 Transferring ${amount} HR tokens to ${toAddress}...`);

      const decimals = await this.tokenContract.decimals();
      const amountWei = ethers.parseUnits(amount, decimals);

      // Estimate gas
      const gasEstimate = await this.tokenContract.transfer.estimateGas(toAddress, amountWei);

      // Execute transfer
      const tx = await this.tokenContract.transfer(toAddress, amountWei, {
        gasLimit: gasEstimate * 120n / 100n // 20% buffer
      });

      console.log(`📝 Transfer transaction submitted: ${tx.hash}`);

      const receipt = await tx.wait();
      
      console.log(`✅ Transfer completed! Block: ${receipt.blockNumber}`);

      return {
        success: true,
        txHash: tx.hash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString(),
        amount,
        recipient: toAddress
      };

    } catch (error) {
      console.error('❌ Token transfer error:', error);
      
      if (error.code === 'INSUFFICIENT_FUNDS') {
        throw new Error('Insufficient ETH for gas fees');
      } else if (error.reason && error.reason.includes('ERC20InsufficientBalance')) {
        throw new Error('Insufficient HR token balance');
      }
      
      throw new Error('Failed to transfer HR tokens');
    }
  }

  /**
   * Check if address has sufficient tokens for agent creation
   * @param {string} address - Address to check
   * @param {string} requiredAmount - Required token amount
   * @returns {Promise<boolean>} - Whether address has sufficient balance
   */
  async hasSufficientBalance(address, requiredAmount) {
    try {
      const balance = await this.getTokenBalance(address);
      return parseFloat(balance) >= parseFloat(requiredAmount);
    } catch (error) {
      console.error('❌ Error checking token balance:', error);
      return false;
    }
  }

  /**
   * Get network information
   * @returns {Object} - Network and contract information
   */
  getNetworkInfo() {
    return {
      network: this.network,
      rpcUrl: this.rpcUrl,
      tokenAddress: this.tokenAddress,
      walletAddress: this.wallet ? this.wallet.address : 'Not configured',
      isAvailable: this.isAvailable()
    };
  }

  /**
   * Verify token contract connection
   * @returns {Promise<boolean>} - Connection status
   */
  async verifyConnection() {
    try {
      if (!this.isAvailable()) {
        return false;
      }

      // Try to call a view function to verify connection
      await this.tokenContract.name();
      return true;
    } catch (error) {
      console.error('❌ HR Token contract connection verification failed:', error);
      return false;
    }
  }
}

module.exports = new HRTokenService();