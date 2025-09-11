import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoModeToggle, DemoModeAlert } from "@/components/DemoModeToggle";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Bot, 
  Eye, 
  ArrowRight, 
  CheckCircle, 
  MessageSquare,
  Settings,
  BarChart3,
  Coins,
  Wallet
} from "lucide-react";

const InvestorDemo = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <DemoModeToggle />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Platform Demo for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Investors & Partners
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the complete AgentForceHR platform with full access to admin tools, employee portals, 
              and HR token management features. All data shown is simulated for demonstration purposes.
            </p>
          </div>

          <DemoModeAlert />

          {/* Demo Access Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Admin Dashboard */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Admin Dashboard</CardTitle>
                <CardDescription>
                  Complete administrative interface with full system control and management capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      User management and role assignment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      AI agent creation and configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      HR token management and transfers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      System analytics and monitoring
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full" variant="default">
                  <Link to="/admin">
                    <Shield className="w-4 h-4 mr-2" />
                    Access Admin Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Employee Portal */}
            <Card className="border-2 border-green-500/20 hover:border-green-500/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle className="text-xl">Employee Portal</CardTitle>
                <CardDescription>
                  Employee onboarding experience with AI assistance and progress tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Personalized onboarding dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      AI chat with onboarding assistants
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Task management and progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Document access and completion
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full" variant="default">
                  <Link to="/employee">
                    <Users className="w-4 h-4 mr-2" />
                    Access Employee Portal
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Demo */}
            <Card className="border-2 border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-purple-500" />
                </div>
                <CardTitle className="text-xl">Interactive Demo</CardTitle>
                <CardDescription>
                  Live demonstration of AI agent creation and employee interaction workflows
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Agent creation workflow simulation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Real-time AI chat demonstration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Process flow visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Interactive controls and scenarios
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full" variant="default">
                  <Link to="/demo">
                    <Bot className="w-4 h-4 mr-2" />
                    Try Interactive Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* HR Token Information */}
          <Card className="mb-12 border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="w-6 h-6 text-accent" />
                HR Token Integration
              </CardTitle>
              <CardDescription>
                BSC-powered token system for AI agent creation and management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Token Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Network:</span>
                      <Badge variant="secondary">Binance Smart Chain</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Contract:</span>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        0x742d35Cc6634C0532925a3b8D4C9db96DfbF3b6C
                      </code>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Symbol:</span>
                      <span className="text-sm font-semibold">HRT</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Use Case:</span>
                      <span className="text-sm">Agent Creation Payment</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Admin Token Tools</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-primary" />
                      Check token balances for any address
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Transfer tokens between wallets
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      Monitor BSC token usage and analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" />
                      Configure token requirements per agent
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instructions for Investors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6" />
                How to Explore the Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Step-by-Step Guide:</h3>
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</div>
                      <div>
                        <p className="font-medium">Enable Demo Mode</p>
                        <p className="text-muted-foreground">Click "Demo Mode" in the navigation bar to bypass authentication</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</div>
                      <div>
                        <p className="font-medium">Explore Admin Features</p>
                        <p className="text-muted-foreground">Visit the admin dashboard to see user management, agent creation, and HR token tools</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</div>
                      <div>
                        <p className="font-medium">Experience Employee View</p>
                        <p className="text-muted-foreground">Check the employee portal to see the onboarding experience from an employee's perspective</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">4</div>
                      <div>
                        <p className="font-medium">Test AI Interactions</p>
                        <p className="text-muted-foreground">Try the interactive demo to see AI agents in action</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What You'll See:</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Real AI Conversations</p>
                        <p className="text-muted-foreground">Experience actual AI responses powered by advanced language models</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Analytics Dashboard</p>
                        <p className="text-muted-foreground">View comprehensive metrics and performance data</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Coins className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">BSC Integration</p>
                        <p className="text-muted-foreground">See HR token management and BSC features in action</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestorDemo;