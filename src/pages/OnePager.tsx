import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bot, Shield, Coins, Users, TrendingUp, Zap, CircleCheck as CheckCircle, ArrowRight, Target, Lightbulb, Globe, Award, FileText, Brain } from "lucide-react";

const OnePager = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              One-Page Project Overview
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AgentForceHR Privacy-First{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Project Overview
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing employee onboarding with the world's first privacy-first HR AI protocol using Ocean Protocol's 
              Compute-to-Data technology to provide secure, scalable, and intelligent HR automation without data exposure.
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <Target className="w-5 h-5" />
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Employee onboarding is broken and exposes sensitive data to privacy risks. Traditional processes are inefficient, 
                  inconsistent, and compromise employee data security while failing to engage new hires effectively.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>69% of employees with poor onboarding leave within the first year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>HR teams expose sensitive data to privacy risks during manual processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>Traditional AI solutions require uploading confidential employee data to external servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>No privacy-by-design solutions for regulatory compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Lightbulb className="w-5 h-5" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  AgentForceHR creates the world's first privacy-first HR AI protocol using Ocean Protocol's Compute-to-Data 
                  technology. Our AI agents process sensitive employee data without ever accessing raw files, providing 
                  personalized, secure, and scalable HR support with complete privacy protection.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>60% reduction in onboarding time through privacy-preserving automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>85% improvement in HR efficiency with zero data exposure risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>24/7 privacy-protected intelligent support with consistent information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Ocean Protocol ensures complete data privacy and regulatory compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technology Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Technology Architecture</CardTitle>
              <CardDescription>
                Built on proven, enterprise-grade technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Privacy Layer</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ocean Protocol C2D ensures AI processing without raw data access for complete privacy
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Zero-knowledge data processing</li>
                    <li>• Privacy-preserving context analysis</li>
                    <li>• Federated learning for privacy</li>
                    <li>• Secure multi-language support</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Layer</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Eliza OS framework with Ocean Protocol integration for privacy-preserving AI conversations
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Privacy-preserving language models</li>
                    <li>• Secure conversation orchestration</li>
                    <li>• Context-aware privacy protection</li>
                    <li>• Compliant AI response generation</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Coins className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Token Economy</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    HR tokens on BSC enable pay-per-use model for creating privacy-first AI agents with Ocean Protocol
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Privacy-first transparent pricing</li>
                    <li>• No monthly subscriptions</li>
                    <li>• Ultra-low BSC transaction costs</li>
                    <li>• Privacy-protected verified transactions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunity */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Market Opportunity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1B</div>
                  <h3 className="font-semibold mb-2">Total HRT Supply</h3>
                  <p className="text-sm text-muted-foreground">
                    Total token supply: Treasury 25%, Staking 15%, Liquidity 15%, Pre-sale 30%, Enterprise 10%, Team 5%
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100</div>
                  <h3 className="font-semibold mb-2">HRT per Agent</h3>
                  <p className="text-sm text-muted-foreground">
                    Token cost for creating each AI agent
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$0.0005</div>
                  <h3 className="font-semibold mb-2">Initial Token Price</h3>
                  <p className="text-sm text-muted-foreground">
                    Starting price for privacy-first HR automation tokens
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Development Roadmap</CardTitle>
              <CardDescription>
                Strategic milestones for platform development and market expansion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    Q1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Platform Launch</h3>
                    <p className="text-muted-foreground mb-2">Privacy-first platform with Ocean Protocol C2D integration</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Privacy-First MVP</Badge>
                      <Badge variant="secondary">HR Token Launch</Badge>
                      <Badge variant="secondary">Ocean Protocol Integration</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                    Q2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Enterprise Features</h3>
                    <p className="text-muted-foreground mb-2">Privacy-enhanced features for large organizations</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Privacy-First HRIS Integration</Badge>
                      <Badge variant="secondary">Zero-Knowledge Analytics</Badge>
                      <Badge variant="secondary">Secure Multi-tenant Support</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    Q3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">AI Enhancement</h3>
                    <p className="text-muted-foreground mb-2">Next-generation privacy-preserving AI capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Privacy-Preserving AI Models</Badge>
                      <Badge variant="secondary">Anonymous Predictive Analytics</Badge>
                      <Badge variant="secondary">Secure Voice Integration</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    Q4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Global Expansion</h3>
                    <p className="text-muted-foreground mb-2">Global privacy compliance and Ocean Protocol expansion</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Global Privacy Compliance</Badge>
                      <Badge variant="secondary">Privacy-First Multi-language AI</Badge>
                      <Badge variant="secondary">Ocean Protocol Partnerships</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Leadership Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Cristian Lantadilla</h3>
                    <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
                    <p className="text-xs text-muted-foreground">10 years blockchain & AI experience</p>
                    <p className="text-xs text-muted-foreground">Ocean Protocol privacy expert</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Renato Ortega</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder & HR Specialist</p>
                    <p className="text-xs text-muted-foreground">8+ years HR and talent development</p>
                    <p className="text-xs text-muted-foreground">Privacy compliance specialist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Time Reduction</span>
                    <span className="font-bold text-primary">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">HR Efficiency</span>
                    <span className="font-bold text-secondary">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cost Savings</span>
                    <span className="font-bold text-accent">42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Technology Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <Bot className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Eliza OS</h3>
                  <p className="text-xs text-muted-foreground">a16z AI Framework</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Brain className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Google Gemini</h3>
                  <p className="text-xs text-muted-foreground">Advanced AI Model</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">BSC Network</h3>
                  <p className="text-xs text-muted-foreground">Binance Smart Chain</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Coins className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">HR Token</h3>
                  <p className="text-xs text-muted-foreground">Utility Token</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Model */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Business Model</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Revenue Streams</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Coins className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Privacy-First Token Sales</p>
                        <p className="text-sm text-muted-foreground">Primary revenue from tokens enabling Ocean Protocol-powered agent creation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Privacy-Compliant Enterprise Licensing</p>
                        <p className="text-sm text-muted-foreground">Custom privacy-first solutions and Ocean Protocol support for large organizations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Privacy-Enhanced Premium Features</p>
                        <p className="text-sm text-muted-foreground">Zero-knowledge analytics, secure integrations, and Ocean Protocol customization</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Value Proposition</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Privacy-Protected ROI</p>
                        <p className="text-sm text-muted-foreground">Quantifiable improvements while ensuring complete employee data protection</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Privacy-First Scalability</p>
                        <p className="text-sm text-muted-foreground">Ocean Protocol privacy infrastructure scales with your organization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Privacy-by-Design Architecture</p>
                        <p className="text-sm text-muted-foreground">Ocean Protocol-verified privacy and regulatory compliance</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform HR?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the future of privacy-first employee onboarding with Ocean Protocol-powered AI agents. 
                Start creating intelligent, privacy-preserving HR solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Start Privacy-First Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline-primary" size="xl">
                  Schedule Privacy Demo
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

export default OnePager;