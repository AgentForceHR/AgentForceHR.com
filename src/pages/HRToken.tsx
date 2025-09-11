import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Coins, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Bot,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Wallet,
  BarChart3,
  Globe,
  Lock,
  Target,
  Calendar,
  DollarSign
} from "lucide-react";

const HRToken = () => {
  const openDEX = () => {
    window.open('https://pancakeswap.finance/swap?outputCurrency=0x742d35Cc6634C0532925a3b8D4C9db96DfbF3b6C', '_blank');
  };

  const copyContractAddress = () => {
    navigator.clipboard.writeText('0x742d35Cc6634C0532925a3b8D4C9db96DfbF3b6C');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative w-40 h-40 mx-auto mb-8">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl scale-110"></div>
              
              {/* Main token container */}
              <div className="relative w-full h-full">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gradient-to-br from-primary to-secondary bg-gradient-to-br from-background to-muted shadow-2xl">
                  {/* Inner circle with logo */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center shadow-inner">
                    <div className="text-center">
                      <div className="text-white font-bold text-3xl mb-1 tracking-tight">HRT</div>
                      <div className="text-white/90 text-xs font-semibold tracking-widest">TOKEN</div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Coins className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-4 left-8 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
              <div className="absolute bottom-8 right-4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float delay-1000"></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-accent/40 rounded-full animate-float delay-2000"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HR Token{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                (HRT)
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              The utility token powering the future of HR automation. Create AI agents, 
              manage onboarding processes, and access premium features with blockchain-secured transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openDEX} variant="hero" size="xl" className="group">
                <Wallet className="w-5 h-5 mr-2" />
                Buy HR Tokens
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline-primary" size="xl" onClick={copyContractAddress}>
                <Coins className="w-5 h-5 mr-2" />
                Copy Contract Address
              </Button>
            </div>
          </div>

          {/* Token Overview */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Token Overview</CardTitle>
              <CardDescription>
                Essential information about the HR Token (HRT)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Token Name:</span>
                    <span className="text-primary font-semibold">HR Token</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Symbol:</span>
                    <Badge variant="default">HRT</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Network:</span>
                    <Badge variant="secondary">Binance Smart Chain</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Standard:</span>
                    <Badge variant="outline">ERC-20</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Decimals:</span>
                    <span>18</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Supply:</span>
                    <span className="font-semibold">1,000,000,000 HRT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Contract Address:</span>
                    <Button variant="ghost" size="sm" onClick={copyContractAddress}>
                      <code className="text-xs">0x742d...3b6C</code>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Agent Creation Cost:</span>
                    <span className="text-primary font-semibold">100 HRT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Transaction Fees:</span>
                    <span className="text-green-600 font-semibold">~$0.01 on BSC</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Token Use Cases</CardTitle>
              <CardDescription>
                How HR tokens power the AgentForceHR ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-all">
                  <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Agent Creation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use 100 HRT to create custom AI agents for employee onboarding
                  </p>
                  <Badge variant="default">100 HRT per agent</Badge>
                </div>
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-all">
                  <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access advanced analytics, integrations, and customization options
                  </p>
                  <Badge variant="secondary">Variable pricing</Badge>
                </div>
                <div className="text-center p-6 border rounded-lg hover:shadow-md transition-all">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Enterprise Services</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Custom implementations and dedicated support packages
                  </p>
                  <Badge variant="outline">Custom rates</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Tokenomics</CardTitle>
              <CardDescription>
                Token distribution and economic model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Token Distribution (1B HRT)</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Treasury</span>
                        <span className="font-semibold">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                      <p className="text-xs text-muted-foreground">12.5% at TGE, 12.5% vested over 18 months</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Staking Rewards</span>
                        <span className="font-semibold">20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                      <p className="text-xs text-muted-foreground">Released after 3 months gradually</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Liquidity</span>
                        <span className="font-semibold">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                      <p className="text-xs text-muted-foreground">Available at TGE for DEX liquidity</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Pre-sale</span>
                        <span className="font-semibold">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                      <p className="text-xs text-muted-foreground">Available at TGE for early investors</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Enterprise Incentives</span>
                        <span className="font-semibold">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                      <p className="text-xs text-muted-foreground">Released after 12 months for partnerships</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Reserve Fund</span>
                        <span className="font-semibold">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                      <p className="text-xs text-muted-foreground">Emergency fund released after 18 months</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Team</span>
                        <span className="font-semibold">5%</span>
                      </div>
                      <Progress value={5} className="h-2" />
                      <p className="text-xs text-muted-foreground">Team allocation released after 24 months</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Economic Model</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-medium text-primary mb-2">Deflationary Mechanism</h4>
                      <p className="text-sm text-muted-foreground">
                        2% of tokens used for agent creation are burned, reducing total supply over time
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <h4 className="font-medium text-secondary mb-2">Staking Rewards</h4>
                      <p className="text-sm text-muted-foreground">
                        Token holders can stake HRT for governance rights and platform fee discounts
                      </p>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-lg">
                      <h4 className="font-medium text-accent mb-2">Utility Growth</h4>
                      <p className="text-sm text-muted-foreground">
                        Token utility expands with new features and enterprise integrations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Token Roadmap</CardTitle>
              <CardDescription>
                Strategic development milestones for HR Token ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    Q1 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Token Launch & Platform MVP</h3>
                    <p className="text-muted-foreground mb-3">
                      Initial token distribution and core platform functionality
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">Token Launch</Badge>
                      <Badge variant="default">DEX Listing</Badge>
                      <Badge variant="default">Agent Creation</Badge>
                      <Badge variant="default">Basic Analytics</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                    Q2 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Enterprise Features & Staking</h3>
                    <p className="text-muted-foreground mb-3">
                      Advanced platform features and token staking mechanisms
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Token Staking</Badge>
                      <Badge variant="secondary">Governance Rights</Badge>
                      <Badge variant="secondary">Enterprise Tools</Badge>
                      <Badge variant="secondary">API Access</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    Q3 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Ecosystem Expansion</h3>
                    <p className="text-muted-foreground mb-3">
                      Third-party integrations and marketplace development
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Agent Marketplace</Badge>
                      <Badge variant="outline">Partner Integrations</Badge>
                      <Badge variant="outline">Mobile App</Badge>
                      <Badge variant="outline">Advanced AI Models</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    Q4 25
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Global Scaling & DAO</h3>
                    <p className="text-muted-foreground mb-3">
                      Decentralized governance and international expansion
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">DAO Launch</Badge>
                      <Badge variant="outline">Global Compliance</Badge>
                      <Badge variant="outline">Cross-chain Bridge</Badge>
                      <Badge variant="outline">Enterprise Partnerships</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Buy HR Tokens */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Why Invest in HR Tokens?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Growing Market Demand</h3>
                      <p className="text-sm text-muted-foreground">
                        The HR software market is projected to reach $35.68 billion by 2028, 
                        with AI-powered solutions leading growth at 15.2% CAGR.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Blockchain Security</h3>
                      <p className="text-sm text-muted-foreground">
                        Built on Sonic network for fast, secure, and cost-effective transactions 
                        with enterprise-grade security standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bot className="w-6 h-6 text-purple-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Proven Technology</h3>
                      <p className="text-sm text-muted-foreground">
                        Leverages Eliza OS (a16z) and Google Gemini AI for cutting-edge 
                        conversational AI capabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Revenue Generating</h3>
                      <p className="text-sm text-muted-foreground">
                        Every agent creation generates revenue, with 5% token burn creating 
                        deflationary pressure and potential value appreciation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-orange-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Enterprise Adoption</h3>
                      <p className="text-sm text-muted-foreground">
                        Target market of 50,000+ mid-to-large enterprises globally, 
                        each potentially creating multiple AI agents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-teal-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Global Scalability</h3>
                      <p className="text-sm text-muted-foreground">
                        Blockchain infrastructure enables global deployment with 
                        consistent pricing and instant settlement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Token Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">1B</div>
                <p className="text-sm text-muted-foreground">Total Supply</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Coins className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">100</div>
                <p className="text-sm text-muted-foreground">HRT per Agent</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">2%</div>
                <p className="text-sm text-muted-foreground">Token Burn Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">$0.0005</div>
                <p className="text-sm text-muted-foreground">Initial Price</p>
              </CardContent>
            </Card>
          </div>

          {/* How to Buy */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">How to Purchase HR Tokens</CardTitle>
              <CardDescription>
                Step-by-step guide to acquiring HRT tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Purchase Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Connect Wallet</h4>
                        <p className="text-sm text-muted-foreground">Connect MetaMask or compatible wallet to BSC network</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Get BNB</h4>
                        <p className="text-sm text-muted-foreground">Purchase BNB from any major exchange like Binance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Swap for HRT</h4>
                        <p className="text-sm text-muted-foreground">Use PancakeSwap to swap BNB for HR tokens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Start Creating</h4>
                        <p className="text-sm text-muted-foreground">Use HRT tokens to create AI agents with BSC efficiency</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button onClick={openDEX} className="w-full justify-start" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Buy on DEX
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => window.open('https://bscscan.com/token/0x742d35Cc6634C0532925a3b8D4C9db96DfbF3b6C', '_blank')}
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View on BSCScan
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={() => window.open('https://www.binance.com/en/buy-BNB', '_blank')}
                    >
                      <Coins className="w-4 h-4 mr-2" />
                      Buy BNB
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Wallet className="w-4 h-4 mr-2" />
                      Add to MetaMask
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Security & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border rounded-lg">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Smart Contract Security</h3>
                  <p className="text-sm text-muted-foreground">
                    BSC-audited smart contracts with multi-signature controls and emergency procedures
                  </p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <Shield className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Designed to comply with global financial regulations and data protection laws
                  </p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    All transactions and token movements are publicly verifiable on BSCScan
                  </p>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Join the HR Revolution?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Purchase HR tokens today and start creating intelligent AI agents that transform 
                your employee onboarding experience on BSC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={openDEX} variant="hero" size="xl" className="group">
                  <Coins className="w-5 h-5 mr-2" />
                  Buy HR Tokens Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline-primary" size="xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                <strong>Contract Address:</strong> 0x742d35Cc6634C0532925a3b8D4C9db96DfbF3b6C • BSC Mainnet
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HRToken;