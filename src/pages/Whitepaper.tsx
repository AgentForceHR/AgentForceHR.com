import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { FileText, Download, ExternalLink, Bot, Shield, Coins, Users, TrendingUp, Globe, Target, Zap, Brain, Lock, ChartBar as BarChart3, Calendar, DollarSign, Award, CircleCheck as CheckCircle, ArrowRight } from "lucide-react";

const Whitepaper = () => {
  const downloadPDF = () => {
    // In production, this would download the actual PDF
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
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Technical Whitepaper
            </Badge>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={downloadPDF} variant="hero" size="xl" className="group">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline-primary" size="xl">
                <ExternalLink className="w-5 h-5 mr-2" />
                View on BSCScan
              </Button>
            </div>
          </div>

          {/* Executive Summary */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AgentForceHR represents a paradigm shift in employee onboarding technology, combining 
                advanced artificial intelligence with blockchain security to create intelligent, 
                scalable, and secure HR automation solutions.
              </p>
              <p className="text-muted-foreground">
                Built on Binance Smart Chain (BSC) infrastructure and powered by the HR Token (HRT) economy, 
                our platform enables organizations to create custom AI agents that streamline onboarding 
                processes while maintaining enterprise-grade security and compliance standards.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">$35.68B</div>
                  <p className="text-sm text-muted-foreground">HR Software Market by 2028</p>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-1">15.2%</div>
                  <p className="text-sm text-muted-foreground">Market CAGR</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">60%</div>
                  <p className="text-sm text-muted-foreground">Time Reduction</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Architecture</CardTitle>
              <CardDescription>
                Multi-layer architecture combining AI, blockchain, and enterprise systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border rounded-lg">
                    <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">AI Layer</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Eliza OS framework orchestrates Google Gemini AI for natural language processing
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Natural language understanding</li>
                      <li>• Context-aware responses</li>
                      <li>• Multi-language support</li>
                      <li>• Continuous learning</li>
                    </ul>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Blockchain Layer</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      BSC provides secure, fast, and cost-effective transaction processing
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• BSC smart contracts</li>
                      <li>• Immutable record keeping</li>
                      <li>• Ultra-low transaction fees</li>
                      <li>• High throughput processing</li>
                    </ul>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Coins className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Token Economy</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      HR tokens enable pay-per-use model with transparent pricing
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Agent creation payments</li>
                      <li>• Staking mechanisms</li>
                      <li>• Governance participation</li>
                      <li>• Premium feature access</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">System Components</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Frontend Components</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• React-based admin dashboard</li>
                        <li>• Employee portal interface</li>
                        <li>• Real-time chat components</li>
                        <li>• Analytics and reporting tools</li>
                        <li>• Mobile-responsive design</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Backend Services</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Node.js API server</li>
                        <li>• MongoDB data storage</li>
                        <li>• BSC blockchain integration</li>
                        <li>• AI orchestration service</li>
                        <li>• Authentication & authorization</li>
                        <li>• Ocean Protocol C2D integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Ocean Protocol Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    AgentForceHR leverages Ocean Protocol's Compute-to-Data (C2D) technology to process sensitive HR data while maintaining strict privacy controls. This integration enables AI agents to analyze encrypted employee records, performance reviews, and confidential documents without exposing raw data.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Privacy-Preserving Workflow</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Secure data tokenization (ERC721/ERC20)</li>
                        <li>• Encrypted file processing via C2D</li>
                        <li>• Homomorphic encryption for computations</li>
                        <li>• Anonymized result delivery</li>
                        <li>• Blockchain audit trails</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Compliance Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• GDPR compliant data processing</li>
                        <li>• HIPAA-ready medical record handling</li>
                        <li>• Immutable access logs</li>
                        <li>• Granular permission controls</li>
                        <li>• Zero-knowledge data analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Analysis */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Market Opportunity</h3>
                  <p className="text-muted-foreground mb-6">
                    The global HR software market is experiencing unprecedented growth, driven by digital 
                    transformation initiatives and the need for efficient remote onboarding solutions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium">Market Size & Growth</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Current market size: $24.04B (2024)</li>
                        <li>• Projected market size: $35.68B (2028)</li>
                        <li>• Compound Annual Growth Rate: 15.2%</li>
                        <li>• AI-powered HR solutions leading growth</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Target Segments</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Mid-market companies (500-5,000 employees)</li>
                        <li>• Enterprise organizations (5,000+ employees)</li>
                        <li>• Fast-growing startups with scaling needs</li>
                        <li>• Remote-first organizations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Competitive Landscape</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Traditional HR Platforms</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Workday, SAP SuccessFactors, BambooHR
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Limited AI capabilities</li>
                        <li>• High implementation costs</li>
                        <li>• Complex user interfaces</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">AI-First Solutions</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Emerging AI-powered HR tools
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Limited blockchain integration</li>
                        <li>• Subscription-based pricing</li>
                        <li>• Generic AI models</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-primary/5">
                      <h4 className="font-medium mb-2 text-primary">AgentForceHR</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Blockchain-powered AI agents
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• BSC blockchain security</li>
                        <li>• Pay-per-use token model</li>
                        <li>• Customizable AI agents</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Tokenomics</CardTitle>
              <CardDescription>
                HR Token (HRT) economic model and distribution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Token Distribution (1B HRT)</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Treasury</span>
                          <span className="font-semibold">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                        <p className="text-xs text-muted-foreground">Platform development and operations</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Pre-sale</span>
                          <span className="font-semibold">30%</span>
                        </div>
                        <Progress value={30} className="h-2" />
                        <p className="text-xs text-muted-foreground">Early investors and strategic partners</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Staking Rewards</span>
                          <span className="font-semibold">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                        <p className="text-xs text-muted-foreground">Long-term holder incentives</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Liquidity</span>
                          <span className="font-semibold">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                        <p className="text-xs text-muted-foreground">DEX liquidity provision</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Enterprise Incentives</span>
                          <span className="font-semibold">10%</span>
                        </div>
                        <Progress value={10} className="h-2" />
                        <p className="text-xs text-muted-foreground">Enterprise adoption programs</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Team</span>
                          <span className="font-semibold">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                        <p className="text-xs text-muted-foreground">Team allocation with vesting</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Economic Mechanisms</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Token Burn</h4>
                        <p className="text-sm text-muted-foreground">
                          2% of tokens used for agent creation are permanently burned, 
                          creating deflationary pressure and potential value appreciation.
                        </p>
                      </div>
                      <div className="p-4 bg-secondary/5 rounded-lg">
                        <h4 className="font-medium text-secondary mb-2">Staking Rewards</h4>
                        <p className="text-sm text-muted-foreground">
                          Token holders can stake HRT for governance rights, platform fee discounts, 
                          and additional rewards from the staking pool.
                        </p>
                      </div>
                      <div className="p-4 bg-accent/5 rounded-lg">
                        <h4 className="font-medium text-accent mb-2">Utility Expansion</h4>
                        <p className="text-sm text-muted-foreground">
                          Token utility grows with platform features: premium analytics, 
                          enterprise integrations, and advanced AI capabilities.
                        </p>
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
              <CardTitle className="text-2xl">Technology Deep Dive</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Eliza OS Framework</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Built on a16z's Eliza OS, providing robust orchestration for AI agent creation and management.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Agent lifecycle management</li>
                        <li>• Context preservation</li>
                        <li>• Multi-modal interactions</li>
                        <li>• Plugin architecture</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Google Gemini Integration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Advanced language model providing human-like conversations and intelligent responses.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Natural language processing</li>
                        <li>• Contextual understanding</li>
                        <li>• Multi-turn conversations</li>
                        <li>• Domain-specific training</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Blockchain Infrastructure</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">BSC Network Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• High throughput (300+ TPS)</li>
                        <li>• Low transaction costs (~$0.01)</li>
                        <li>• EVM compatibility</li>
                        <li>• Mature ecosystem</li>
                        <li>• Strong security track record</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Smart Contract Functions</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Agent registration and metadata</li>
                        <li>• Token payment processing</li>
                        <li>• Access control management</li>
                        <li>• Audit trail maintenance</li>
                        <li>• Governance voting mechanisms</li>
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
              <CardTitle className="text-2xl">Financial Projections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Year 1</h3>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-green-600">$2.5M</div>
                      <p className="text-sm text-muted-foreground">Projected Revenue</p>
                      <p className="text-xs text-muted-foreground">1,000 enterprise clients</p>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Year 2</h3>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-blue-600">$8.7M</div>
                      <p className="text-sm text-muted-foreground">Projected Revenue</p>
                      <p className="text-xs text-muted-foreground">5,000 enterprise clients</p>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Year 3</h3>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-purple-600">$25.2M</div>
                      <p className="text-sm text-muted-foreground">Projected Revenue</p>
                      <p className="text-xs text-muted-foreground">15,000 enterprise clients</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Revenue Streams</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Primary Revenue</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• HR token sales for agent creation (70%)</li>
                        <li>• Premium feature subscriptions (15%)</li>
                        <li>• Enterprise licensing deals (10%)</li>
                        <li>• Integration and consulting services (5%)</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Growth Drivers</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Increasing remote work adoption</li>
                        <li>• AI technology mainstream acceptance</li>
                        <li>• Blockchain infrastructure maturity</li>
                        <li>• Enterprise digital transformation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Analysis */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Technical Risks</h3>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
                      <h4 className="font-medium">AI Model Dependencies</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Risk:</strong> Reliance on third-party AI services
                        <br />
                        <strong>Mitigation:</strong> Multi-provider strategy and fallback systems
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                      <h4 className="font-medium">Blockchain Scalability</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Risk:</strong> Network congestion affecting performance
                        <br />
                        <strong>Mitigation:</strong> BSC's high throughput and layer-2 solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Market Risks</h3>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                      <h4 className="font-medium">Competitive Pressure</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Risk:</strong> Large incumbents entering the market
                        <br />
                        <strong>Mitigation:</strong> First-mover advantage and patent protection
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/20">
                      <h4 className="font-medium">Regulatory Changes</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Risk:</strong> Evolving blockchain and AI regulations
                        <br />
                        <strong>Mitigation:</strong> Proactive compliance and legal monitoring
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
              <CardTitle className="text-2xl">Team & Advisors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Core Team</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Cristian Lantadilla</h4>
                        <p className="text-sm text-primary mb-1">CEO & Co-Founder</p>
                        <p className="text-xs text-muted-foreground">
                          10+ years in blockchain and AI technology. Previously led engineering teams 
                          at Fortune 500 companies, specializing in enterprise software solutions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Users className="w-8 h-8 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Renato Ortega</h4>
                        <p className="text-sm text-secondary mb-1">Co-Founder & HR Specialist</p>
                        <p className="text-xs text-muted-foreground">
                          8+ years in HR and talent development. Expert in employee experience design 
                          and organizational psychology with proven track record in scaling HR operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Advisory Board</h3>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium">Blockchain Technology</h4>
                      <p className="text-sm text-muted-foreground">
                        Industry experts in BSC development and DeFi protocols
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium">HR Industry</h4>
                      <p className="text-sm text-muted-foreground">
                        Former executives from leading HR technology companies
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium">AI & Machine Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        Researchers and practitioners in enterprise AI applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Roadmap */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Implementation Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Phase 1: Foundation (Q4 2025)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Core Platform Launch</p>
                          <p className="text-sm text-muted-foreground">MVP with basic agent creation and BSC integration</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">HR Token Distribution</p>
                          <p className="text-sm text-muted-foreground">Initial token sale and DEX listing</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Beta Customer Onboarding</p>
                          <p className="text-sm text-muted-foreground">First 100 enterprise customers</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Phase 2: Scale (Q1-Q2 2026)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Enterprise Features</p>
                          <p className="text-sm text-muted-foreground">Advanced analytics and HRIS integrations</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Token Staking</p>
                          <p className="text-sm text-muted-foreground">Governance and reward mechanisms</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Global Expansion</p>
                          <p className="text-sm text-muted-foreground">Multi-region deployment and compliance</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Phase 3: Ecosystem (Q4 2026)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Agent Marketplace</p>
                          <p className="text-sm text-muted-foreground">Community-created agent templates</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">DAO Governance</p>
                          <p className="text-sm text-muted-foreground">Community-driven platform development</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Cross-chain Integration</p>
                          <p className="text-sm text-muted-foreground">Multi-blockchain support and interoperability</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Phase 4: Expansion (2027+)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">AI Model Training</p>
                          <p className="text-sm text-muted-foreground">Custom AI models for specific industries</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Global Partnerships</p>
                          <p className="text-sm text-muted-foreground">Strategic alliances with major HR vendors</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">IPO Preparation</p>
                          <p className="text-sm text-muted-foreground">Public market readiness and expansion capital</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regulatory Compliance */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border rounded-lg">
                    <Lock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Data Protection</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• GDPR compliance</li>
                      <li>• CCPA adherence</li>
                      <li>• SOC 2 Type II</li>
                      <li>• ISO 27001</li>
                    </ul>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Financial Compliance</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AML/KYC procedures</li>
                      <li>• Securities regulations</li>
                      <li>• Tax compliance</li>
                      <li>• Audit requirements</li>
                    </ul>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">International</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multi-jurisdiction support</li>
                      <li>• Local data residency</li>
                      <li>• Regional compliance</li>
                      <li>• Cross-border operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">The Future of HR is Here</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                AgentForceHR combines cutting-edge AI technology with BSC blockchain security to create 
                the next generation of HR automation tools. Join us in revolutionizing employee onboarding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={downloadPDF} variant="hero" size="xl" className="group">
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Whitepaper
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline-primary" size="xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Whitepaper;
