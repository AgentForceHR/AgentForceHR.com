// Demo API client that simulates backend responses for investor demonstrations
import { 
  demoUsers, 
  demoAgents, 
  demoHRTokenInfo, 
  demoTokenStatus, 
  demoDashboardStats,
  demoEmployeeTasks,
  simulateApiDelay,
  generateDemoTxHash,
  generateDemoAgentId,
  DemoAgent,
  DemoUser
} from './demoData';
import { ApiResponse } from './api';

class DemoApiClient {
  private demoAgents: DemoAgent[] = [...demoAgents];
  private demoTokenBalance = 5000.0;

  // Check if demo mode is enabled
  private isDemoMode(): boolean {
    return localStorage.getItem('demo_mode') === 'true';
  }

  // Authentication Methods (Demo)
  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: DemoUser }>> {
    await simulateApiDelay();
    
    const user = demoUsers.find(u => u.email === email) || demoUsers[0];
    
    return {
      success: true,
      message: 'Login successful (Demo)',
      data: {
        token: 'demo-token-' + Date.now(),
        user
      }
    };
  }

  async getCurrentUser(): Promise<ApiResponse<{ user: DemoUser }>> {
    await simulateApiDelay(300);
    
    return {
      success: true,
      data: { user: demoUsers[0] }
    };
  }

  async validateAdminAccess(): Promise<boolean> {
    await simulateApiDelay(200);
    return true;
  }

  // Agent Methods (Demo)
  async createAgent(agentData: {
    name: string;
    description: string;
    onboardingScript: string;
    configuration?: any;
  }): Promise<ApiResponse<{ agent: DemoAgent; blockchain: any }>> {
    await simulateApiDelay(2000); // Simulate longer creation time
    
    const newAgent: DemoAgent = {
      _id: generateDemoAgentId(),
      name: agentData.name,
      description: agentData.description,
      onboardingScript: agentData.onboardingScript,
      configuration: {
        personality: agentData.configuration?.personality || 'professional',
        responseStyle: agentData.configuration?.responseStyle || 'helpful',
        knowledgeBase: agentData.configuration?.knowledgeBase || [],
        workflows: agentData.configuration?.workflows || []
      },
      createdBy: demoUsers[0],
      assignedEmployees: [],
      isActive: true,
      metrics: {
        totalInteractions: 0,
        averageResponseTime: 0,
        satisfactionScore: 0
      },
      blockchainTxHash: generateDemoTxHash(),
      agentId: generateDemoAgentId(),
      createdAt: new Date().toISOString()
    };

    // Add to demo agents list
    this.demoAgents.push(newAgent);
    
    // Simulate token deduction (10 HRT per agent)
    this.demoTokenBalance = Math.max(0, this.demoTokenBalance - 10);

    return {
      success: true,
      message: 'Agent created successfully (Demo)',
      data: {
        agent: newAgent,
        blockchain: {
          txHash: newAgent.blockchainTxHash,
          blockNumber: Math.floor(Math.random() * 1000000),
          network: 'testnet',
          tokensCost: 10
        }
      }
    };
  }

  async getAgents(params?: any): Promise<ApiResponse<{ agents: DemoAgent[]; pagination: any }>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: {
        agents: this.demoAgents,
        pagination: {
          page: 1,
          limit: 10,
          total: this.demoAgents.length,
          pages: 1
        }
      }
    };
  }

  async getAgent(id: string): Promise<ApiResponse<{ agent: DemoAgent }>> {
    await simulateApiDelay();
    
    const agent = this.demoAgents.find(a => a._id === id) || this.demoAgents[0];
    
    return {
      success: true,
      data: { agent }
    };
  }

  async updateAgent(id: string, updates: Partial<DemoAgent>): Promise<ApiResponse<{ agent: DemoAgent }>> {
    await simulateApiDelay();
    
    const agentIndex = this.demoAgents.findIndex(a => a._id === id);
    if (agentIndex !== -1) {
      this.demoAgents[agentIndex] = { ...this.demoAgents[agentIndex], ...updates };
    }
    
    return {
      success: true,
      message: 'Agent updated successfully (Demo)',
      data: { agent: this.demoAgents[agentIndex] || this.demoAgents[0] }
    };
  }

  async assignEmployeesToAgent(agentId: string, employeeIds: string[]): Promise<ApiResponse<{ agent: DemoAgent }>> {
    await simulateApiDelay();
    
    const agentIndex = this.demoAgents.findIndex(a => a._id === agentId);
    if (agentIndex !== -1) {
      const employees = demoUsers.filter(u => employeeIds.includes(u.id) && u.role === 'employee');
      this.demoAgents[agentIndex].assignedEmployees = employees;
    }
    
    return {
      success: true,
      message: 'Employees assigned successfully (Demo)',
      data: { agent: this.demoAgents[agentIndex] || this.demoAgents[0] }
    };
  }

  async chatWithAgent(agentId: string, message: string): Promise<ApiResponse<{
    response: string;
    metadata: any;
    conversationId: string;
  }>> {
    await simulateApiDelay(1500); // Simulate AI processing time
    
    // Generate contextual responses based on message content
    const lowerMessage = message.toLowerCase();
    let response = "I'm here to help with your onboarding process. What specific information do you need?";
    
    if (lowerMessage.includes('benefit')) {
      response = "Our benefits package includes comprehensive health insurance, dental, vision, and a 401(k) with 4% company matching. Would you like me to walk you through the enrollment process?";
    } else if (lowerMessage.includes('laptop') || lowerMessage.includes('equipment')) {
      response = "Your laptop has been ordered and will arrive within 2 business days. IT will contact you to schedule the setup appointment. In the meantime, I can help you prepare by gathering the necessary information.";
    } else if (lowerMessage.includes('schedule') || lowerMessage.includes('orientation')) {
      response = "Your orientation is scheduled for next Monday at 9:00 AM in Conference Room A. I've sent you a calendar invite with all the details. Would you like me to explain what to expect during orientation?";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      response = "Hello! Welcome to the company! I'm your personal onboarding assistant. I can help you with benefits enrollment, IT setup, scheduling, company policies, and any other questions you might have. What would you like to know about?";
    }
    
    return {
      success: true,
      data: {
        response,
        metadata: {
          responseTime: Math.floor(Math.random() * 500) + 500,
          confidence: 0.85 + Math.random() * 0.15,
          intent: 'general_inquiry'
        },
        conversationId: 'demo-conv-' + Date.now()
      }
    };
  }

  // Admin Methods (Demo)
  async getAdminDashboard(): Promise<ApiResponse<any>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: demoDashboardStats
    };
  }

  async getAllUsers(params?: any): Promise<ApiResponse<{ users: DemoUser[]; pagination: any }>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: {
        users: demoUsers,
        pagination: {
          page: 1,
          limit: 10,
          total: demoUsers.length,
          pages: 1
        }
      }
    };
  }

  // Employee Methods (Demo)
  async getEmployeeDashboard(): Promise<ApiResponse<any>> {
    await simulateApiDelay();
    
    const completedTasks = demoEmployeeTasks.filter(t => t.status === 'completed').length;
    
    return {
      success: true,
      data: {
        employee: demoUsers[1],
        onboardingProgress: {
          total: demoEmployeeTasks.length,
          completed: completedTasks,
          percentage: Math.round((completedTasks / demoEmployeeTasks.length) * 100),
          status: 'in-progress'
        },
        recentConversations: [
          {
            _id: 'demo-conv-1',
            agent: { name: 'HR Onboarding Assistant' },
            messages: [
              { sender: 'agent', content: 'How can I help you today?', timestamp: new Date() }
            ],
            updatedAt: new Date()
          }
        ],
        stats: {
          totalInteractions: 23,
          assignedAgents: 2,
          activeConversations: 1
        }
      }
    };
  }

  async getEmployeeAgents(): Promise<ApiResponse<{ agents: DemoAgent[] }>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: { agents: this.demoAgents.filter(a => a.isActive) }
    };
  }

  async getEmployeeTasks(): Promise<ApiResponse<any>> {
    await simulateApiDelay();
    
    const completedTasks = demoEmployeeTasks.filter(t => t.status === 'completed').length;
    
    return {
      success: true,
      data: {
        tasks: demoEmployeeTasks,
        progress: {
          total: demoEmployeeTasks.length,
          completed: completedTasks,
          percentage: Math.round((completedTasks / demoEmployeeTasks.length) * 100)
        }
      }
    };
  }

  // HR Token Methods (Demo)
  async getHRTokenInfo(): Promise<ApiResponse<{ tokenInfo: any }>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: { tokenInfo: demoHRTokenInfo }
    };
  }

  async getHRTokenBalance(address: string): Promise<ApiResponse<any>> {
    await simulateApiDelay();
    
    // Simulate different balances for different addresses
    const balance = address === demoTokenStatus.walletAddress ? 
      this.demoTokenBalance.toString() : 
      (Math.random() * 1000).toFixed(2);
    
    return {
      success: true,
      data: {
        address,
        balance,
        network: 'testnet'
      }
    };
  }

  async transferHRTokens(toAddress: string, amount: string, purpose?: string): Promise<ApiResponse<any>> {
    await simulateApiDelay(2000); // Simulate blockchain transaction time
    
    const transferAmount = parseFloat(amount);
    
    if (transferAmount > this.demoTokenBalance) {
      throw new Error('Insufficient token balance for transfer');
    }
    
    // Deduct from demo balance
    this.demoTokenBalance -= transferAmount;
    
    return {
      success: true,
      message: 'HR tokens transferred successfully (Demo)',
      data: {
        success: true,
        txHash: generateDemoTxHash(),
        blockNumber: Math.floor(Math.random() * 1000000),
        gasUsed: '21000',
        amount,
        recipient: toAddress
      }
    };
  }

  async getHRTokenStatus(): Promise<ApiResponse<{ hrToken: any }>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: {
        hrToken: {
          ...demoTokenStatus,
          balance: this.demoTokenBalance.toString()
        }
      }
    };
  }

  async getSystemHealth(): Promise<ApiResponse<any>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: {
        timestamp: new Date().toISOString(),
        status: 'healthy',
        services: {
          database: { status: 'healthy', responseTime: 45 },
          blockchain: { status: 'healthy', responseTime: 120, network: 'testnet' },
          ai: { status: 'configured', provider: 'Google Gemini' }
        }
      }
    };
  }

  async getBlockchainStatus(): Promise<ApiResponse<any>> {
    await simulateApiDelay();
    
    return {
      success: true,
      data: {
        blockchain: {
          ...demoTokenStatus,
          balance: this.demoTokenBalance.toString(),
          connected: true,
          error: null
        }
      }
    };
  }
}

export const demoApiClient = new DemoApiClient();