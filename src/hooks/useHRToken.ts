import { useState, useEffect } from 'react';
import { apiClient, HRTokenInfo, TokenBalance } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { demoApiClient } from '@/lib/demoApi';

// Check if demo mode is enabled
const isDemoMode = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('demo_mode') === 'true';
};

export const useHRToken = () => {
  const [tokenInfo, setTokenInfo] = useState<HRTokenInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<any>(null);
  const { toast } = useToast();

  const fetchTokenInfo = async () => {
    try {
      setLoading(true);
      const response = isDemoMode() ? 
        await demoApiClient.getHRTokenInfo() : 
        await apiClient.getHRTokenInfo();
      
      if (response.success && response.data) {
        setTokenInfo(response.data.tokenInfo);
      }
    } catch (error) {
      console.error('Failed to fetch HR token info:', error);
      toast({
        title: 'Error',
        description: 'Failed to load HR token information',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTokenStatus = async () => {
    try {
      const response = isDemoMode() ? 
        await demoApiClient.getHRTokenStatus() : 
        await apiClient.getHRTokenStatus();
      
      if (response.success && response.data) {
        setStatus(response.data.hrToken);
      }
    } catch (error) {
      console.error('Failed to fetch HR token status:', error);
    }
  };

  const getTokenBalance = async (address: string): Promise<TokenBalance | null> => {
    try {
      const response = isDemoMode() ? 
        await demoApiClient.getHRTokenBalance(address) : 
        await apiClient.getHRTokenBalance(address);
      
      if (response.success && response.data) {
        return response.data;
      }
      return null;
    } catch (error: any) {
      console.error('Failed to fetch token balance:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to fetch token balance',
        variant: 'destructive'
      });
      return null;
    }
  };

  const transferTokens = async (toAddress: string, amount: string, purpose?: string) => {
    try {
      const response = isDemoMode() ? 
        await demoApiClient.transferHRTokens(toAddress, amount, purpose) : 
        await apiClient.transferHRTokens(toAddress, amount, purpose);
      
      if (response.success) {
        toast({
          title: 'Success',
          description: `Successfully transferred ${amount} HR tokens`,
        });
        
        // Refresh status after transfer
        await fetchTokenStatus();
        
        return response.data;
      }
    } catch (error: any) {
      console.error('Failed to transfer tokens:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to transfer HR tokens',
        variant: 'destructive'
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchTokenInfo();
    fetchTokenStatus();
  }, []);

  return {
    tokenInfo,
    status,
    loading,
    getTokenBalance,
    transferTokens,
    refetch: () => {
      fetchTokenInfo();
      fetchTokenStatus();
    }
  };
};