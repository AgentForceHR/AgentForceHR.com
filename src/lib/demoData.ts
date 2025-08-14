// Demo data and mock API responses for investor demonstrations
export interface DemoUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'hr' | 'employee';
  department?: string;
  position?: string;
  onboardingStatus?: 'pending' | 'in-progress' | 'completed';
}

export interface DemoAgent {
  _id: string;
  name: string;
  description: string;
  onboardingScript: string;
  configuration: {
    personality: string;
    responseStyle: string;
    knowledgeBase: Array<{ topic: string; content: string }>;
    workflows: Array<{ name: string; steps: string[]; triggers: string[] }>;
  };
  createdBy: DemoUser;
  assignedEmployees: DemoUser[];
  isActive: boolean;
  metrics: {
    totalInteractions: number;
    averageResponseTime: number;
    satisfactionScore: number;
  };
  blockchainTxHash: string;
  agentId: string;
  createdAt: string;
}

export interface DemoHRTokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
  contractAddress: string;
  network: string;
}

// Demo users
export const demoUsers: DemoUser[] = [
  {
    id: 'demo-admin-1',
    email: 'admin@demo.com',
    firstName: 'Demo',
    lastName: 'Administrator',
    role: 'admin',
    department: 'Administration',
    position: 'System Administrator'
  },
  {
    id: 'demo-employee-1',
    email: 'sarah@demo.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    role: 'employee',
    department: 'Engineering',
    position: 'Software Engineer',
    onboardingStatus: 'in-progress'
  },
  {
    id: 'demo-employee-2',
    email: 'mike@demo.com',
    firstName: 'Mike',
    lastName: 'Chen',
    role: 'employee',
    department: 'Marketing',
    position: 'Marketing Specialist',
    onboardingStatus: 'pending'
  }
];

// Demo agents
export const demoAgents: DemoAgent[] = [
  {
    _id: 'demo-agent-1',
    name: 'HR Onboarding Assistant',
    description: 'Helps new employees with the complete onboarding process',
    onboardingScript: 'Welcome to the company! I\'m here to guide you through your onboarding journey.',
    configuration: {
      personality: 'professional',
      responseStyle: 'helpful',
      knowledgeBase: [
        {
          topic: 'benefits',
          content: 'Our company offers comprehensive health insurance, dental, vision, and 401k with 4% matching.'
        },
        {
          topic: 'policies',
          content: 'Please review our employee handbook for detailed company policies and procedures.'
        }
      ],
      workflows: [
        {
          name: 'benefits_enrollment',
          steps: ['Explain options', 'Collect preferences', 'Submit forms'],
          triggers: ['benefits', 'insurance', 'health']
        }
      ]
    },
    createdBy: demoUsers[0],
    assignedEmployees: [demoUsers[1], demoUsers[2]],
    isActive: true,
    metrics: {
      totalInteractions: 156,
      averageResponseTime: 850,
      satisfactionScore: 4.8
    },
    blockchainTxHash: '0xabc123def456789...',
    agentId: 'agent-uuid-1',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: 'demo-agent-2',
    name: 'Benefits Guide',
    description: 'Specialized assistant for benefits enrollment and questions',
    onboardingScript: 'Hi! I\'m your benefits specialist. Let me help you understand and enroll in our benefits programs.',
    configuration: {
      personality: 'friendly',
      responseStyle: 'detailed',
      knowledgeBase: [
        {
          topic: 'health_insurance',
          content: 'We offer three health insurance plans: Basic, Premium, and Family coverage options.'
        }
      ],
      workflows: [
        {
          name: 'health_enrollment',
          steps: ['Compare plans', 'Select coverage', 'Add dependents', 'Confirm enrollment'],
          triggers: ['health', 'medical', 'insurance']
        }
      ]
    },
    createdBy: demoUsers[0],
    assignedEmployees: [demoUsers[1]],
    isActive: true,
    metrics: {
      totalInteractions: 89,
      averageResponseTime: 920,
      satisfactionScore: 4.6
    },
    blockchainTxHash: '0xdef456abc789123...',
    agentId: 'agent-uuid-2',
    createdAt: '2024-01-10T14:30:00Z'
  }
];

// Demo HR Token info
export const demoHRTokenInfo: DemoHRTokenInfo = {
  name: 'HR Token',
  symbol: 'HRT',
  decimals: 18,
  totalSupply: '1000000.0',
  contractAddress: '0x6a07f570FA8b1f197e168a8F75ffBBae7d6D8526',
  network: 'testnet'
};

// Demo token status
export const demoTokenStatus = {
  network: 'testnet',
  rpcUrl: 'https://rpc.testnet.soniclabs.com',
  tokenAddress: '0x6a07f570FA8b1f197e168a8F75ffBBae7d6D8526',
  walletAddress: '0x742d35Cc6634C0532925a3b8D4C9db96DfbF3b6C',
  connected: true,
  balance: '5000.0',
  isAvailable: true
};

// Demo dashboard stats
export const demoDashboardStats = {
  overview: {
    totalUsers: 247,
    totalAgents: 8,
    totalConversations: 1456,
    activeEmployees: 189
  },
  onboarding: {
    total: 189,
    pending: 23,
    inProgress: 45,
    completed: 121,
    completionRate: 64
  },
  agents: {
    total: 8,
    totalInteractions: 2341,
    avgResponseTime: 875,
    avgSatisfactionScore: 4.7
  },
  blockchain: {
    network: 'testnet',
    status: 'connected',
    contractAddress: '0x6a07f570FA8b1f197e168a8F75ffBBae7d6D8526'
  }
};

// Demo employee tasks
export const demoEmployeeTasks = [
  {
    id: 1,
    title: 'Complete Personal Information',
    description: 'Fill out your personal details and emergency contacts',
    status: 'completed',
    category: 'personal',
    priority: 'high',
    estimatedTime: '15 minutes'
  },
  {
    id: 2,
    title: 'Review Employee Handbook',
    description: 'Read through the company policies and procedures',
    status: 'completed',
    category: 'documentation',
    priority: 'high',
    estimatedTime: '45 minutes'
  },
  {
    id: 3,
    title: 'Set Up Benefits',
    description: 'Choose your health insurance and retirement plans',
    status: 'in-progress',
    category: 'benefits',
    priority: 'medium',
    estimatedTime: '30 minutes'
  },
  {
    id: 4,
    title: 'IT Equipment Setup',
    description: 'Configure your laptop and access company systems',
    status: 'pending',
    category: 'technical',
    priority: 'high',
    estimatedTime: '60 minutes'
  },
  {
    id: 5,
    title: 'Department Introduction',
    description: 'Meet your team and understand your role',
    status: 'pending',
    category: 'social',
    priority: 'medium',
    estimatedTime: '90 minutes'
  }
];

// Simulate API delay
export const simulateApiDelay = (ms: number = 800) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Generate demo transaction hash
export const generateDemoTxHash = () => 
  '0x' + Math.random().toString(16).substr(2, 64);

// Generate demo agent ID
export const generateDemoAgentId = () => 
  'demo-agent-' + Math.random().toString(36).substr(2, 9);