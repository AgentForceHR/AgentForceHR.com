import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Zap
} from "lucide-react";

const Whitepaper = () => {
  const openGitbook = () => {
    window.open('https://agentforcehr.gitbook.io/whitepaper', '_blank');
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
                Whitepaper
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive technical overview of our blockchain-powered AI agent platform 
              for revolutionizing employee onboarding and HR automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openGitbook} size="lg" className="group">
                <FileText className="w-5 h-5 mr-2" />
                Read Full Whitepaper
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
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
                AgentForceHR represents a paradigm shift in human resources technology, combining 
                advanced artificial intelligence with blockchain security to create autonomous HR agents 
                that transform the employee onboarding experience.
              </p>
              <p className="text-muted-foreground">
                Built on the Eliza OS framework (developed by a16z) and powered by Google Gemini AI, 
                our platform enables HR professionals to create intelligent, blockchain-verified agents 
                using HR tokens (HRT) deployed on the Sonic network for fast, low-cost transactions.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <Bot className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">AI-Powered</h3>
                  <p className="text-sm text-muted-foreground">Eliza OS + Gemini AI</p>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <h3 className="font-semibold">Blockchain Secured</h3>
                  <p className="text-sm text-muted-foreground">Sonic Network</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Coins className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold">Token Economy</h3>
                  <p className="text-sm text-muted-foreground">HR Token (HRT)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Whitepaper Contents</CardTitle>
              <CardDescription>
                Comprehensive technical documentation available on GitBook
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Technical Architecture</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Eliza OS Framework Integration</li>
                    <li>• Google Gemini AI Implementation</li>
                    <li>• Sonic Blockchain Infrastructure</li>
                    <li>• Smart Contract Architecture</li>
                    <li>• Security & Compliance Framework</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">Business Model</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• HR Token Economics</li>
                    <li>• Market Analysis & Opportunity</li>
                    <li>• Competitive Landscape</li>
                    <li>• Revenue Projections</li>
                    <li>• Go-to-Market Strategy</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-accent">Product Roadmap</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Q1 2025: Platform Launch</li>
                    <li>• Q2 2025: Enterprise Features</li>
                    <li>• Q3 2025: Advanced AI Models</li>
                    <li>• Q4 2025: Global Expansion</li>
                    <li>• 2026: Ecosystem Development</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-600">Research & Development</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AI Model Performance Analysis</li>
                    <li>• Blockchain Scalability Solutions</li>
                    <li>• User Experience Research</li>
                    <li>• Security Audit Results</li>
                    <li>• Future Technology Integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Traditional employee onboarding processes are fragmented, time-consuming, and 
                  inconsistent, leading to poor employee experiences and increased HR workload.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 69% of employees are more likely to stay with a company for three years if they experienced great onboarding</li>
                  <li>• HR teams spend 40+ hours per new hire on repetitive tasks</li>
                  <li>• Inconsistent information delivery leads to confusion and delays</li>
                  <li>• Limited scalability for growing organizations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-secondary" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  AgentForceHR leverages blockchain-secured AI agents to automate and personalize 
                  the entire onboarding journey, reducing costs while improving employee satisfaction.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 60% reduction in onboarding time</li>
                  <li>• 85% improvement in HR team efficiency</li>
                  <li>• 24/7 intelligent support for employees</li>
                  <li>• Blockchain-verified security and compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>
                Built on cutting-edge technologies for enterprise-grade performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3">
                    <Bot className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Eliza OS</h3>
                  <p className="text-sm text-muted-foreground">a16z AI agent framework</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Google Gemini</h3>
                  <p className="text-sm text-muted-foreground">Advanced language model</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Sonic Network</h3>
                  <p className="text-sm text-muted-foreground">Fast, low-cost blockchain</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center mx-auto mb-3">
                    <Coins className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">HR Token</h3>
                  <p className="text-sm text-muted-foreground">Utility token economy</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Dive Deeper into Our Technology</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access our complete whitepaper on GitBook for detailed technical specifications, 
                market analysis, and implementation roadmap.
              </p>
              <Button onClick={openGitbook} variant="hero" size="xl" className="group">
                <FileText className="w-5 h-5 mr-2" />
                Read Complete Whitepaper
                <ExternalLink className="w-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Hosted on GitBook • Updated regularly • Technical deep-dive
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Whitepaper;