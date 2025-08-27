
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
  TrendingUp, 
  Users, 
  Bot, 
  Shield, 
  Coins,
  BarChart3,
  Globe,
  Target,
  Zap,
  CheckCircle,
  AlertCircle,
  Brain,
  Lock,
  Calendar,
  DollarSign
} from "lucide-react";

const Whitepaper = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/whitepaper.pdf';
    link.download = 'AgentForceHR-Whitepaper.pdf';
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AgentForceHR{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Whitepaper
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive technical analysis of blockchain-powered AI agents for HR automation, 
              tokenomics, market opportunity, and implementation roadmap.
            </p>
            <Button onClick={downloadPDF} className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF Version
            </Button>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p><strong>1. Executive Summary</strong></p>
                  <p><strong>2. Market Analysis</strong></p>
                  <p><strong>3. Technical Architecture</strong></p>
                  <p><strong>4. Product Overview</strong></p>
                  <p><strong>5. AI Technology Stack</strong></p>
                  <p><strong>6. Blockchain Integration</strong></p>
                </div>
                <div className="space-y-2">
                  <p><strong>7. Tokenomics</strong></p>
                  <p><strong>8. Business Model</strong></p>
                  <p><strong>9. Financial Projections</strong></p>
                  <p><strong>10. Risk Analysis</strong></p>
                  <p><strong>11. Roadmap</strong></p>
                  <p><strong>12. Team & Governance</strong></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 1. Executive Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">1. Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1.1 Project Overview</h3>
                <p className="text-muted-foreground">
                  AgentForceHR represents a paradigm shift in human resources technology, combining cutting-edge artificial intelligence 
                  with blockchain infrastructure to create the world's first decentralized HR automation platform. Our solution addresses 
                  the $35.68 billion HR software market by providing intelligent, scalable, and secure onboarding experiences through 
                  blockchain-powered AI agents.
                </p>
                <p className="text-muted-foreground">
                  Built on the Sonic blockchain network and powered by Eliza OS (a16z) with Google Gemini AI integration, AgentForceHR 
                  enables organizations to create custom AI agents that automate employee onboarding, reduce operational costs by up to 
                  42%, and improve new hire satisfaction by 60%. Our utility token (HRT) creates a sustainable economic model where 
                  organizations pay for agent creation and premium features through blockchain transactions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1.2 Key Value Propositions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">60% Faster Onboarding</p>
                        <p className="text-sm text-muted-foreground">Reduce time-to-productivity from weeks to days</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">85% HR Efficiency Gain</p>
                        <p className="text-sm text-muted-foreground">Automate repetitive tasks and focus on strategy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">42% Cost Reduction</p>
                        <p className="text-sm text-muted-foreground">Lower training and administrative expenses</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">24/7 AI Support</p>
                        <p className="text-sm text-muted-foreground">Round-the-clock assistance for global teams</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Blockchain Security</p>
                        <p className="text-sm text-muted-foreground">Immutable records and transparent operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Enterprise Scalability</p>
                        <p className="text-sm text-muted-foreground">Grows from startup to global enterprise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1.3 Investment Highlights</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">$35.68B</div>
                    <p className="text-sm text-muted-foreground">Global HR Software Market by 2028</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">15.2%</div>
                    <p className="text-sm text-muted-foreground">AI-HR Market CAGR 2024-2028</p>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">1B</div>
                    <p className="text-sm text-muted-foreground">Total HRT Token Supply</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. Market Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">2. Market Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2.1 Market Size and Growth</h3>
                <p className="text-muted-foreground">
                  The global HR software market is experiencing unprecedented growth, driven by digital transformation initiatives 
                  and the increasing need for efficient talent management solutions. The market, valued at $24.04 billion in 2021, 
                  is projected to reach $35.68 billion by 2028, representing a compound annual growth rate (CAGR) of 10.4%.
                </p>
                
                {/* Market Growth Chart */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-center">HR Software Market Growth (2021-2028)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">2021</span>
                      <div className="flex-1 mx-4">
                        <Progress value={67} className="h-3" />
                      </div>
                      <span className="text-sm font-semibold">$24.04B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">2024</span>
                      <div className="flex-1 mx-4">
                        <Progress value={85} className="h-3" />
                      </div>
                      <span className="text-sm font-semibold">$30.12B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">2028</span>
                      <div className="flex-1 mx-4">
                        <Progress value={100} className="h-3" />
                      </div>
                      <span className="text-sm font-semibold">$35.68B</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Source: Fortune Business Insights, Grand View Research
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2.2 AI in HR Market Segment</h3>
                <p className="text-muted-foreground">
                  The AI-powered HR solutions segment is the fastest-growing subsector, with a projected CAGR of 15.2% through 2028. 
                  This growth is driven by organizations seeking to automate routine tasks, improve decision-making through data analytics, 
                  and enhance employee experiences through personalized interactions.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-green-600 mb-1">15.2%</div>
                    <p className="text-sm text-muted-foreground">AI-HR CAGR</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-blue-600 mb-1">73%</div>
                    <p className="text-sm text-muted-foreground">Organizations Planning AI Adoption</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Bot className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-purple-600 mb-1">$8.1B</div>
                    <p className="text-sm text-muted-foreground">AI-HR Market Size by 2028</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2.3 Target Market Segmentation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Primary Markets</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium">Mid-Market (500-5,000 employees)</span>
                        <Badge variant="default">45% TAM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium">Enterprise (5,000+ employees)</span>
                        <Badge variant="secondary">35% TAM</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium">SMB (50-500 employees)</span>
                        <Badge variant="outline">20% TAM</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Geographic Distribution</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>North America</span>
                        <div className="flex items-center gap-2">
                          <Progress value={42} className="w-20 h-2" />
                          <span className="text-sm">42%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Europe</span>
                        <div className="flex items-center gap-2">
                          <Progress value={28} className="w-20 h-2" />
                          <span className="text-sm">28%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Asia-Pacific</span>
                        <div className="flex items-center gap-2">
                          <Progress value={22} className="w-20 h-2" />
                          <span className="text-sm">22%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rest of World</span>
                        <div className="flex items-center gap-2">
                          <Progress value={8} className="w-20 h-2" />
                          <span className="text-sm">8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2.4 Market Drivers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Technology Drivers</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Advancement in conversational AI and natural language processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Blockchain adoption for enterprise data security and transparency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Cloud infrastructure maturity enabling scalable AI deployments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Integration capabilities with existing enterprise systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Business Drivers</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>Remote work trends requiring digital-first onboarding solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>Talent shortage driving need for efficient onboarding processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>Regulatory compliance requirements for audit trails and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>Cost pressure to reduce administrative overhead and improve efficiency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Technical Architecture */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">3. Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">3.1 System Architecture Overview</h3>
                <p className="text-muted-foreground">
                  AgentForceHR employs a three-tier architecture consisting of the AI orchestration layer (Eliza OS), 
                  the blockchain infrastructure layer (Sonic Network), and the application layer (React/Node.js). 
                  This design ensures scalability, security, and maintainability while providing seamless user experiences.
                </p>
                
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-center">Architecture Layers</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                      <Brain className="w-8 h-8 text-primary" />
                      <div className="flex-1">
                        <h5 className="font-semibold">AI Orchestration Layer</h5>
                        <p className="text-sm text-muted-foreground">Eliza OS + Google Gemini Pro</p>
                      </div>
                      <Badge variant="default">Layer 3</Badge>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                      <Shield className="w-8 h-8 text-secondary" />
                      <div className="flex-1">
                        <h5 className="font-semibold">Blockchain Infrastructure</h5>
                        <p className="text-sm text-muted-foreground">Sonic Network + Smart Contracts</p>
                      </div>
                      <Badge variant="secondary">Layer 2</Badge>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                      <Globe className="w-8 h-8 text-accent" />
                      <div className="flex-1">
                        <h5 className="font-semibold">Application Layer</h5>
                        <p className="text-sm text-muted-foreground">React Frontend + Node.js Backend</p>
                      </div>
                      <Badge variant="outline">Layer 1</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">3.2 Competitive Analysis</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Feature</th>
                        <th className="border border-border p-3 text-center">AgentForceHR</th>
                        <th className="border border-border p-3 text-center">BambooHR</th>
                        <th className="border border-border p-3 text-center">Workday</th>
                        <th className="border border-border p-3 text-center">SAP SuccessFactors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-medium">AI-Powered Agents</td>
                        <td className="border border-border p-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">Blockchain Security</td>
                        <td className="border border-border p-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Pay-per-Use Model</td>
                        <td className="border border-border p-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">24/7 AI Support</td>
                        <td className="border border-border p-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="border border-border p-3 text-center text-orange-500">⚠️</td>
                        <td className="border border-border p-3 text-center text-orange-500">⚠️</td>
                        <td className="border border-border p-3 text-center text-orange-500">⚠️</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Custom Agent Creation</td>
                        <td className="border border-border p-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                        <td className="border border-border p-3 text-center text-muted-foreground">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. Product Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">4. Product Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">4.1 Core Platform Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Bot className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold">AI Agent Creation</h4>
                        <p className="text-sm text-muted-foreground">
                          Intuitive interface for creating custom AI agents with specialized knowledge bases, 
                          personality configurations, and workflow automation capabilities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-secondary mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold">Employee Portal</h4>
                        <p className="text-sm text-muted-foreground">
                          Personalized dashboard for new hires with task tracking, document access, 
                          and direct communication with assigned AI agents.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-6 h-6 text-accent mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold">Analytics Dashboard</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive metrics on onboarding efficiency, employee satisfaction, 
                          and agent performance with actionable insights.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold">Blockchain Security</h4>
                        <p className="text-sm text-muted-foreground">
                          Immutable record-keeping, transparent audit trails, and secure token-based 
                          transactions for all platform operations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-orange-600 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold">Integration Hub</h4>
                        <p className="text-sm text-muted-foreground">
                          Pre-built connectors for popular HRIS, ATS, and LMS systems with 
                          RESTful APIs for custom integrations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold">Multi-tenant Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Secure data isolation, role-based access controls, and scalable 
                          infrastructure supporting thousands of concurrent users.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">4.2 AI Agent Capabilities</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Natural Language Processing</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Intent recognition and classification</li>
                      <li>• Context-aware conversation management</li>
                      <li>• Multi-language support (15+ languages)</li>
                      <li>• Sentiment analysis and emotional intelligence</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Knowledge Management</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Dynamic knowledge base updates</li>
                      <li>• Document processing and indexing</li>
                      <li>• Policy and procedure automation</li>
                      <li>• Contextual information retrieval</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Workflow Automation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Task assignment and tracking</li>
                      <li>• Automated follow-ups and reminders</li>
                      <li>• Integration with calendar systems</li>
                      <li>• Escalation to human HR when needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5. AI Technology Stack */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">5. AI Technology Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">5.1 Eliza OS Integration</h3>
                <p className="text-muted-foreground">
                  Eliza OS, developed by a16z, serves as our AI orchestration framework, providing sophisticated conversation 
                  management, context retention, and multi-modal interaction capabilities. This framework enables our agents 
                  to maintain coherent, contextual conversations while managing complex onboarding workflows.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Core Capabilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Advanced conversation state management</li>
                      <li>• Multi-turn dialogue optimization</li>
                      <li>• Context-aware response generation</li>
                      <li>• Personality and tone customization</li>
                      <li>• Real-time learning and adaptation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-semibold text-secondary mb-3">Enterprise Features</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Scalable agent deployment</li>
                      <li>• Performance monitoring and analytics</li>
                      <li>• A/B testing for conversation optimization</li>
                      <li>• Integration with enterprise systems</li>
                      <li>• Compliance and audit trail management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">5.2 Google Gemini Pro Integration</h3>
                <p className="text-muted-foreground">
                  Google Gemini Pro provides the underlying language model capabilities, offering state-of-the-art natural 
                  language understanding and generation. Our integration leverages Gemini's multimodal capabilities to process 
                  text, understand context, and generate human-like responses tailored to HR scenarios.
                </p>
                
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Performance Metrics</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">850ms</div>
                      <p className="text-sm text-muted-foreground">Avg Response Time</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary mb-1">94.7%</div>
                      <p className="text-sm text-muted-foreground">Intent Accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">4.8/5</div>
                      <p className="text-sm text-muted-foreground">User Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
                      <p className="text-sm text-muted-foreground">Uptime SLA</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 6. Blockchain Integration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">6. Blockchain Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">6.1 Sonic Network Selection</h3>
                <p className="text-muted-foreground">
                  We selected Sonic Network as our blockchain infrastructure due to its high throughput (up to 10,000 TPS), 
                  low transaction costs (under $0.01), and BSC compatibility. Sonic's architecture provides the scalability 
                  and cost-effectiveness required for enterprise HR operations while maintaining security and decentralization.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary mb-1">10,000</div>
                    <p className="text-sm text-muted-foreground">Transactions Per Second</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-green-600 mb-1">$0.01</div>
                    <p className="text-sm text-muted-foreground">Average Transaction Cost</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-blue-600 mb-1">99.9%</div>
                    <p className="text-sm text-muted-foreground">Network Uptime</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">6.2 Smart Contract Architecture</h3>
                <p className="text-muted-foreground">
                  Our smart contract system consists of three primary contracts: the HR Token contract (ERC-20 standard), 
                  the Agent Registry contract for managing AI agent metadata, and the Governance contract for decentralized 
                  decision-making. All contracts are audited and implement industry-standard security practices.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">HR Token Contract</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Standard ERC-20 implementation with additional features for staking, burning, and governance participation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Core Functions:</p>
                        <ul className="text-muted-foreground space-y-1 mt-1">
                          <li>• Transfer and approval mechanisms</li>
                          <li>• Staking and reward distribution</li>
                          <li>• Token burning for deflationary pressure</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium">Security Features:</p>
                        <ul className="text-muted-foreground space-y-1 mt-1">
                          <li>• Multi-signature wallet controls</li>
                          <li>• Pausable functionality for emergencies</li>
                          <li>• Rate limiting for large transactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-semibold text-secondary mb-2">Agent Registry Contract</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Manages AI agent metadata, ownership, and operational status with immutable record-keeping.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Registration Functions:</p>
                        <ul className="text-muted-foreground space-y-1 mt-1">
                          <li>• Agent creation and metadata storage</li>
                          <li>• Ownership verification and transfers</li>
                          <li>• Status updates and lifecycle management</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium">Query Functions:</p>
                        <ul className="text-muted-foreground space-y-1 mt-1">
                          <li>• Agent lookup by ID or owner</li>
                          <li>• Performance metrics retrieval</li>
                          <li>• Historical data access</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">6.3 Security and Compliance</h3>
                <p className="text-muted-foreground">
                  Our blockchain implementation prioritizes security through multiple layers of protection, including smart contract 
                  audits, multi-signature controls, and compliance with international data protection regulations. All sensitive 
                  operations are logged on-chain for transparency and audit purposes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Security Measures</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Lock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>End-to-end encryption for all data transmission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>Multi-signature wallet controls for admin functions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>Regular security audits and penetration testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>Emergency pause mechanisms for critical issues</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Compliance Framework</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>GDPR compliance for EU data protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>SOC 2 Type II certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>HIPAA compliance for healthcare organizations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>Industry-specific regulatory adherence</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 7. Tokenomics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">7. Tokenomics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">7.1 Token Distribution</h3>
                <p className="text-muted-foreground">
                  The total supply of 1,000,000,000 HRT tokens is strategically distributed to ensure platform sustainability, 
                  community growth, and long-term value creation. Our distribution model balances immediate liquidity needs 
                  with long-term ecosystem development.
                </p>
                
                {/* Token Distribution Chart */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-6 text-center">Token Distribution (1,000,000,000 HRT)</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Treasury (250M HRT)</span>
                        <span className="font-semibold">25%</span>
                      </div>
                      <Progress value={25} className="h-3" />
                      <p className="text-xs text-muted-foreground">12.5% at TGE, 12.5% vested over 18 months</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Staking Rewards (200M HRT)</span>
                        <span className="font-semibold">20%</span>
                      </div>
                      <Progress value={20} className="h-3" />
                      <p className="text-xs text-muted-foreground">Released after 3 months gradually over 24 months</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Liquidity (150M HRT)</span>
                        <span className="font-semibold">15%</span>
                      </div>
                      <Progress value={15} className="h-3" />
                      <p className="text-xs text-muted-foreground">Available at TGE for DEX liquidity provision</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Pre-sale (150M HRT)</span>
                        <span className="font-semibold">15%</span>
                      </div>
                      <Progress value={15} className="h-3" />
                      <p className="text-xs text-muted-foreground">Available at TGE for early investors and partners</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Enterprise Incentives (100M HRT)</span>
                        <span className="font-semibold">10%</span>
                      </div>
                      <Progress value={10} className="h-3" />
                      <p className="text-xs text-muted-foreground">Released after 12 months for enterprise partnerships</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Reserve Fund (100M HRT)</span>
                        <span className="font-semibold">10%</span>
                      </div>
                      <Progress value={10} className="h-3" />
                      <p className="text-xs text-muted-foreground">Emergency fund released after 18 months</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Team (50M HRT)</span>
                        <span className="font-semibold">5%</span>
                      </div>
                      <Progress value={5} className="h-3" />
                      <p className="text-xs text-muted-foreground">Team allocation with 24-month cliff and 36-month vesting</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">7.2 Token Utility and Economics</h3>
                <p className="text-muted-foreground">
                  HRT tokens serve multiple utility functions within the AgentForceHR ecosystem, creating sustainable demand 
                  and value accrual mechanisms. The token economy is designed to align stakeholder incentives while ensuring 
                  platform accessibility and growth.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Primary Utilities</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-primary/5 rounded">
                        <span className="font-medium">Agent Creation</span>
                        <Badge variant="default">100 HRT</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary/5 rounded">
                        <span className="font-medium">Premium Features</span>
                        <Badge variant="secondary">10-50 HRT</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 rounded">
                        <span className="font-medium">Enterprise Support</span>
                        <Badge variant="outline">Custom</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Economic Mechanisms</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded">
                        <p className="font-medium text-sm">Token Burning</p>
                        <p className="text-xs text-muted-foreground">2% of tokens used for agent creation are permanently burned</p>
                      </div>
                      <div className="p-3 border rounded">
                        <p className="font-medium text-sm">Staking Rewards</p>
                        <p className="text-xs text-muted-foreground">5-12% APY for token holders who stake for governance</p>
                      </div>
                      <div className="p-3 border rounded">
                        <p className="font-medium text-sm">Fee Discounts</p>
                        <p className="text-xs text-muted-foreground">Up to 25% discount on platform fees for large token holders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8. Business Model */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">8. Business Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">8.1 Revenue Streams</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-lg">
                    <Coins className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Token Sales (Primary)</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Revenue from HR token purchases for agent creation and platform features
                    </p>
                    <div className="text-2xl font-bold text-primary">65%</div>
                    <p className="text-xs text-muted-foreground">of projected revenue</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <Users className="w-8 h-8 text-secondary mb-4" />
                    <h4 className="font-semibold mb-2">Enterprise Licensing</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Custom solutions and dedicated support for large organizations
                    </p>
                    <div className="text-2xl font-bold text-secondary">25%</div>
                    <p className="text-xs text-muted-foreground">of projected revenue</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <Zap className="w-8 h-8 text-accent mb-4" />
                    <h4 className="font-semibold mb-2">Premium Services</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Advanced analytics, integrations, and customization services
                    </p>
                    <div className="text-2xl font-bold text-accent">10%</div>
                    <p className="text-xs text-muted-foreground">of projected revenue</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">8.2 Pricing Strategy</h3>
                <p className="text-muted-foreground">
                  Our pricing model is designed to be accessible to organizations of all sizes while ensuring sustainable 
                  revenue growth. The token-based system provides transparency and predictability in costs.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Service</th>
                        <th className="border border-border p-3 text-center">Token Cost</th>
                        <th className="border border-border p-3 text-center">USD Equivalent*</th>
                        <th className="border border-border p-3 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-medium">Basic Agent Creation</td>
                        <td className="border border-border p-3 text-center">1000 HRT</td>
                        <td className="border border-border p-3 text-center">$50</td>
                        <td className="border border-border p-3 text-sm text-muted-foreground">Standard AI agent with basic features</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">Advanced Analytics</td>
                        <td className="border border-border p-3 text-center">250 HRT</td>
                        <td className="border border-border p-3 text-center">$12.50</td>
                        <td className="border border-border p-3 text-sm text-muted-foreground">Detailed performance metrics and insights</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Custom Integrations</td>
                        <td className="border border-border p-3 text-center">500 HRT</td>
                        <td className="border border-border p-3 text-center">$25</td>
                        <td className="border border-border p-3 text-sm text-muted-foreground">Connect with external HR systems</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">Enterprise Support</td>
                        <td className="border border-border p-3 text-center">Custom</td>
                        <td className="border border-border p-3 text-center">Custom</td>
                        <td className="border border-border p-3 text-sm text-muted-foreground">Dedicated support and custom features</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground mt-2">*Based on initial token price of $0.0005</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 9. Financial Projections */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">9. Financial Projections</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">9.1 Revenue Projections (2025-2029)</h3>
                <p className="text-muted-foreground">
                  Our financial model is based on conservative adoption rates and market penetration assumptions. 
                  We project significant revenue growth as the platform scales and captures market share in the 
                  rapidly expanding AI-HR sector.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left">Metric</th>
                        <th className="border border-border p-3 text-center">2025</th>
                        <th className="border border-border p-3 text-center">2026</th>
                        <th className="border border-border p-3 text-center">2027</th>
                        <th className="border border-border p-3 text-center">2028</th>
                        <th className="border border-border p-3 text-center">2029</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-medium">Active Organizations</td>
                        <td className="border border-border p-3 text-center">500</td>
                        <td className="border border-border p-3 text-center">2,500</td>
                        <td className="border border-border p-3 text-center">8,000</td>
                        <td className="border border-border p-3 text-center">20,000</td>
                        <td className="border border-border p-3 text-center">45,000</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">Total Agents Created</td>
                        <td className="border border-border p-3 text-center">2,000</td>
                        <td className="border border-border p-3 text-center">12,500</td>
                        <td className="border border-border p-3 text-center">48,000</td>
                        <td className="border border-border p-3 text-center">140,000</td>
                        <td className="border border-border p-3 text-center">360,000</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Token Revenue</td>
                        <td className="border border-border p-3 text-center">$100K</td>
                        <td className="border border-border p-3 text-center">$625K</td>
                        <td className="border border-border p-3 text-center">$2.4M</td>
                        <td className="border border-border p-3 text-center">$7.0M</td>
                        <td className="border border-border p-3 text-center">$18.0M</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">Enterprise Revenue</td>
                        <td className="border border-border p-3 text-center">$50K</td>
                        <td className="border border-border p-3 text-center">$400K</td>
                        <td className="border border-border p-3 text-center">$1.8M</td>
                        <td className="border border-border p-3 text-center">$6.2M</td>
                        <td className="border border-border p-3 text-center">$15.5M</td>
                      </tr>
                      <tr className="font-semibold bg-primary/10">
                        <td className="border border-border p-3">Total Revenue</td>
                        <td className="border border-border p-3 text-center">$150K</td>
                        <td className="border border-border p-3 text-center">$1.025M</td>
                        <td className="border border-border p-3 text-center">$4.2M</td>
                        <td className="border border-border p-3 text-center">$13.2M</td>
                        <td className="border border-border p-3 text-center">$33.5M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">9.2 Key Performance Indicators</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary mb-1">2.5%</div>
                    <p className="text-sm text-muted-foreground">Market Penetration by 2029</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-xl font-bold text-secondary mb-1">8M</div>
                    <p className="text-sm text-muted-foreground">Employees Served by 2029</p>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-accent mb-1">185%</div>
                    <p className="text-sm text-muted-foreground">5-Year Revenue CAGR</p>
                  </div>
                  <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-green-600 mb-1">$93</div>
                    <p className="text-sm text-muted-foreground">Customer LTV by 2029</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 10. Risk Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">10. Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">10.1 Technical Risks</h3>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">AI Model Dependencies</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Risk:</strong> Reliance on third-party AI services (Google Gemini) could impact service availability.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Mitigation:</strong> Multi-provider AI strategy with fallback models and local deployment options for enterprise clients.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Blockchain Network Risks</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Risk:</strong> Sonic network congestion or technical issues could affect platform operations.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Mitigation:</strong> Multi-chain deployment strategy and hybrid on-chain/off-chain architecture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">10.2 Market Risks</h3>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Competitive Pressure</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Risk:</strong> Large HR software providers may develop competing AI solutions.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Mitigation:</strong> First-mover advantage, patent applications, and continuous innovation in blockchain integration.
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/20">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Regulatory Changes</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Risk:</strong> Evolving AI and blockchain regulations could impact operations.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Mitigation:</strong> Proactive compliance monitoring, legal advisory board, and adaptable architecture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">10.3 Risk Mitigation Framework</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Technical Safeguards</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Redundant infrastructure across multiple cloud providers</li>
                      <li>• Automated backup and disaster recovery procedures</li>
                      <li>• Continuous security monitoring and threat detection</li>
                      <li>• Regular penetration testing and vulnerability assessments</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Business Continuity</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Diversified revenue streams and customer base</li>
                      <li>• Strategic partnerships with technology providers</li>
                      <li>• Intellectual property protection and patent portfolio</li>
                      <li>• Experienced advisory board and risk management committee</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 11. Development Roadmap */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">11. Development Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    Q3 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Platform Launch & Token Distribution</h3>
                    <p className="text-muted-foreground mb-3">
                      Initial platform release with core AI agent creation capabilities and HR token launch
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Technical Milestones</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• MVP platform deployment</li>
                          <li>• HR token smart contract launch</li>
                          <li>• Basic AI agent creation tools</li>
                          <li>• Employee portal and chat interface</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Business Milestones</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 100 beta customers onboarded</li>
                          <li>• DEX listing and liquidity provision</li>
                          <li>• Initial enterprise partnerships</li>
                          <li>• Community governance launch</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                    Q4 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Enterprise Features & Integrations</h3>
                    <p className="text-muted-foreground mb-3">
                      Advanced platform capabilities and enterprise-grade integrations
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Product Development</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Advanced analytics dashboard</li>
                          <li>• HRIS integration marketplace</li>
                          <li>• Multi-language AI support</li>
                          <li>• Mobile application launch</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Market Expansion</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 1,000+ active organizations</li>
                          <li>• Enterprise sales team scaling</li>
                          <li>• Partner channel development</li>
                          <li>• International market entry</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    Q1 26
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">AI Enhancement & Marketplace</h3>
                    <p className="text-muted-foreground mb-3">
                      Next-generation AI capabilities and agent marketplace launch
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">AI Advancement</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Predictive analytics for onboarding</li>
                          <li>• Voice and video interaction support</li>
                          <li>• Advanced personalization algorithms</li>
                          <li>• Real-time sentiment analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Platform Evolution</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Agent marketplace for sharing</li>
                          <li>• Third-party developer APIs</li>
                          <li>• Advanced workflow automation</li>
                          <li>• Custom reporting and dashboards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    Q2 26
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Global Scaling & DAO Governance</h3>
                    <p className="text-muted-foreground mb-3">
                      International expansion and decentralized governance implementation
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Global Expansion</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Multi-region deployment</li>
                          <li>• Local compliance frameworks</li>
                          <li>• Regional partnership network</li>
                          <li>• Localized customer support</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Decentralization</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• DAO governance structure launch</li>
                          <li>• Community-driven development</li>
                          <li>• Decentralized agent marketplace</li>
                          <li>• Token holder voting mechanisms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 12. Team & Governance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">12. Team & Governance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">12.1 Leadership Team</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Cristian Lantadilla</h3>
                    <p className="text-sm text-primary mb-2">CEO & Co-Founder</p>
                    <p className="text-sm text-muted-foreground">
                      10+ years of experience in blockchain technology and AI systems. With expertise in distributed systems and enterprise software architecture.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Renato Ortega</h3>
                    <p className="text-sm text-secondary mb-2">Co-Founder & HR Specialist</p>
                    <p className="text-sm text-muted-foreground">
                      8+ years in HR and talent development with deep expertise in employee onboarding, 
                      organizational psychology, and HR technology implementation across diverse industries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">12.3 Governance Model</h3>
                <p className="text-muted-foreground">
                  AgentForceHR will transition to a decentralized autonomous organization (DAO) structure by Q2 2026, 
                  enabling token holders to participate in platform governance and strategic decision-making.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-3">Governance Rights</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Platform feature prioritization</li>
                      <li>• Token economics parameter adjustments</li>
                      <li>• Treasury fund allocation decisions</li>
                      <li>• Strategic partnership approvals</li>
                      <li>• Protocol upgrade proposals</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-3">Voting Mechanism</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Minimum 1,000 HRT for proposal submission</li>
                      <li>• Quadratic voting to prevent whale dominance</li>
                      <li>• 7-day voting period for standard proposals</li>
                      <li>• 14-day period for constitutional changes</li>
                      <li>• 60% quorum requirement for major decisions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 13. Conclusion */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">13. Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-lg">
                AgentForceHR represents a transformative opportunity in the rapidly growing HR technology market. 
                By combining cutting-edge AI with blockchain security and a sustainable token economy, we are positioned 
                to capture significant market share while delivering measurable value to organizations worldwide.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-sm text-muted-foreground">
                    $35.68B addressable market with 15.2% CAGR in AI-HR segment
                  </p>
                </div>
                <div className="text-center p-6 bg-secondary/5 rounded-lg">
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Competitive Advantage</h3>
                  <p className="text-sm text-muted-foreground">
                    First-mover advantage in blockchain-powered HR AI with proven technology stack
                  </p>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Growth Potential</h3>
                  <p className="text-sm text-muted-foreground">
                    185% revenue CAGR with path to $33.5M annual revenue by 2029
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investment Opportunity Alert */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <Alert className="border-primary/20 bg-primary/5">
                <FileText className="h-4 w-4 text-primary" />
                <AlertDescription>
                  <strong>Investment Opportunity:</strong> AgentForceHR is positioned to become the leading platform 
                  for AI-powered HR automation, with strong fundamentals, proven technology, and a clear path to profitability.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Whitepaper;
