import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Users, Bot, MessageSquare, TrendingUp, Settings, Plus, Shield, Database, Activity } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { HRTokenManager } from "@/components/admin/HRTokenManager";
import { AgentCreationForm } from "@/components/admin/AgentCreationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TokenPurchaseWidget } from "@/components/admin/TokenPurchaseWidget";
import { DemoModeAlert } from "@/components/DemoModeToggle";
import { useAgents } from "@/hooks/useAgents";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const AdminDashboard = () => {
  const { user, isAdmin, validateAdminAccess } = useAuth();
  const { agents, loading: agentsLoading, refetch } = useAgents();
  const [showCreateAgent, setShowCreateAgent] = useState(false);
  
  // Enhanced admin verification
  React.useEffect(() => {
    const verifyAdminAccess = async () => {
      if (!isAdmin) return;
      
      const isValidAdmin = await validateAdminAccess();
      if (!isValidAdmin) {
        console.warn('Admin access validation failed');
      }
    };
    
    verifyAdminAccess();
  }, [isAdmin, validateAdminAccess]);

  const handleCreateAgentSuccess = () => {
    setShowCreateAgent(false);
    refetch();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
                {isAdmin && (
                  <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
                    <Shield className="w-3 h-3 mr-1" />
                    Administrator
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">Manage your AI agents and monitor HR operations</p>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button onClick={() => setShowCreateAgent(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Agent
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <DemoModeAlert />

        {/* Create Agent Dialog */}
        <Dialog open={showCreateAgent} onOpenChange={setShowCreateAgent}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New AI Agent</DialogTitle>
            </DialogHeader>
            <AgentCreationForm 
              onSuccess={handleCreateAgentSuccess}
              onCancel={() => setShowCreateAgent(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Admin Status Alert */}
        {isAdmin && (
          <Alert className="mb-6 border-primary/20 bg-primary/5">
            <Shield className="h-4 w-4 text-primary" />
            <AlertDescription>
              <strong>Full Admin Access:</strong> You have complete access to all system features, user management, and administrative functions.
            </AlertDescription>
          </Alert>
        )}

        {/* Stats Grid */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="agents">AI Agents</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="hr-tokens">HR Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                      <p className="text-2xl font-bold text-foreground">247</p>
                      <p className="text-xs text-green-600">+12%</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Agents</p>
                      <p className="text-2xl font-bold text-foreground">{agents.length}</p>
                      <p className="text-xs text-green-600">+{agents.length > 2 ? agents.length - 2 : 0}</p>
                    </div>
                    <Bot className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Conversations Today</p>
                      <p className="text-2xl font-bold text-foreground">156</p>
                      <p className="text-xs text-green-600">+23%</p>
                    </div>
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Efficiency Score</p>
                      <p className="text-2xl font-bold text-foreground">94%</p>
                      <p className="text-xs text-green-600">+5%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Admin Tools */}
            {isAdmin && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Administrator Tools
                  </CardTitle>
                  <CardDescription>
                    Advanced system management and configuration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <Users className="w-6 h-6 mb-2" />
                      <span className="text-sm">User Management</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Database className="w-6 h-6 mb-2" />
                      <span className="text-sm">System Health</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Activity className="w-6 h-6 mb-2" />
                      <span className="text-sm">Analytics</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest interactions and system events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New employee onboarding completed</p>
                      <p className="text-xs text-muted-foreground">Sarah Johnson completed onboarding with Onboarding Assistant</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2 min ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-950/20">
                    <Bot className="w-4 h-4 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Agent training completed</p>
                      <p className="text-xs text-muted-foreground">Policy Helper finished training on updated company policies</p>
                    </div>
                    <span className="text-xs text-muted-foreground">15 min ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Performance milestone reached</p>
                      <p className="text-xs text-muted-foreground">Benefits Guide achieved 95% satisfaction rating</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1 hour ago</span>
                  </div>
                  {isAdmin && (
                    <div className="flex items-center gap-3 p-3 border-l-4 border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/20">
                      <Shield className="w-4 h-4 text-purple-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Admin session active</p>
                        <p className="text-xs text-muted-foreground">Full administrative privileges enabled</p>
                      </div>
                      <span className="text-xs text-muted-foreground">Active</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            {/* Agents Management */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    <CardTitle>AI Agents</CardTitle>
                  </div>
                  <Button onClick={() => setShowCreateAgent(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Agent
                  </Button>
                </div>
                <CardDescription>
                  Manage and monitor your AI assistant agents
                </CardDescription>
              </CardHeader>
              <CardContent>
                {agentsLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground mt-4">Loading agents...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {agents.map((agent, index) => (
                      <div key={agent._id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Bot className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{agent.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {agent.metrics.totalInteractions} conversations • {agent.metrics.satisfactionScore > 0 ? `${agent.metrics.satisfactionScore}/5.0 rating` : 'No ratings yet'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={agent.isActive ? 'default' : 'secondary'}>
                            {agent.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4 mr-2" />
                            Configure
                          </Button>
                        </div>
                      </div>
                    ))}
                    {agents.length === 0 && (
                      <div className="text-center py-12">
                        <Bot className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No agents created yet</h3>
                        <p className="text-muted-foreground mb-4">Create your first AI agent to get started</p>
                        <Button onClick={() => setShowCreateAgent(true)}>
                          <Plus className="w-4 h-4 mr-2" />
                          Create Your First Agent
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage employees and their onboarding status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">User Management</h3>
                  <p className="text-muted-foreground">
                    Full user management interface available in production version
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hr-tokens" className="space-y-6">
            <HRTokenManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
