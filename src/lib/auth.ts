// Secure authentication utilities with JWT token management
import { apiClient } from './api';

interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

interface StoredAuth {
  accessToken: string;
  refreshToken: string;
  user: any;
  expiresAt: number;
}

class AuthManager {
  private static instance: AuthManager;
  private refreshPromise: Promise<TokenPair> | null = null;

  private constructor() {}

  static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }

  // Secure token storage using localStorage with encryption-like encoding
  private encodeToken(token: string): string {
    return btoa(token).split('').reverse().join('');
  }

  private decodeToken(encodedToken: string): string {
    return atob(encodedToken.split('').reverse().join(''));
  }

  // Store authentication data securely
  storeAuth(tokens: TokenPair, user: any): void {
    const authData: StoredAuth = {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user,
      expiresAt: Date.now() + (14 * 60 * 1000) // 14 minutes (1 min buffer)
    };

    try {
      localStorage.setItem('auth_data', this.encodeToken(JSON.stringify(authData)));
      localStorage.setItem('auth_timestamp', Date.now().toString());
    } catch (error) {
      console.error('Failed to store auth data:', error);
    }
  }

  // Retrieve stored authentication data
  getStoredAuth(): StoredAuth | null {
    try {
      const encodedData = localStorage.getItem('auth_data');
      if (!encodedData) return null;

      const authData: StoredAuth = JSON.parse(this.decodeToken(encodedData));
      
      // Check if data is valid and not corrupted
      if (!authData.accessToken || !authData.refreshToken || !authData.user) {
        this.clearAuth();
        return null;
      }

      return authData;
    } catch (error) {
      console.error('Failed to retrieve auth data:', error);
      this.clearAuth();
      return null;
    }
  }

  // Get valid access token (refresh if needed)
  async getValidAccessToken(): Promise<string | null> {
    const authData = this.getStoredAuth();
    if (!authData) return null;

    // If token is still valid, return it
    if (Date.now() < authData.expiresAt) {
      return authData.accessToken;
    }

    // Token expired, try to refresh
    try {
      const newTokens = await this.refreshTokens(authData.refreshToken);
      this.storeAuth(newTokens, authData.user);
      return newTokens.accessToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      this.clearAuth();
      return null;
    }
  }

  // Refresh tokens using refresh token
  private async refreshTokens(refreshToken: string): Promise<TokenPair> {
    // Prevent multiple simultaneous refresh requests
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = this.performTokenRefresh(refreshToken);
    
    try {
      const result = await this.refreshPromise;
      return result;
    } finally {
      this.refreshPromise = null;
    }
  }

  private async performTokenRefresh(refreshToken: string): Promise<TokenPair> {
    const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken })
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || 'Token refresh failed');
    }

    return {
      accessToken: data.data.accessToken,
      refreshToken: data.data.refreshToken
    };
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const authData = this.getStoredAuth();
    return !!authData;
  }

  // Check if user has admin role
  isAdmin(): boolean {
    const authData = this.getStoredAuth();
    return authData?.user?.role === 'admin';
  }

  // Check if user has specific role(s)
  hasRole(roles: string | string[]): boolean {
    const authData = this.getStoredAuth();
    if (!authData?.user?.role) return false;

    const roleArray = Array.isArray(roles) ? roles : [roles];
    return roleArray.includes(authData.user.role);
  }

  // Get current user
  getCurrentUser(): any | null {
    const authData = this.getStoredAuth();
    return authData?.user || null;
  }

  // Clear all authentication data
  clearAuth(): void {
    localStorage.removeItem('auth_data');
    localStorage.removeItem('auth_timestamp');
    localStorage.removeItem('authToken'); // Legacy cleanup
  }

  // Validate admin access with backend
  async validateAdminAccess(): Promise<boolean> {
    try {
      const token = await this.getValidAccessToken();
      if (!token) return false;

      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/validate-admin`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      return data.success && data.data?.isAdmin;
    } catch (error) {
      console.error('Admin validation failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const authManager = AuthManager.getInstance();

// Utility functions for backward compatibility
export const isAuthenticated = (): boolean => authManager.isAuthenticated();
export const isAdmin = (): boolean => authManager.isAdmin();
export const hasRole = (roles: string | string[]): boolean => authManager.hasRole(roles);
export const getCurrentUser = (): any | null => authManager.getCurrentUser();
export const clearAuth = (): void => authManager.clearAuth();
export const getValidAccessToken = (): Promise<string | null> => authManager.getValidAccessToken();
export const validateAdminAccess = (): Promise<boolean> => authManager.validateAdminAccess();