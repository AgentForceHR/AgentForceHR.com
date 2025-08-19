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
    await simulateApiDelay(800 + Math.random() * 700); // Variable response time
    
    // Enhanced contextual responses based on message content and agent type
    const lowerMessage = message.toLowerCase();
    const agent = this.demoAgents.find(a => a._id === agentId) || this.demoAgents[0];
    let response = `I'm ${agent.name} and I'm here to help you. What can I assist you with today?`;
    
    // Benefits-related responses
    if (lowerMessage.includes('benefit') || lowerMessage.includes('insurance') || lowerMessage.includes('health')) {
      const benefitsResponses = [
        "Our comprehensive benefits package includes health, dental, and vision insurance starting on your first day. We also offer a 401(k) with 4% company matching, unlimited PTO, and quarterly wellness stipends. Would you like me to walk you through the enrollment process?",
        "Great question about benefits! You have three health insurance options: Basic (company pays 80%), Premium (company pays 90%), and Family coverage. Dental and vision are included at no cost. I can help you compare plans - what's most important to you?",
        "Benefits enrollment is due by your second week. You'll need to choose your health plan, set up your 401(k) contribution (we match up to 4%), and select any additional coverage like life insurance. Should I send you the detailed comparison guide?"
      ];
      response = benefitsResponses[Math.floor(Math.random() * benefitsResponses.length)];
    } else if (lowerMessage.includes('laptop') || lowerMessage.includes('equipment')) {
      const equipmentResponses = [
        "Your MacBook Pro 16\" with 32GB RAM has been shipped and will arrive tomorrow by 2 PM. IT has pre-installed all necessary software including Slack, Office 365, and our project management tools. I'll send you the tracking number and setup guide.",
        "Great news! Your equipment package includes a laptop, monitor, keyboard, mouse, and headset. Everything should arrive by end of week. IT will schedule a 30-minute setup call to help you configure everything. Any specific software you need?",
        "Your laptop is ready for pickup from IT on the 3rd floor. They've already configured your email, VPN access, and installed department-specific software. Would you like me to schedule a pickup time that works for you?"
      ];
      response = equipmentResponses[Math.floor(Math.random() * equipmentResponses.length)];
    } else if (lowerMessage.includes('schedule') || lowerMessage.includes('orientation')) {
      const scheduleResponses = [
        "Your orientation is scheduled for Monday at 9:00 AM in the Main Conference Room. You'll meet the leadership team, learn about company culture, and complete your first-day paperwork. I've sent a calendar invite with the full agenda. Should I tell you what to bring?",
        "Perfect timing! Your schedule includes: Monday - Orientation & HR paperwork, Tuesday - Department introductions, Wednesday - IT training, Thursday - Benefits enrollment meeting, Friday - Team lunch. I can adjust any of these if needed.",
        "Your first week is carefully planned: Day 1 focuses on company overview and paperwork, Days 2-3 are department-specific training, Day 4 is systems access and benefits, Day 5 is team integration. Would you like me to send you the detailed schedule?"
      ];
      response = scheduleResponses[Math.floor(Math.random() * scheduleResponses.length)];
    } else if (lowerMessage.includes('policy') || lowerMessage.includes('handbook')) {
      const policyResponses = [
        "Our employee handbook covers everything from dress code to remote work policies. Key highlights: flexible work hours (core hours 10-3), unlimited PTO with 2-week minimum, professional development budget of $2,000/year. I can send you specific sections - what interests you most?",
        "Company policies are designed to support work-life balance and professional growth. We have clear guidelines on communication, project management, and career development. The handbook is in your employee portal. Any specific policy questions?",
        "Our policies emphasize trust and flexibility. Remote work is encouraged, we have a results-focused culture, and professional development is strongly supported. I can walk you through any specific policies you'd like to understand better."
      ];
      response = policyResponses[Math.floor(Math.random() * policyResponses.length)];
    } else if (lowerMessage.includes('team') || lowerMessage.includes('manager') || lowerMessage.includes('department')) {
      const teamResponses = [
        "You'll be joining the Engineering team led by Sarah Chen, our VP of Engineering. Your direct manager is Mike Rodriguez, Senior Engineering Manager. The team has 12 developers working on our core platform. I can schedule intro meetings with key team members.",
        "Your department has a collaborative culture with daily standups, weekly team lunches, and monthly innovation sessions. You'll be working closely with 3 other developers on the onboarding automation project. Would you like me to introduce you via Slack?",
        "The team is excited to meet you! Your manager has planned a welcome coffee chat for your first day, and the team has organized a lunch for your first Friday. Everyone is very welcoming and ready to help you succeed."
      ];
      response = teamResponses[Math.floor(Math.random() * teamResponses.length)];
    } else if (lowerMessage.includes('parking') || lowerMessage.includes('office') || lowerMessage.includes('location')) {
      const officeResponses = [
        "Our office is located at 123 Tech Plaza, downtown. Free parking is available in the attached garage (levels 2-4). Your badge will give you access to the building and parking. The office has a gym, cafeteria, and several collaboration spaces.",
        "You'll find us on the 15th floor of the Tech Plaza building. Parking is free for employees - just show your badge at the gate. The office has great city views, a full kitchen, and quiet zones for focused work. I can send you a floor map.",
        "Office amenities include free parking, on-site gym, game room, and a coffee bar. We're a 5-minute walk from the metro station and surrounded by great lunch spots. The office is open 24/7 for those who prefer flexible hours."
      ];
      response = officeResponses[Math.floor(Math.random() * officeResponses.length)];
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      const greetingResponses = [
        `Hello! Welcome to the company! I'm ${agent.name}, your personal onboarding assistant. I can help you with benefits enrollment, IT setup, scheduling, company policies, team introductions, and much more. What would you like to know about first?`,
        `Hi there! Congratulations on joining our team! I'm here to make your onboarding smooth and enjoyable. I can assist with everything from benefits questions to office logistics. What's on your mind today?`,
        `Welcome aboard! I'm ${agent.name} and I'm excited to help you get started. I have access to all the information you'll need about benefits, policies, your team, and office setup. How can I help you today?`
      ];
      response = greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
    } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      const thankResponses = [
        "You're very welcome! I'm here whenever you need help. Feel free to ask me anything about your onboarding process, benefits, or company policies. Is there anything else I can assist you with?",
        "Happy to help! That's what I'm here for. Remember, I'm available 24/7 if you have any questions during your onboarding journey. Don't hesitate to reach out anytime!",
        "My pleasure! I'm glad I could help. I'll be here throughout your entire onboarding process, so please don't hesitate to ask if you need anything else."
      ];
      response = thankResponses[Math.floor(Math.random() * thankResponses.length)];
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      const helpResponses = [
        "I'm here to support you every step of the way! I can help with benefits enrollment, IT setup, policy questions, scheduling meetings, connecting with your team, office logistics, and much more. What specific area would you like help with?",
        "Absolutely! I can assist with a wide range of onboarding topics including benefits selection, equipment setup, policy clarifications, team introductions, and scheduling. I also have access to all company resources and can connect you with the right people. What do you need help with?",
        "I'd be happy to help! My knowledge covers benefits, policies, IT procedures, office information, team details, and company culture. I can also schedule meetings, send documents, and connect you with colleagues. What would be most helpful right now?"
      ];
      response = helpResponses[Math.floor(Math.random() * helpResponses.length)];
    } else {
      const generalResponses = [
        "That's an interesting question! While I may not have specific information about that topic, I can help you find the right person or resource. I'm great with benefits, IT setup, policies, scheduling, and team introductions. Is there something specific in those areas I can help with?",
        "I want to make sure I give you the most accurate information. For that specific question, I'd recommend reaching out to your manager or HR directly. In the meantime, I can help with benefits enrollment, equipment setup, or policy questions. What would be most helpful?",
        "Let me help you with that! While I specialize in onboarding topics like benefits, IT setup, and company policies, I can also connect you with the right team member for more specific questions. What aspect of your onboarding can I assist with today?"
      ];
      response = generalResponses[Math.floor(Math.random() * generalResponses.length)];
    }
    
    return {
      success: true,
      data: {
        response,
        metadata: {
          responseTime: Math.floor(Math.random() * 400) + 600,
          confidence: 0.82 + Math.random() * 0.18,
          intent: lowerMessage.includes('benefit') ? 'benefits_inquiry' :
                  lowerMessage.includes('laptop') ? 'equipment_request' :
                  lowerMessage.includes('schedule') ? 'scheduling_request' :
                  lowerMessage.includes('policy') ? 'policy_question' :
                  lowerMessage.includes('team') ? 'team_inquiry' :
                  'general_inquiry'
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