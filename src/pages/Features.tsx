import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Shield, 
  Zap, 
  Users, 
  MessageSquare, 
  FileText, 
  Calendar, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Coins,
  Brain,
  Clock,
  Globe,
  Lock,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Agents",
      description: "Create intelligent onboarding assistants using advanced AI technology",
      details: [
        "Natural language processing for human-like conversations",
        "Contextual understanding of employee questions",
        "24/7 availability for instant support",
        "Continuous learning from interactions"
      ],
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Secure, transparent, and immutable record-keeping on the blockchain",
      details: [
        "Immutable audit trails for compliance",
        "Decentralized data verification",
        "Smart contract automation",
        "Transparent token transactions"
      ],
      color: "text-green-600"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "HR Token System",
      description: "Pay-per-use token system for creating and managing AI agents",
      details: [
        "Transparent pricing with blockchain tokens",
        "No monthly subscriptions or hidden fees",
        "Scalable cost structure",
        "Token balance management tools"
      ],
      color: "text-purple-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Intelligent Conversations",
      description: "Advanced chat capabilities with context-aware responses",
      details: [
        "Multi-language support",
        "Conversation history tracking",
        "Smart escalation to human HR",
        "Sentiment analysis and feedback"
      ],
      color: "text-orange-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Management",
      description: "Automated document processing and digital workflows",
      details: [
        "Digital signature integration",
        "Automated form completion",
        "Document version control",
        "Compliance tracking"
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
      title: "Role-Based Access",
      description: "Granular permissions and access control for different user types",
      details: [
        "Admin, HR, and employee role separation",
        "Department-specific access controls",
        "Secure data compartmentalization",
        "Audit trail for all actions"
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
              Platform{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the comprehensive features that make AgentForceHR the leading platform 
              for AI-powered employee onboarding and HR automation.
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
                    <li>Google Gemini Integration</li>
                    <li>Natural Language Processing</li>
                    <li>Machine Learning Models</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Sonic Network (BSC Compatible)</li>
                    <li>Smart Contract Automation</li>
                    <li>ERC-20 Token Standard</li>
                    <li>Immutable Record Keeping</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Security</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>End-to-End Encryption</li>
                    <li>SOC 2 Type II Compliance</li>
                    <li>GDPR Compliant</li>
                    <li>Role-Based Access Control</li>
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
                  AI agents available around the clock
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how AgentForceHR can transform your employee onboarding process with 
                our interactive demo or start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline-primary" size="xl">
                  View Demo
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