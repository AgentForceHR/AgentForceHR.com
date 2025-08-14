// API client for HR Agent Backend Integration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

import { authManager } from './auth';
import { demoApiClient } from './demoApi';

// Check if demo mode is enabled
const isDemoMode = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('demo_mode') === 'true';
};

// Types for API responses
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Array<{ field: string; message: string }>;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'hr' | 'employee';
  department?: string;
  position?: string;
  onboardingStatus?: 'pending' | 'in-progress' | 'completed';
}

export interface Agent {
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
  createdBy: User;
  assignedEmployees: User[];
  isActive: boolean;
  metrics: {
    totalInteractions: number;
    averageResponseTime: number;
    satisfactionScore: number;
  };
  blockchainTxHash?: string;
  agentId: string;
  createdAt: string;
}

export interface HRTokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
  contractAddress: string;
  network: string;
}

export interface TokenBalance {
  address: string;
  balance: string;
  network: string;
}

export interface TokenTransfer {
  success: boolean;
  txHash: string;
  blockNumber: number;
  gasUsed: string;
  amount: string;
  recipient: string;
}

export interface Conversation {
  _id: string;
  employee: User;
  agent: Agent;
  messages: Array<{
    sender: 'user' | 'agent';
    content: string;
    timestamp: string;
    metadata?: {
      responseTime: number;
      confidence: number;
      intent: string;
    };
  }>;
  status: 'active' | 'completed' | 'archived';
  sessionId: string;
}

// API Client Class
class ApiClient {
  private async getAuthHeaders(): Promise<HeadersInit> {
    const token = await authManager.getValidAccessToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    const data = await response.json();
    
    // Handle token expiration
    if (response.status === 401 && data.code === 'TOKEN_EXPIRED') {
      // Try to refresh token and retry request
      try {
        const newToken = await authManager.getValidAccessToken();
        if (newToken) {
          // Token was refreshed, the original request should be retried by the caller
          throw new Error('TOKEN_REFRESHED');
        }
      } catch (refreshError) {
        authManager.clearAuth();
        window.location.href = '/login';
        throw new Error('Session expired. Please log in again.');
      }
    }
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  }

  // Enhanced request method with automatic token refresh
  private async makeRequest<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    // Use demo API if demo mode is enabled
    if (isDemoMode()) {
      throw new Error('Demo mode should use demoApiClient directly');
    }
    
    const headers = await this.getAuthHeaders();
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: { ...headers, ...options.headers }
      });
      
      return await this.handleResponse<T>(response);
    } catch (error: any) {
      // If token was refreshed, retry the request once
      if (error.message === 'TOKEN_REFRESHED') {
        const newHeaders = await this.getAuthHeaders();
        const retryResponse = await fetch(url, {
          ...options,
          headers: { ...newHeaders, ...options.headers }
        });
        return await this.handleResponse<T>(retryResponse);
      }
      throw error;
    }
  }

  // Authentication Methods
  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: User }>> {
    if (isDemoMode()) {
      return demoApiClient.login(email, password);
    }
    
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const result = await this.handleResponse<{ 
      accessToken: string; 
      refreshToken: string; 
      user: User 
    }>(response);
    
    // Store tokens securely
    if (result.data?.accessToken && result.data?.refreshToken) {
      authManager.storeAuth({
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken
      }, result.data.user);
    }
    
    // Return in expected format for backward compatibility
    return {
      ...result,
      data: result.data ? {
        token: result.data.accessToken,
        user: result.data.user
      } : undefined
    };
  }

  async register(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role?: string;
    department?: string;
    position?: string;
  }): Promise<ApiResponse<{ 
    accessToken: string; 
    refreshToken: string; 
    user: User 
  }>> {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    
    const result = await this.handleResponse<{ 
      accessToken: string; 
      refreshToken: string; 
      user: User 
    }>(response);
    
    if (result.data?.accessToken && result.data?.refreshToken) {
      authManager.storeAuth({
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken
      }, result.data.user);
    }
    
    return result;
  }

  async seedAdmin(adminData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Promise<ApiResponse<{ 
    accessToken: string; 
    refreshToken: string; 
    user: User 
  }>> {
    const response = await fetch(`${API_BASE_URL}/auth/seed-admin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adminData)
    });
    
    const result = await this.handleResponse<{ 
      accessToken: string; 
      refreshToken: string; 
      user: User 
    }>(response);
    
    if (result.data?.accessToken && result.data?.refreshToken) {
      authManager.storeAuth({
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken
      }, result.data.user);
    }
    
    return result;
  }

  async getCurrentUser(): Promise<ApiResponse<{ user: User }>> {
    if (isDemoMode()) {
      return demoApiClient.getCurrentUser();
    }
    
    return this.makeRequest<{ user: User }>(`${API_BASE_URL}/auth/me`);
  }

  async logout(): Promise<void> {
    try {
      await this.makeRequest(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
      });
    } finally {
      authManager.clearAuth();
    }
  }

  async validateAdminAccess(): Promise<boolean> {
    if (isDemoMode()) {
      return demoApiClient.validateAdminAccess();
    }
    
    try {
      const result = await this.makeRequest<{ isAdmin: boolean }>(`${API_BASE_URL}/auth/validate-admin`, {
        method: 'POST'
      });
      return result.data?.isAdmin || false;
    } catch (error) {
      return false;
    }
  }

  // Agent Methods
  async createAgent(agentData: {
    name: string;
    description: string;
    onboardingScript: string;
    configuration?: {
      personality?: string;
      responseStyle?: string;
      knowledgeBase?: Array<{ topic: string; content: string }>;
      workflows?: Array<{ name: string; steps: string[]; triggers: string[] }>;
    };
  }): Promise<ApiResponse<{ agent: Agent; blockchain: any }>> {
    if (isDemoMode()) {
      return demoApiClient.createAgent(agentData);
    }
    
    return this.makeRequest<{ agent: Agent; blockchain: any }>(`${API_BASE_URL}/agents`, {
      method: 'POST',
      body: JSON.stringify(agentData)
    });
  }

  async getAgents(params?: {
    page?: number;
    limit?: number;
    search?: string;
    isActive?: boolean;
  }): Promise<ApiResponse<{ agents: Agent[]; pagination: any }>> {
    if (isDemoMode()) {
      return demoApiClient.getAgents(params);
    }
    
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.search) queryParams.append('search', params.search);
    if (params?.isActive !== undefined) queryParams.append('isActive', params.isActive.toString());

    return this.makeRequest<{ agents: Agent[]; pagination: any }>(`${API_BASE_URL}/agents?${queryParams}`);
  }

  async getAgent(id: string): Promise<ApiResponse<{ agent: Agent }>> {
    if (isDemoMode()) {
      return demoApiClient.getAgent(id);
    }
    
    return this.makeRequest<{ agent: Agent }>(`${API_BASE_URL}/agents/${id}`);
  }

  async updateAgent(id: string, updates: Partial<Agent>): Promise<ApiResponse<{ agent: Agent }>> {
    if (isDemoMode()) {
      return demoApiClient.updateAgent(id, updates);
    }
    
    return this.makeRequest<{ agent: Agent }>(`${API_BASE_URL}/agents/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  }

  async assignEmployeesToAgent(agentId: string, employeeIds: string[]): Promise<ApiResponse<{ agent: Agent }>> {
    if (isDemoMode()) {
      return demoApiClient.assignEmployeesToAgent(agentId, employeeIds);
    }
    
    return this.makeRequest<{ agent: Agent }>(`${API_BASE_URL}/agents/${agentId}/assign`, {
      method: 'POST',
      body: JSON.stringify({ employeeIds })
    });
  }

  async chatWithAgent(agentId: string, message: string): Promise<ApiResponse<{
    response: string;
    metadata: any;
    conversationId: string;
  }>> {
    if (isDemoMode()) {
      return demoApiClient.chatWithAgent(agentId, message);
    }
    
    return this.makeRequest<{
      response: string;
      metadata: any;
      conversationId: string;
    }>(`${API_BASE_URL}/agents/${agentId}/chat`, {
      method: 'POST',
      body: JSON.stringify({ message })
    });
  }

  // Employee Methods
  async getEmployeeDashboard(): Promise<ApiResponse<{
    employee: User;
    onboardingProgress: any;
    recentConversations: Conversation[];
    stats: any;
  }>> {
    if (isDemoMode()) {
      return demoApiClient.getEmployeeDashboard();
    }
    
    return this.makeRequest<{
      employee: User;
      onboardingProgress: any;
      recentConversations: Conversation[];
      stats: any;
    }>(`${API_BASE_URL}/employee/dashboard`);
  }

  async getEmployeeAgents(): Promise<ApiResponse<{ agents: Agent[] }>> {
    if (isDemoMode()) {
      return demoApiClient.getEmployeeAgents();
    }
    
    return this.makeRequest<{ agents: Agent[] }>(`${API_BASE_URL}/employee/agents`);
  }

  async getEmployeeTasks(): Promise<ApiResponse<{
    tasks: Array<{
      id: number;
      title: string;
      description: string;
      status: string;
      category: string;
      priority: string;
      estimatedTime: string;
    }>;
    progress: {
      total: number;
      completed: number;
      percentage: number;
    };
  }>> {
    if (isDemoMode()) {
      return demoApiClient.getEmployeeTasks();
    }
    
    return this.makeRequest<{
      tasks: any[];
      progress: any;
    }>(`${API_BASE_URL}/employee/tasks`);
  }

  async updateOnboardingStatus(status: string): Promise<ApiResponse<{ employee: User }>> {
    return this.makeRequest<{ employee: User }>(`${API_BASE_URL}/employee/onboarding-status`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    });
  }

  // Admin Methods
  async getAdminDashboard(): Promise<ApiResponse<any>> {
    if (isDemoMode()) {
      return demoApiClient.getAdminDashboard();
    }
    
    return this.makeRequest<any>(`${API_BASE_URL}/admin/dashboard`);
  }

  async getAllUsers(params?: {
    page?: number;
    limit?: number;
    role?: string;
    department?: string;
    search?: string;
  }): Promise<ApiResponse<{ users: User[]; pagination: any }>> {
    if (isDemoMode()) {
      return demoApiClient.getAllUsers(params);
    }
    
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.role) queryParams.append('role', params.role);
    if (params?.department) queryParams.append('department', params.department);
    if (params?.search) queryParams.append('search', params.search);

    return this.makeRequest<{ users: User[]; pagination: any }>(`${API_BASE_URL}/admin/users?${queryParams}`);
  }

  async getSystemHealth(): Promise<ApiResponse<any>> {
    if (isDemoMode()) {
      return demoApiClient.getSystemHealth();
    }
    
    return this.makeRequest<any>(`${API_BASE_URL}/admin/system/health`);
  }

  async getBlockchainStatus(): Promise<ApiResponse<any>> {
    if (isDemoMode()) {
      return demoApiClient.getBlockchainStatus();
    }
    
    return this.makeRequest<any>(`${API_BASE_URL}/admin/blockchain/status`);
  }

  // HR Token Methods
  async getHRTokenInfo(): Promise<ApiResponse<{ tokenInfo: HRTokenInfo }>> {
    if (isDemoMode()) {
      return demoApiClient.getHRTokenInfo();
    }
    
    return this.makeRequest<{ tokenInfo: HRTokenInfo }>(`${API_BASE_URL}/admin/hr-token/info`);
  }

  async getHRTokenBalance(address: string): Promise<ApiResponse<TokenBalance>> {
    if (isDemoMode()) {
      return demoApiClient.getHRTokenBalance(address);
    }
    
    return this.makeRequest<TokenBalance>(`${API_BASE_URL}/admin/hr-token/balance/${address}`);
  }

  async transferHRTokens(toAddress: string, amount: string, purpose?: string): Promise<ApiResponse<TokenTransfer>> {
    if (isDemoMode()) {
      return demoApiClient.transferHRTokens(toAddress, amount, purpose);
    }
    
    return this.makeRequest<TokenTransfer>(`${API_BASE_URL}/admin/hr-token/transfer`, {
      method: 'POST',
      body: JSON.stringify({ toAddress, amount, purpose })
    });
  }

  async getHRTokenStatus(): Promise<ApiResponse<{ hrToken: any }>> {
    if (isDemoMode()) {
      return demoApiClient.getHRTokenStatus();
    }
    
    return this.makeRequest<{ hrToken: any }>(`${API_BASE_URL}/admin/hr-token/status`);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();