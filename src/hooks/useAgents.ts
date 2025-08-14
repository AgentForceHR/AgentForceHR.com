import { useState, useEffect } from 'react';
import { apiClient, Agent } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { demoApiClient } from '@/lib/demoApi';

// Check if demo mode is enabled
const isDemoMode = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('demo_mode') === 'true';
};

export const useAgents = (params?: {
  page?: number;
  limit?: number;
  search?: string;
  isActive?: boolean;
}) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<any>(null);
  const { toast } = useToast();

  const fetchAgents = async () => {
    try {
      setLoading(true);
      const response = isDemoMode() ? 
        await demoApiClient.getAgents(params) : 
        await apiClient.getAgents(params);
      
      if (response.success && response.data) {
        setAgents(response.data.agents);
        setPagination(response.data.pagination);
      }
    } catch (error) {
      console.error('Failed to fetch agents:', error);
      toast({
        title: 'Error',
        description: 'Failed to load agents',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, [params?.page, params?.limit, params?.search, params?.isActive]);

  const createAgent = async (agentData: {
    name: string;
    description: string;
    onboardingScript: string;
    configuration?: any;
  }) => {
    try {
      const response = isDemoMode() ? 
        await demoApiClient.createAgent(agentData) : 
        await apiClient.createAgent(agentData);
      
      if (response.success) {
        toast({
          title: 'Success',
          description: 'Agent created successfully'
        });
        await fetchAgents(); // Refresh the list
        return response.data;
      }
    } catch (error: any) {
      console.error('Failed to create agent:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to create agent',
        variant: 'destructive'
      });
      throw error;
    }
  };

  const updateAgent = async (id: string, updates: Partial<Agent>) => {
    try {
      const response = isDemoMode() ? 
        await demoApiClient.updateAgent(id, updates) : 
        await apiClient.updateAgent(id, updates);
      
      if (response.success) {
        toast({
          title: 'Success',
          description: 'Agent updated successfully'
        });
        await fetchAgents(); // Refresh the list
        return response.data;
      }
    } catch (error: any) {
      console.error('Failed to update agent:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update agent',
        variant: 'destructive'
      });
      throw error;
    }
  };

  const assignEmployees = async (agentId: string, employeeIds: string[]) => {
    try {
      const response = isDemoMode() ? 
        await demoApiClient.assignEmployeesToAgent(agentId, employeeIds) : 
        await apiClient.assignEmployeesToAgent(agentId, employeeIds);
      
      if (response.success) {
        toast({
          title: 'Success',
          description: 'Employees assigned successfully'
        });
        await fetchAgents(); // Refresh the list
        return response.data;
      }
    } catch (error: any) {
      console.error('Failed to assign employees:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to assign employees',
        variant: 'destructive'
      });
      throw error;
    }
  };

  return {
    agents,
    loading,
    pagination,
    createAgent,
    updateAgent,
    assignEmployees,
    refetch: fetchAgents
  };
};

export const useAgent = (id: string) => {
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        setLoading(true);
        const response = isDemoMode() ? 
          await demoApiClient.getAgent(id) : 
          await apiClient.getAgent(id);
        
        if (response.success && response.data) {
          setAgent(response.data.agent);
        }
      } catch (error) {
        console.error('Failed to fetch agent:', error);
        toast({
          title: 'Error',
          description: 'Failed to load agent',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAgent();
    }
  }, [id]);

  return { agent, loading };
};