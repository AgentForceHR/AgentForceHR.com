import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Bot, 
  Shield, 
  Coins,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Zap,
  BarChart3,
  Globe,
  Lock,
  Brain,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Info,
  Award,
  Briefcase,
  Code,
  Database,
  Network,
  Cpu,
  Server,
  Cloud,
  Eye,
  Wallet,
  LineChart
} from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, LineChart as RechartsLineChart, Line } from "recharts";

const Whitepaper = () => {
  const openGitbook = () => {
    window.open('https://agentforcehr.gitbook.io/whitepaper', '_blank');
  };

  const downloadPDF = () => {
    // In a real implementation, this would download a PDF version
    window.open('/whitepaper.pdf', '_blank');
  };

  // Chart data
  const marketGrowthData = [
    { year: '2024', market: 24.5, ai: 3.2 },
    { year: '2025', market: 27.8, ai: 4.8 },
    { year: '2026', market: 31.5, ai: 7.1 },
    { year: '2027', market: 35.8, ai: 10.2 },
    { year: '2028', market: 40.7, ai: 14.5 },
  ];

  const tokenDistributionData = [
    { name: 'Treasury', value: 25, color: '#3b82f6' },
    { name: 'Staking Rewards', value: 20, color: '#10b981' },
    { name: 'Liquidity', value: 15, color: '#f59e0b' },
    { name: 'Pre-sale', value: 15, color: '#ef4444' },
    { name: 'Enterprise Incentives', value: 10, color: '#8b5cf6' },
    { name: 'Reserve Fund', value: 10, color: '#06b6d4' },
    { name: 'Team', value: 5, color: '#ec4899' },
  ];

  const adoptionProjectionData = [
    { quarter: 'Q1 25', users: 50, agents: 200, revenue: 25000 },
    { quarter: 'Q2 25', users: 150, agents: 750, revenue: 87500 },
    { quarter: 'Q3 25', users: 400, agents: 2200, revenue: 275000 },
    { quarter: 'Q4 25', users: 800, agents: 5000, revenue: 625000 },
    { quarter: 'Q1 26', users: 1500, agents: 10000, revenue: 1250000 },
    { quarter: 'Q2 26', users: 2800, agents: 18500, revenue: 2312500 },
  ];

  const competitiveAnalysisData = [
    { feature: 'AI Integration', agentforce: 95, competitor1: 60, competitor2: 40, competitor3: 30 },
    { feature: 'Blockchain Security', agentforce: 90, competitor1: 0, competitor2: 0, competitor3: 0 },
    { feature: 'Customization', agentforce: 85, competitor1: 70, competitor2: 50, competitor3: 60 },
    { feature: 'Scalability', agentforce: 90, competitor1: 75, competitor2: 65, competitor3: 55 },
    { feature: 'Cost Efficiency', agentforce: 88, competitor1: 60, competitor2: 70, competitor3: 65 },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Technical Whitepaper v2.1
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AgentForceHR{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Whitepaper
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Revolutionizing Employee Onboarding Through Blockchain-Powered AI Agents: 
              A Comprehensive Technical and Business Analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openGitbook} size="lg" className="group">
                <FileText className="w-5 h-5 mr-2" />
                Read Interactive Version
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={downloadPDF} variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download PDF (2.4 MB)
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
          
          <div className="mt-12 mb-8">
            <Separator />
          </div>
          
          <div className="mt-12 mb-8">
            <Separator />
          </div>
              Last updated: {new Date().toLocaleDateString()} • Version 2.1 • 47 pages
            </p>
          </div>
          
          <div className="mt-12 mb-8">
            <Separator />
          </div>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">I. Introduction & Overview</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>1.1 Executive Summary</li>
                    <li>1.2 Problem Statement</li>
                    <li>1.3 Solution Overview</li>
                    <li>1.4 Market Opportunity</li>
                  </ul>
                  
                  <h4 className="font-semibold text-secondary mt-6">II. Technical Architecture</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>2.1 System Architecture</li>
                    <li>2.2 Eliza OS Integration</li>
                    <li>2.3 Google Gemini AI Implementation</li>
                    <li>2.4 Sonic Blockchain Infrastructure</li>
                    <li>2.5 Smart Contract Design</li>
                    <li>2.6 Security Framework</li>
                  </ul>

                  <h4 className="font-semibold text-accent mt-6">III. HR Token Economics</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>3.1 Token Utility & Use Cases</li>
                    <li>3.2 Token Distribution Model</li>
                    <li>3.3 Economic Mechanisms</li>
                    <li>3.4 Deflationary Model</li>
                    <li>3.5 Staking & Governance</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-600">IV. Market Analysis</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>4.1 Market Size & Growth</li>
                    <li>4.2 Competitive Landscape</li>
                    <li>4.3 Target Customer Segments</li>
                    <li>4.4 Go-to-Market Strategy</li>
                  </ul>

                  <h4 className="font-semibold text-green-600 mt-6">V. Business Model</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>5.1 Revenue Streams</li>
                    <li>5.2 Pricing Strategy</li>
                    <li>5.3 Financial Projections</li>
                    <li>5.4 Unit Economics</li>
                  </ul>

                  <h4 className="font-semibold text-orange-600 mt-6">VI. Implementation & Future</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>6.1 Development Roadmap</li>
                    <li>6.2 Team & Advisors</li>
                    <li>6.3 Risk Analysis</li>
                    <li>6.4 Regulatory Compliance</li>
                    <li>6.5 Conclusion</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Executive Summary */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                1. Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  AgentForceHR represents a fundamental transformation in human resources technology, 
                  addressing the $2.4 billion annual inefficiency in employee onboarding through 
                  blockchain-secured artificial intelligence agents.
                </p>
                
                <p className="text-muted-foreground">
                  Built on the Eliza OS framework (developed by a16z) and powered by Google Gemini AI, 
                  our platform enables HR professionals to create intelligent, autonomous agents that 
                  provide 24/7 onboarding support while maintaining enterprise-grade security through 
                  blockchain verification on the Sonic network.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-primary/5 rounded-lg border">
                    <div className="text-3xl font-bold text-primary mb-2">60%</div>
                    <p className="text-sm font-medium">Onboarding Time Reduction</p>
                    <p className="text-xs text-muted-foreground">From weeks to days</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/5 rounded-lg border">
                    <div className="text-3xl font-bold text-secondary mb-2">85%</div>
                    <p className="text-sm font-medium">HR Efficiency Improvement</p>
                    <p className="text-xs text-muted-foreground">Automated workflows</p>
                  </div>
                  <div className="text-center p-6 bg-accent/5 rounded-lg border">
                    <div className="text-3xl font-bold text-accent mb-2">$35.68B</div>
                    <p className="text-sm font-medium">Total Addressable Market</p>
                    <p className="text-xs text-muted-foreground">HR software by 2028</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Key Innovation Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <strong>AI-First Architecture:</strong> Leverages Eliza OS orchestration with Google Gemini 
                      for natural language processing, enabling human-like conversations with contextual understanding.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <strong>Blockchain Security:</strong> Immutable record-keeping and transparent operations 
                      through smart contracts deployed on Sonic network for enterprise compliance.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Coins className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <strong>Token Economy:</strong> Pay-per-use model with HR tokens eliminates subscription 
                      fees while providing transparent, scalable pricing for organizations of all sizes.
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                2. Problem Statement: The Onboarding Crisis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4">2.1 Current State of Employee Onboarding</h3>
                <p className="text-muted-foreground">
                  Employee onboarding represents one of the most critical yet underserved areas in human resources. 
                  Despite its importance for employee retention and productivity, most organizations struggle with 
                  fragmented, inefficient processes that fail to engage new hires effectively.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-600">Critical Statistics</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span><strong>69%</strong> of employees with poor onboarding leave within the first year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span><strong>40+ hours</strong> spent by HR teams per new hire on repetitive tasks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span><strong>$15,000-$75,000</strong> average cost of replacing an employee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span><strong>25%</strong> productivity reduction in first 90 days due to poor onboarding</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-orange-600">Pain Points</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                        <span>Inconsistent information delivery across departments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                        <span>Manual, paper-based processes prone to errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                        <span>Limited availability of HR support outside business hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                        <span>Difficulty scaling onboarding for rapid growth</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">2.2 Financial Impact Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  The financial implications of inefficient onboarding extend far beyond immediate HR costs:
                </p>
                
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Cost Breakdown for 1,000-Employee Organization</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-red-600 mb-2">Current Costs (Annual)</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>HR Staff Time (200 new hires × 40 hours)</span>
                          <span className="font-medium">$800,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Employee Turnover (30% × $45,000 avg)</span>
                          <span className="font-medium">$2,700,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Productivity Loss (90 days × 25%)</span>
                          <span className="font-medium">$1,200,000</span>
                        </li>
                        <li className="flex justify-between border-t pt-2">
                          <span className="font-semibold">Total Annual Cost</span>
                          <span className="font-bold text-red-600">$4,700,000</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-600 mb-2">With AgentForceHR</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Reduced HR Time (60% savings)</span>
                          <span className="font-medium">$320,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Lower Turnover (15% vs 30%)</span>
                          <span className="font-medium">$1,350,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Faster Productivity (45 days vs 90)</span>
                          <span className="font-medium">$600,000</span>
                        </li>
                        <li className="flex justify-between border-t pt-2">
                          <span className="font-semibold">Total Annual Cost</span>
                          <span className="font-bold text-green-600">$2,270,000</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <p className="text-center font-bold text-green-700 dark:text-green-400">
                      Annual Savings: $2,430,000 (52% cost reduction)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Analysis */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                3. Market Analysis & Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">3.1 Total Addressable Market (TAM)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The global HR software market is experiencing unprecedented growth, driven by digital 
                      transformation initiatives and the increasing need for automated HR processes.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong>$35.68B</strong> projected market size by 2028</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong>15.2% CAGR</strong> from 2023-2028</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong>50,000+</strong> mid-to-large enterprises globally</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong>$14.5B</strong> AI-powered HR solutions by 2028</span>
                      </li>
                    </ul>
                  </div>
                  <div className="h-64">
                    <ChartContainer config={{
                      market: { label: "Total HR Market", color: "hsl(var(--primary))" },
                      ai: { label: "AI-Powered HR", color: "hsl(var(--secondary))" }
                    }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={marketGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area type="monotone" dataKey="market" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                          <Area type="monotone" dataKey="ai" stackId="2" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.6} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">3.2 Competitive Analysis</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    AgentForceHR differentiates itself through unique blockchain integration and advanced AI capabilities:
                  </p>
                  <div className="h-80">
                    <ChartContainer config={{
                      agentforce: { label: "AgentForceHR", color: "hsl(var(--primary))" },
                      competitor1: { label: "BambooHR", color: "hsl(var(--muted-foreground))" },
                      competitor2: { label: "Workday", color: "hsl(var(--muted-foreground))" },
                      competitor3: { label: "SAP SuccessFactors", color: "hsl(var(--muted-foreground))" }
                    }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={competitiveAnalysisData} layout="horizontal">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" domain={[0, 100]} />
                          <YAxis dataKey="feature" type="category" width={120} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="agentforce" fill="hsl(var(--primary))" />
                          <Bar dataKey="competitor1" fill="hsl(var(--muted-foreground))" fillOpacity={0.6} />
                          <Bar dataKey="competitor2" fill="hsl(var(--muted-foreground))" fillOpacity={0.4} />
                          <Bar dataKey="competitor3" fill="hsl(var(--muted-foreground))" fillOpacity={0.2} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                4. Technical Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">4.1 System Architecture Overview</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card className="border-2 border-blue-200 dark:border-blue-800">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="w-5 h-5 text-blue-600" />
                        AI Layer
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">Eliza OS Framework</p>
                      <p className="text-sm text-muted-foreground">Google Gemini Pro</p>
                      <p className="text-sm text-muted-foreground">Natural Language Processing</p>
                      <p className="text-sm text-muted-foreground">Context Management</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-green-200 dark:border-green-800">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Server className="w-5 h-5 text-green-600" />
                        Application Layer
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">React Frontend</p>
                      <p className="text-sm text-muted-foreground">Node.js Backend</p>
                      <p className="text-sm text-muted-foreground">MongoDB Database</p>
                      <p className="text-sm text-muted-foreground">RESTful APIs</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-purple-200 dark:border-purple-800">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-600" />
                        Blockchain Layer
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">Sonic Network</p>
                      <p className="text-sm text-muted-foreground">Smart Contracts</p>
                      <p className="text-sm text-muted-foreground">HR Token (ERC-20)</p>
                      <p className="text-sm text-muted-foreground">Immutable Records</p>
                    </CardContent>
                  </Card>
                </div>

                <h4 className="font-semibold mb-3">4.2 Eliza OS Integration</h4>
                <p className="text-muted-foreground mb-4">
                  Eliza OS, developed by a16z, provides the foundational framework for creating autonomous AI agents. 
                  Our implementation leverages its core capabilities while extending functionality for HR-specific use cases:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Core Capabilities</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Agent lifecycle management</li>
                        <li>• Memory and context retention</li>
                        <li>• Multi-modal interaction support</li>
                        <li>• Plugin architecture for extensibility</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">HR-Specific Extensions</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Employee data integration</li>
                        <li>• Compliance workflow automation</li>
                        <li>• Document processing capabilities</li>
                        <li>• Escalation to human HR staff</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-3 mt-6">4.3 Google Gemini AI Implementation</h4>
                <p className="text-muted-foreground mb-4">
                  Google Gemini Pro serves as our primary language model, providing advanced natural language 
                  understanding and generation capabilities optimized for professional HR interactions:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">Language Understanding</h5>
                    <p className="text-sm text-muted-foreground">
                      Advanced NLP for intent recognition, entity extraction, and context comprehension
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Response Generation</h5>
                    <p className="text-sm text-muted-foreground">
                      Contextually appropriate responses with professional tone and accurate information
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Multi-language Support</h5>
                    <p className="text-sm text-muted-foreground">
                      Native support for 100+ languages enabling global deployment
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HR Token Economics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Coins className="w-6 h-6 text-accent" />
                5. HR Token Economics & Tokenomics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">5.1 Token Overview</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border">
                      <h4 className="font-semibold text-accent mb-4">HR Token (HRT) Specifications</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Token Standard:</span>
                          <Badge variant="outline">ERC-20</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Total Supply:</span>
                          <span className="font-bold">1,000,000,000 HRT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Decimals:</span>
                          <span>18</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Network:</span>
                          <Badge variant="secondary">Sonic (BSC Compatible)</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Agent Creation Cost:</span>
                          <span className="font-bold text-primary">100 HRT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Initial Price:</span>
                          <span className="font-bold text-green-600">$0.0005</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-80">
                    <h4 className="font-semibold mb-4">Token Distribution</h4>
                    <ChartContainer config={{
                      treasury: { label: "Treasury (25%)", color: "#3b82f6" },
                      staking: { label: "Staking (20%)", color: "#10b981" },
                      liquidity: { label: "Liquidity (15%)", color: "#f59e0b" },
                      presale: { label: "Pre-sale (15%)", color: "#ef4444" },
                      enterprise: { label: "Enterprise (10%)", color: "#8b5cf6" },
                      reserve: { label: "Reserve (10%)", color: "#06b6d4" },
                      team: { label: "Team (5%)", color: "#ec4899" }
                    }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={tokenDistributionData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {tokenDistributionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">5.2 Detailed Token Distribution</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Treasury (25% - 250M HRT)</h4>
                          <Badge variant="default">250,000,000 HRT</Badge>
                        </div>
                        <Progress value={25} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          12.5% released at TGE, remaining 12.5% vested over 18 months for platform development and operations
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Staking Rewards (20% - 200M HRT)</h4>
                          <Badge variant="secondary">200,000,000 HRT</Badge>
                        </div>
                        <Progress value={20} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Released after 3 months gradually to incentivize long-term token holding and governance participation
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Liquidity (15% - 150M HRT)</h4>
                          <Badge variant="outline">150,000,000 HRT</Badge>
                        </div>
                        <Progress value={15} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Available at TGE for DEX liquidity pools and market making activities
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Pre-sale (15% - 150M HRT)</h4>
                          <Badge variant="outline">150,000,000 HRT</Badge>
                        </div>
                        <Progress value={15} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Available at TGE for early investors and strategic partners
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Enterprise Incentives (10% - 100M HRT)</h4>
                          <Badge variant="outline">100,000,000 HRT</Badge>
                        </div>
                        <Progress value={10} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Released after 12 months for enterprise partnerships and large-scale implementations
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Reserve Fund (10% - 100M HRT)</h4>
                          <Badge variant="outline">100,000,000 HRT</Badge>
                        </div>
                        <Progress value={10} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Emergency fund released after 18 months for unforeseen circumstances and opportunities
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Team (5% - 50M HRT)</h4>
                          <Badge variant="outline">50,000,000 HRT</Badge>
                        </div>
                        <Progress value={5} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Team allocation released after 24 months with additional vesting schedule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">5.3 Economic Mechanisms</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-primary">Deflationary Model</h4>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        2% of tokens used for agent creation are permanently burned, creating deflationary pressure:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Agent Creation Cost:</span>
                          <span className="font-medium">100 HRT</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Tokens Burned per Agent:</span>
                          <span className="font-medium text-red-600">2 HRT</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Tokens to Platform:</span>
                          <span className="font-medium">98 HRT</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-secondary">Staking Rewards</h4>
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Token holders can stake HRT for governance rights and platform benefits:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Minimum Stake:</span>
                          <span className="font-medium">1,000 HRT</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Annual Yield:</span>
                          <span className="font-medium text-green-600">8-12%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Governance Weight:</span>
                          <span className="font-medium">1 vote per 100 HRT</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Model & Projections */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                6. Business Model & Financial Projections
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">6.1 Revenue Model</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Coins className="w-5 h-5 text-primary" />
                        Token Sales
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary mb-2">70%</p>
                      <p className="text-sm text-muted-foreground">
                        Primary revenue from HR token purchases for agent creation and premium features
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-secondary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-secondary" />
                        Enterprise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-secondary mb-2">25%</p>
                      <p className="text-sm text-muted-foreground">
                        Custom implementations, dedicated support, and enterprise licensing
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-accent/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="w-5 h-5 text-accent" />
                        Premium
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-accent mb-2">5%</p>
                      <p className="text-sm text-muted-foreground">
                        Advanced analytics, integrations, and specialized features
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">6.2 Adoption & Revenue Projections</h3>
                <div className="h-80 mb-6">
                  <ChartContainer config={{
                    users: { label: "Active Users", color: "hsl(var(--primary))" },
                    agents: { label: "Agents Created", color: "hsl(var(--secondary))" },
                    revenue: { label: "Revenue ($)", color: "hsl(var(--accent))" }
                  }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={adoptionProjectionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line yAxisId="left" type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={3} />
                        <Line yAxisId="left" type="monotone" dataKey="agents" stroke="hsl(var(--secondary))" strokeWidth={3} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="hsl(var(--accent))" strokeWidth={3} />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">2,800</div>
                    <p className="text-sm font-medium">Active Users by Q2 2026</p>
                    <p className="text-xs text-muted-foreground">18x growth from launch</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">18,500</div>
                    <p className="text-sm font-medium">AI Agents Created</p>
                    <p className="text-xs text-muted-foreground">92x growth trajectory</p>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">$2.31M</div>
                    <p className="text-sm font-medium">Quarterly Revenue</p>
                    <p className="text-xs text-muted-foreground">92x revenue growth</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">6.3 Unit Economics</h3>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium mb-4">Customer Acquisition</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Customer Acquisition Cost (CAC):</span>
                          <span className="font-medium">$450</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Average Revenue Per User (ARPU):</span>
                          <span className="font-medium">$2,400/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Customer Lifetime Value (LTV):</span>
                          <span className="font-medium">$12,000</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-sm font-semibold">LTV/CAC Ratio:</span>
                          <span className="font-bold text-green-600">26.7x</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">Token Economics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Avg Agents per Customer:</span>
                          <span className="font-medium">6.5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Token Cost per Customer:</span>
                          <span className="font-medium">650 HRT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Revenue per 1000 HRT:</span>
                          <span className="font-medium">$3,692</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-sm font-semibold">Gross Margin:</span>
                          <span className="font-bold text-green-600">78%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Deep Dive */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Cpu className="w-6 h-6 text-blue-600" />
                7. Technology Deep Dive
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">7.1 AI Agent Architecture</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-4">Eliza OS Framework Integration</h4>
                    <p className="text-muted-foreground mb-4">
                      Eliza OS provides the foundational architecture for autonomous agent creation, 
                      memory management, and multi-modal interactions. Our implementation extends 
                      these capabilities specifically for HR use cases.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-2">Core Components</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Agent Runtime Environment</li>
                          <li>• Memory & Context Management</li>
                          <li>• Plugin Architecture</li>
                          <li>• Event-Driven Processing</li>
                          <li>• Multi-Provider AI Integration</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">HR-Specific Extensions</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Employee Data Connectors</li>
                          <li>• Compliance Workflow Engine</li>
                          <li>• Document Processing Pipeline</li>
                          <li>• Escalation Management</li>
                          <li>• Analytics & Reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-4">Google Gemini AI Implementation</h4>
                    <p className="text-muted-foreground mb-4">
                      Google Gemini Pro serves as our primary language model, providing state-of-the-art 
                      natural language understanding and generation capabilities optimized for professional HR interactions.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Language Processing</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Intent Recognition</li>
                          <li>• Entity Extraction</li>
                          <li>• Sentiment Analysis</li>
                          <li>• Context Understanding</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Response Generation</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Professional Tone</li>
                          <li>• Contextual Accuracy</li>
                          <li>• Multi-turn Conversations</li>
                          <li>• Personalization</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Advanced Features</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Code Understanding</li>
                          <li>• Document Analysis</li>
                          <li>• Multi-language Support</li>
                          <li>• Reasoning Capabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">7.2 Blockchain Infrastructure</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-4">Sonic Network Benefits</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Performance Metrics</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Transaction Speed:</span>
                            <span className="font-medium text-green-600">~1 second</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Transaction Cost:</span>
                            <span className="font-medium text-green-600">$0.001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Throughput:</span>
                            <span className="font-medium">10,000+ TPS</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Finality:</span>
                            <span className="font-medium">Instant</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Enterprise Features</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• EVM Compatibility</li>
                          <li>• Enterprise Node Support</li>
                          <li>• Regulatory Compliance Tools</li>
                          <li>• Advanced Security Features</li>
                          <li>• Audit Trail Capabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-orange-50 dark:bg-orange-950/20 rounded-lg border">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-4">Smart Contract Architecture</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3">Core Contracts</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Code className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                            <div>
                              <strong>HRToken.sol:</strong> ERC-20 token with burn mechanisms
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Code className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                            <div>
                              <strong>AgentRegistry.sol:</strong> Agent creation and management
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Code className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                            <div>
                              <strong>Staking.sol:</strong> Token staking and governance
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Security Features</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Multi-signature controls</li>
                          <li>• Pausable functionality</li>
                          <li>• Upgrade mechanisms</li>
                          <li>• Access control lists</li>
                          <li>• Emergency procedures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-600" />
                8. Development Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    Q1 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Platform Launch & Token Distribution</h3>
                    <p className="text-muted-foreground mb-4">
                      Initial platform release with core AI agent creation capabilities and HR token launch
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Technical Milestones</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• MVP platform deployment</li>
                          <li>• Eliza OS integration complete</li>
                          <li>• Google Gemini AI integration</li>
                          <li>• Basic agent creation tools</li>
                          <li>• Sonic blockchain deployment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Business Milestones</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• HR Token (HRT) launch</li>
                          <li>• DEX listing and liquidity</li>
                          <li>• Beta customer onboarding</li>
                          <li>• Initial marketing campaign</li>
                          <li>• Partnership agreements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                    Q2 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Enterprise Features & Staking</h3>
                    <p className="text-muted-foreground mb-4">
                      Advanced platform features targeting enterprise customers with token staking mechanisms
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Platform Enhancements</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Advanced analytics dashboard</li>
                          <li>• HRIS system integrations</li>
                          <li>• Multi-tenant architecture</li>
                          <li>• Role-based access controls</li>
                          <li>• API marketplace launch</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Token Features</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Staking mechanism launch</li>
                          <li>• Governance token functionality</li>
                          <li>• Premium feature access</li>
                          <li>• Enterprise token packages</li>
                          <li>• Loyalty reward programs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                    Q3 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">AI Enhancement & Marketplace</h3>
                    <p className="text-muted-foreground mb-4">
                      Next-generation AI capabilities and agent marketplace development
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">AI Improvements</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Advanced AI model integration</li>
                          <li>• Predictive analytics engine</li>
                          <li>• Voice interaction capabilities</li>
                          <li>• Computer vision for documents</li>
                          <li>• Sentiment analysis tools</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Marketplace Features</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Pre-built agent templates</li>
                          <li>• Community agent sharing</li>
                          <li>• Third-party integrations</li>
                          <li>• Mobile application launch</li>
                          <li>• White-label solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                    Q4 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Global Scaling & DAO</h3>
                    <p className="text-muted-foreground mb-4">
                      International expansion with decentralized governance implementation
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Global Expansion</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Multi-region deployment</li>
                          <li>• Localization for 20+ countries</li>
                          <li>• Regulatory compliance framework</li>
                          <li>• Regional partnership network</li>
                          <li>• 24/7 global support</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Decentralization</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• DAO governance launch</li>
                          <li>• Community voting mechanisms</li>
                          <li>• Decentralized development fund</li>
                          <li>• Cross-chain bridge implementation</li>
                          <li>• Protocol fee distribution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Analysis */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="w-6 h-6 text-orange-600" />
                9. Risk Analysis & Mitigation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600">Technical Risks</h3>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                      <h4 className="font-medium mb-2">AI Model Dependencies</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Risk:</strong> Reliance on third-party AI providers
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <strong>Mitigation:</strong> Multi-provider architecture with fallback models
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                      <h4 className="font-medium mb-2">Blockchain Scalability</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Risk:</strong> Network congestion affecting performance
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <strong>Mitigation:</strong> Layer 2 solutions and cross-chain compatibility
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-orange-600">Market Risks</h3>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
                      <h4 className="font-medium mb-2">Competitive Pressure</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Risk:</strong> Large incumbents developing similar solutions
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <strong>Mitigation:</strong> First-mover advantage and patent protection
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
                      <h4 className="font-medium mb-2">Regulatory Changes</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Risk:</strong> Evolving AI and blockchain regulations
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <strong>Mitigation:</strong> Proactive compliance and legal advisory board
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team & Advisors */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                10. Team & Advisory Board
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">10.1 Leadership Team</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-2 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">Cristian Lantadilla</h4>
                          <p className="text-primary font-medium">CEO & Co-Founder</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        10+ years of experience in blockchain technology and AI systems. Previously led 
                        engineering teams at Fortune 500 companies, specializing in enterprise software 
                        architecture and distributed systems.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Key Achievements:</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Led $50M blockchain infrastructure project</li>
                          <li>• Published 15+ papers on AI and blockchain</li>
                          <li>• Former CTO at HR tech startup (acquired)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-secondary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Users className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">Renato Ortega</h4>
                          <p className="text-secondary font-medium">Co-Founder & HR Specialist</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        8+ years in HR and talent development with expertise in employee experience design 
                        and organizational psychology. Former Head of People Operations at high-growth startups.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Key Achievements:</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Designed onboarding for 1000+ employees</li>
                          <li>• Reduced turnover by 45% at previous company</li>
                          <li>• Certified in organizational development</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-6">10.2 Advisory Board</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">AI/ML Advisory</h4>
                    <p className="text-sm text-muted-foreground">
                      Former Google AI researchers and ML engineers providing technical guidance
                    </p>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">HR Industry Experts</h4>
                    <p className="text-sm text-muted-foreground">
                      Chief People Officers from Fortune 500 companies advising on product direction
                    </p>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Blockchain Advisors</h4>
                    <p className="text-sm text-muted-foreground">
                      Blockchain security experts and DeFi protocol developers
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regulatory Compliance */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lock className="w-6 h-6 text-green-600" />
                11. Regulatory Compliance & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Data Protection Compliance</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">GDPR Compliance</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Data minimization principles</li>
                        <li>• Right to erasure implementation</li>
                        <li>• Consent management systems</li>
                        <li>• Data portability features</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-2">SOC 2 Type II</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Security controls audit</li>
                        <li>• Availability monitoring</li>
                        <li>• Processing integrity</li>
                        <li>• Confidentiality measures</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Security Framework</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Blockchain Security</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Smart contract audits</li>
                        <li>• Multi-signature wallets</li>
                        <li>• Immutable audit trails</li>
                        <li>• Decentralized verification</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium text-orange-700 dark:text-orange-400 mb-2">Application Security</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• End-to-end encryption</li>
                        <li>• Zero-trust architecture</li>
                        <li>• Regular penetration testing</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Projections */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                12. Financial Projections & Investment Thesis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">12.1 Revenue Projections (5-Year)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-muted">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-muted p-3 text-left">Metric</th>
                        <th className="border border-muted p-3 text-center">2025</th>
                        <th className="border border-muted p-3 text-center">2026</th>
                        <th className="border border-muted p-3 text-center">2027</th>
                        <th className="border border-muted p-3 text-center">2028</th>
                        <th className="border border-muted p-3 text-center">2029</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-muted p-3 font-medium">Active Users</td>
                        <td className="border border-muted p-3 text-center">800</td>
                        <td className="border border-muted p-3 text-center">2,800</td>
                        <td className="border border-muted p-3 text-center">8,500</td>
                        <td className="border border-muted p-3 text-center">22,000</td>
                        <td className="border border-muted p-3 text-center">45,000</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3 font-medium">Agents Created</td>
                        <td className="border border-muted p-3 text-center">5,000</td>
                        <td className="border border-muted p-3 text-center">18,500</td>
                        <td className="border border-muted p-3 text-center">68,000</td>
                        <td className="border border-muted p-3 text-center">198,000</td>
                        <td className="border border-muted p-3 text-center">450,000</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3 font-medium">Token Revenue</td>
                        <td className="border border-muted p-3 text-center">$2.5M</td>
                        <td className="border border-muted p-3 text-center">$9.25M</td>
                        <td className="border border-muted p-3 text-center">$34M</td>
                        <td className="border border-muted p-3 text-center">$99M</td>
                        <td className="border border-muted p-3 text-center">$225M</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3 font-medium">Enterprise Revenue</td>
                        <td className="border border-muted p-3 text-center">$0.8M</td>
                        <td className="border border-muted p-3 text-center">$3.1M</td>
                        <td className="border border-muted p-3 text-center">$11.3M</td>
                        <td className="border border-muted p-3 text-center">$33M</td>
                        <td className="border border-muted p-3 text-center">$75M</td>
                      </tr>
                      <tr className="bg-green-50 dark:bg-green-950/20">
                        <td className="border border-muted p-3 font-bold">Total Revenue</td>
                        <td className="border border-muted p-3 text-center font-bold">$3.3M</td>
                        <td className="border border-muted p-3 text-center font-bold">$12.35M</td>
                        <td className="border border-muted p-3 text-center font-bold">$45.3M</td>
                        <td className="border border-muted p-3 text-center font-bold">$132M</td>
                        <td className="border border-muted p-3 text-center font-bold">$300M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-4">12.2 Investment Thesis</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-green-600">Growth Drivers</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Market Expansion</p>
                          <p className="text-sm text-muted-foreground">15.2% CAGR in HR software market</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Bot className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">AI Adoption</p>
                          <p className="text-sm text-muted-foreground">Accelerating enterprise AI integration</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Blockchain Maturity</p>
                          <p className="text-sm text-muted-foreground">Enterprise blockchain adoption increasing</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-primary">Competitive Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">First-Mover Advantage</p>
                          <p className="text-sm text-muted-foreground">First blockchain-AI HR platform</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Proven Technology</p>
                          <p className="text-sm text-muted-foreground">Built on established frameworks</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Global Scalability</p>
                          <p className="text-sm text-muted-foreground">Blockchain enables worldwide deployment</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                13. Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AgentForceHR represents a convergence of three transformative technologies: advanced artificial intelligence, 
                  blockchain security, and token economics. This unique combination addresses fundamental inefficiencies 
                  in employee onboarding while creating a sustainable, scalable business model.
                </p>
                
                <p className="text-muted-foreground">
                  Our platform's technical foundation, built on Eliza OS and Google Gemini AI, provides enterprise-grade 
                  capabilities that can scale from startups to Fortune 500 companies. The blockchain infrastructure 
                  ensures security, transparency, and compliance while the HR token economy aligns incentives 
                  between platform growth and token value appreciation.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-primary/5 rounded-lg border">
                    <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Market Opportunity</h4>
                    <p className="text-sm text-muted-foreground">
                      $35.68B addressable market with 15.2% annual growth rate
                    </p>
                  </div>
                  <div className="text-center p-6 bg-secondary/5 rounded-lg border">
                    <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Technical Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      First blockchain-AI platform specifically designed for HR automation
                    </p>
                  </div>
                  <div className="text-center p-6 bg-accent/5 rounded-lg border">
                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Growth Potential</h4>
                    <p className="text-sm text-muted-foreground">
                      Projected $300M annual revenue by 2029 with strong unit economics
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  The convergence of remote work trends, AI advancement, and blockchain maturity creates 
                  an unprecedented opportunity for AgentForceHR to become the dominant platform for 
                  intelligent HR automation. Our experienced team, proven technology stack, and clear 
                  go-to-market strategy position us to capture significant market share in this 
                  rapidly growing sector.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Access the Complete Technical Documentation</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                This overview provides key highlights from our comprehensive 47-page technical whitepaper. 
                Access the full document for detailed technical specifications, market analysis, and implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={openGitbook} variant="hero" size="xl" className="group">
                  <FileText className="w-5 h-5 mr-2" />
                  Read Full Whitepaper
                  <ExternalLink className="w-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button onClick={downloadPDF} variant="outline-primary" size="xl">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF Version
                </Button>
              </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Whitepaper;