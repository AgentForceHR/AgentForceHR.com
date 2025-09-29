import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Shield, Zap, Users, MessageSquare, FileText, Calendar, ChartBar as BarChart3, CircleCheck as CheckCircle, ArrowRight, Coins, Brain, Clock, Globe, Lock, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Privacy-First AI Agents",
      description: "Create intelligent onboarding assistants that process sensitive data without exposure using Ocean Protocol",
      details: [
        "Ocean Protocol C2D enables AI processing without raw data access",
        "Privacy-preserving contextual understanding of employee questions",
        "24/7 availability for instant support",
        "Continuous learning while maintaining data privacy"
      ],
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ocean Protocol Privacy",
      description: "Privacy-by-design architecture ensuring sensitive HR data never leaves secure environments",
      details: [
        "Compute-to-Data technology for secure AI processing",
        "Employee data tokenization with ERC721 NFTs",
        "Immutable privacy audit trails on blockchain",
        "Zero-knowledge data analysis capabilities"
      ],
      color: "text-green-600"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "HR Token System",
      description: "Pay-per-use token system for creating and managing AI agents",
      details: [
        "Transparent pricing with BSC tokens",
        "No monthly subscriptions or hidden fees",
        "Ultra-low BSC transaction fees",
        "Real-time BSC balance tracking"
      ],
      color: "text-purple-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Privacy-Preserving Conversations",
      description: "Advanced chat capabilities that maintain context while protecting employee data privacy",
      details: [
        "Multi-language support",
        "Privacy-protected conversation history",
        "Smart escalation to human HR",
        "Anonymous sentiment analysis through Ocean Protocol"
      ],
      color: "text-orange-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Private Document Processing",
      description: "Automated document analysis through Ocean Protocol without exposing sensitive content",
      details: [
        "Privacy-preserving document analysis via C2D",
        "Encrypted form processing and completion",
        "Secure document version control",
        "Privacy-compliant audit tracking"
      ],
      color: "text-indigo-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Automated scheduling for meetings, training, and orientations",
      details: [
        "Calendar integration",
        "Automated reminder systems",
        "Resource availability checking",
        "Time zone management"
      ],
      color: "text-teal-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics to optimize onboarding processes",
      details: [
        "Real-time performance metrics",
        "Employee satisfaction tracking",
        "Process optimization insights",
        "Custom reporting dashboards"
      ],
      color: "text-red-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Privacy-First Access Control",
      description: "Ocean Protocol-powered granular permissions ensuring data access only through secure compute",
      details: [
        "Role-based data tokenization and access",
        "Department-specific privacy controls",
        "Ocean Protocol secure data compartmentalization",
        "Immutable privacy audit trails"
      ],
      color: "text-pink-600"
    }
  ];

  const integrations = [
    { name: "Workday", logo: "W", color: "bg-blue-600" },
    { name: "BambooHR", logo: "B", color: "bg-green-600" },
    { name: "SAP SuccessFactors", logo: "S", color: "bg-purple-600" },
    { name: "ADP", logo: "A", color: "bg-orange-600" },
    { name: "Slack", logo: "S", color: "bg-pink-600" },
    { name: "Microsoft Teams", logo: "M", color: "bg-indigo-600" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy-First Platform{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the comprehensive privacy-first features powered by Ocean Protocol that make AgentForceHR 
              the leading platform for secure AI-powered employee onboarding and HR automation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-muted hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-muted/30 flex items-center justify-center mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specifications */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Technical Specifications</CardTitle>
              <CardDescription className="text-center">
                Built with cutting-edge technology for enterprise-grade performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Technology</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Eliza OS Framework</li>
                    <li>Ocean Protocol C2D Integration</li>
                    <li>Natural Language Processing</li>
                    <li>Privacy-Preserving ML Models</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Binance Smart Chain (BSC)</li>
                    <li>Ocean Protocol Data Marketplace</li>
                    <li>BEP-20 Token Standard</li>
                    <li>Privacy-First Data Tokenization</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Security</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Ocean Protocol C2D Privacy</li>
                    <li>Zero-Knowledge Data Processing</li>
                    <li>GDPR Compliant</li>
                    <li>Privacy-by-Design Architecture</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integrations */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Seamless Integrations</CardTitle>
              <CardDescription className="text-center">
                Connect with your existing HR tools and systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 rounded-lg ${integration.color} flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-white font-bold text-xl">{integration.logo}</span>
                    </div>
                    <p className="text-sm font-medium">{integration.name}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">
                  View All Integrations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <p className="text-sm text-muted-foreground">Faster Onboarding</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Reduce onboarding time from weeks to days
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">HR Efficiency Gain</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Free HR staff for strategic initiatives
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Global Support</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Privacy-first AI agents powered by Ocean Protocol available globally 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience how AgentForceHR's privacy-first approach using Ocean Protocol can transform 
                your employee onboarding while protecting sensitive data. Try our demo or start your free trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Start Privacy-First Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline-primary" size="xl">
                  View Privacy Demo
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

export default Features;