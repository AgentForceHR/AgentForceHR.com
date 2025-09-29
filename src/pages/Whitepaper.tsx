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
              AgentForceHR Privacy-First{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Whitepaper
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive technical analysis of privacy-first AI agents powered by Ocean Protocol for HR automation, 
              including privacy architecture, tokenomics, market opportunity, and implementation roadmap.
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
                AgentForceHR represents a paradigm shift in employee onboarding technology, creating the world's first 
                privacy-first HR AI protocol. By combining Ocean Protocol's Compute-to-Data technology with advanced 
                artificial intelligence and BSC blockchain efficiency, we deliver intelligent, scalable, and 
                privacy-preserving HR automation solutions.
              </p>
              <p className="text-muted-foreground">
                Built on Ocean Protocol's privacy infrastructure and BSC blockchain, powered by the HR Token (HRT) economy, 
                our platform enables organizations to create custom AI agents that process sensitive employee data 
                without exposure, ensuring privacy-by-design compliance with GDPR, HIPAA, and other regulatory frameworks.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">$35.68B</div>
                  <p className="text-sm text-muted-foreground">Privacy-Focused HR Market by 2028</p>
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
                    <h3 className="text-lg font-semibold mb-2">Privacy-First AI Layer</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ocean Protocol C2D orchestrates privacy-preserving AI for secure natural language processing
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Privacy-preserving language understanding</li>
                      <li>• Context-aware responses without data exposure</li>
                      <li>• Multi-language support</li>
                      <li>• Federated learning for privacy</li>
                    </ul>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Privacy & Blockchain Layer</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ocean Protocol provides privacy-first data processing while BSC handles fast, cost-effective transactions
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Ocean Protocol C2D privacy</li>
                      <li>• Data tokenization (ERC721/ERC20)</li>
                      <li>• Ultra-low transaction fees</li>
                      <li>• Privacy-preserving compute jobs</li>
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
                        <li>• Privacy-protected employee portal</li>
                        <li>• Real-time chat components</li>
                        <li>• Privacy-preserving analytics tools</li>
                        <li>• Mobile-responsive design</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Backend Services</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Node.js API server</li>
                        <li>• Privacy-protected data storage</li>
                        <li>• BSC blockchain integration</li>
                        <li>• Ocean Protocol C2D orchestration</li>
                        <li>• Authentication & authorization</li>
                        <li>• Privacy-first data tokenization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Ocean Protocol Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    AgentForceHR creates a privacy-first HR AI protocol using Ocean Protocol's Compute-to-Data (C2D) technology. This revolutionary approach enables AI agents to analyze encrypted employee records, performance reviews, and confidential documents without ever accessing raw data, establishing a new standard for privacy-preserving HR automation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Privacy-First Architecture</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Employee data tokenization (ERC721/ERC20)</li>
                        <li>• Zero-exposure file processing via C2D</li>
                        <li>• Homomorphic encryption for computations</li>
                        <li>• Privacy-protected result delivery</li>
                        <li>• Immutable privacy audit trails</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Compliance Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• GDPR Article 25 privacy-by-design compliance</li>
                        <li>• HIPAA-ready medical record handling</li>
                        <li>• Immutable privacy access logs</li>
                        <li>• Granular data tokenization controls</li>
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
                    The global HR software market is experiencing unprecedented growth, driven by digital transformation 
                    initiatives and increasing demand for privacy-compliant remote onboarding solutions that protect sensitive employee data.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium">Market Size & Growth</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Privacy-focused HR software: $24.04B (2024)</li>
                        <li>• Projected privacy-compliant market: $35.68B (2028)</li>
                        <li>• Compound Annual Growth Rate: 15.2%</li>
                        <li>• Privacy-first AI HR solutions leading growth</li>
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
                        Traditional platforms requiring data uploads
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Limited AI capabilities</li>
                        <li>• Data privacy risks</li>
                        <li>• No privacy-by-design architecture</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">AI-First Solutions</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI tools without privacy protection
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• No privacy-preserving technology</li>
                        <li>• Subscription-based pricing</li>
                        <li>• Data exposure risks</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-primary/5">
                      <h4 className="font-medium mb-2 text-primary">AgentForceHR</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Privacy-first AI agents with Ocean Protocol
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Ocean Protocol privacy-by-design</li>
                        <li>• Pay-per-use token model</li>
                        <li>• Zero-exposure AI processing</li>
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
                        Built on a16z's Eliza OS with Ocean Protocol integration, providing privacy-first orchestration for AI agent creation and secure data management.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Privacy-preserving agent lifecycle</li>
                        <li>• Secure context preservation via C2D</li>
                        <li>• Multi-modal interactions</li>
                        <li>• Ocean Protocol plugin architecture</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Google Gemini Integration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Advanced language model integrated with Ocean Protocol for privacy-preserving conversations and intelligent responses.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Privacy-preserving language processing</li>
                        <li>• Secure contextual understanding</li>
                        <li>• Multi-turn conversations</li>
                        <li>• Privacy-protected domain training</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Blockchain Infrastructure</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Ocean Protocol Privacy Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Zero-knowledge data processing</li>
                        <li>• Privacy-by-design architecture</li>
                        <li>• GDPR Article 25 compliance</li>
                        <li>• Secure multi-party computation</li>
                        <li>• Immutable privacy audit trails</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Smart Contract Functions</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Privacy-preserving agent registration</li>
                        <li>• Token payment processing</li>
                        <li>• Data tokenization access control</li>
                        <li>• Privacy audit trail maintenance</li>
                        <li>• Privacy-compliant governance voting</li>
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
                        <li>• Privacy regulation compliance demands</li>
                        <li>• AI technology mainstream acceptance</li>
                        <li>• Ocean Protocol ecosystem growth</li>
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
                        <strong>Risk:</strong> Ocean Protocol network dependencies
                        <br />
                        <strong>Mitigation:</strong> Multi-node deployment and privacy-preserving fallback systems
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                      <h4 className="font-medium">Blockchain Scalability</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Risk:</strong> Privacy compute network congestion
                        <br />
                        <strong>Mitigation:</strong> Distributed Ocean Protocol nodes and BSC efficiency
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
                        <strong>Risk:</strong> Large incumbents adopting privacy-first approaches
                        <br />
                        <strong>Mitigation:</strong> First-mover advantage in Ocean Protocol HR integration
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/20">
                      <h4 className="font-medium">Regulatory Changes</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Risk:</strong> Evolving privacy and AI regulations
                        <br />
                        <strong>Mitigation:</strong> Privacy-by-design architecture exceeds current regulations
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
                          10+ years in blockchain and privacy-preserving AI technology. Expert in Ocean Protocol 
                          integration and privacy-by-design enterprise software solutions.
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
                          8+ years in HR and talent development with focus on privacy-compliant employee experience design. 
                          Expert in data protection regulations and privacy-first organizational psychology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Advisory Board</h3>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium">Privacy Technology</h4>
                      <p className="text-sm text-muted-foreground">
                        Industry experts in Ocean Protocol and privacy-preserving computation
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
                          <p className="font-medium">Privacy-First Platform Launch</p>
                          <p className="text-sm text-muted-foreground">MVP with Ocean Protocol C2D integration and BSC token economy</p>
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
                          <p className="font-medium">Privacy-Conscious Customer Onboarding</p>
                          <p className="text-sm text-muted-foreground">First 100 privacy-focused enterprise customers</p>
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
                          <p className="font-medium">Privacy-Enhanced Enterprise Features</p>
                          <p className="text-sm text-muted-foreground">Advanced privacy-preserving analytics and secure HRIS integrations</p>
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
                          <p className="font-medium">Global Privacy Compliance</p>
                          <p className="text-sm text-muted-foreground">Multi-region deployment with Ocean Protocol privacy guarantees</p>
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
                          <p className="font-medium">Privacy-First Agent Marketplace</p>
                          <p className="text-sm text-muted-foreground">Community-created privacy-preserving agent templates</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Privacy-Focused DAO Governance</p>
                          <p className="text-sm text-muted-foreground">Community-driven privacy-first platform development</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Cross-chain Privacy Integration</p>
                          <p className="text-sm text-muted-foreground">Multi-blockchain privacy protocols and Ocean Protocol interoperability</p>
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
                          <p className="font-medium">Privacy-Preserving AI Training</p>
                          <p className="text-sm text-muted-foreground">Federated learning models for industry-specific privacy requirements</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">Privacy-First Partnerships</p>
                          <p className="text-sm text-muted-foreground">Strategic alliances with privacy-conscious HR vendors and Ocean Protocol ecosystem</p>
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
                    <h3 className="font-semibold mb-2">Privacy-by-Design</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ocean Protocol C2D privacy</li>
                      <li>• GDPR Article 25 compliance</li>
                      <li>• Zero-knowledge processing</li>
                      <li>• Privacy audit trails</li>
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
                AgentForceHR creates the world's first privacy-first HR AI protocol using Ocean Protocol's revolutionary 
                Compute-to-Data technology. Join us in establishing a new standard for privacy-preserving HR automation 
                that protects employee data while delivering intelligent insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={downloadPDF} variant="hero" size="xl" className="group">
                  <Download className="w-5 h-5 mr-2" />
                  Download Privacy-First Whitepaper
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