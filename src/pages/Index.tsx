import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChatDemo } from "@/components/chat-demo";
import { FeatureCard } from "@/components/feature-card";
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-ai-automation.png";
import featureDocuments from "@/assets/feature-documents.jpg";
import featureScheduling from "@/assets/feature-scheduling.jpg";
import featureTraining from "@/assets/feature-training.jpg";
import { ArrowRight, Bot, CircleCheck as CheckCircle2, FileCheck, Divide as LucideIcon, Users, Zap, Shield, Eye } from "lucide-react";

// Benefits icons
const benefitsIcons: Record<string, LucideIcon> = {
  speed: Zap,
  accuracy: CheckCircle2,
  personalization: Users,
  automation: Bot,
};

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 px-4 mt-16 bg-gradient-subtle relative overflow-hidden">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Privacy-First Employee Onboarding with AI Agents{" "}
                
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                AgentForceHR creates the world's first privacy-first HR AI protocol using Ocean Protocol's Compute-to-Data technology. Our AI agents process sensitive employee data without ever accessing raw files, ensuring GDPR and HIPAA compliance while delivering intelligent onboarding automation. Pay with HR tokens on BSC to build secure, compliant agents that protect employee privacy by design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline-primary" size="xl" asChild>
                  <Link to="/demo">Check the Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Futuristic digital brain formed by glowing blue neural network nodes, AI technology, blockchain integration, abstract data streams"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 rounded-full filter blur-3xl"></div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 px-4 bg-background">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Privacy-Conscious HR Teams Choose AgentForceHR
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our privacy-first platform combines Ocean Protocol's data protection with BSC blockchain efficiency, enabling HR professionals to create intelligent onboarding experiences that never compromise employee data privacy.
            </p>
          </div>
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(benefitsIcons).map(([key, Icon], index) => (
              <div
                key={key}
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2 capitalize">{key}</h3>
                <p className="text-muted-foreground">
                  {key === "speed" && "Reduce onboarding time by up to 60% with automated processes and instant responses."}
                  {key === "accuracy" && "Ensure consistent and accurate information delivery while maintaining complete data privacy through Ocean Protocol's C2D technology."}
                  {key === "personalization" && "Tailor the onboarding experience based on role, department, and experience level."}
                  {key === "automation" && "Automate repetitive tasks with privacy-preserving AI that processes sensitive data without exposure, allowing HR teams to focus on high-value activities."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="w-full py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Privacy-First AI in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience how our Ocean Protocol-powered AI agents deliver intelligent responses while keeping all employee data completely private and secure
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Privacy-Protected Employee Support
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">24/7 Private Support:</span> AI agents analyze encrypted policy documents via Ocean Protocol to provide instant answers without accessing raw employee data.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Privacy-Preserving Analytics:</span> Generate insights from employee data using Ocean's Compute-to-Data without exposing sensitive information.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Compliant Processing:</span> GDPR and HIPAA compliant data handling through Ocean Protocol's privacy-preserving infrastructure.
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience privacy-first AI that answers questions without compromising data security →
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/demo">Check the Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <ChatDemo />
              </div>
            </div>
          </div>
        </section>

        {/* HR Token Section */}
        <section className="w-full py-20 px-4 bg-background" id="hr-token">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              HR Token - Your Gateway to Privacy-First AI Agents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purchase HR tokens on Binance Smart Chain to create and deploy privacy-preserving AI agents powered by Ocean Protocol's secure data processing
            </p>
          </div>
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-lg p-8 border shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Bot size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">HR Token Benefits</h3>
                <p className="text-muted-foreground">
                  Privacy-first AI agents deployed on BSC with Ocean Protocol data protection for secure, compliant HR automation
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Privacy-First Agent Creation</p>
                      <p className="text-sm text-muted-foreground">Create AI agents that process sensitive data without exposure using Ocean Protocol</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Ocean Protocol Privacy</p>
                      <p className="text-sm text-muted-foreground">Compute-to-Data technology ensures employee data never leaves secure environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Low Transaction Fees</p>
                      <p className="text-sm text-muted-foreground">Ultra-low BSC transaction fees (~$0.01)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Privacy-Preserving AI</p>
                      <p className="text-sm text-muted-foreground">Ocean Protocol C2D enables AI analysis without raw data access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Token Balance Management</p>
                      <p className="text-sm text-muted-foreground">Real-time BSC balance tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Scalable Solution</p>
                      <p className="text-sm text-muted-foreground">BSC scalability for unlimited agents</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="hero" size="xl" className="group">
                  Create Privacy-First AI Agents
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Purchase HR tokens on BSC to build Ocean Protocol-powered AI agents that protect employee privacy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 px-4 bg-background">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform offers everything you need to create effective onboarding experiences.
            </p>
          </div>
          <div className="container mx-auto grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={featureDocuments}
              title="Document Processing"
              description="Automate paperwork collection and verification with intelligent document processing and digital signatures."
              gradient
            />
            <FeatureCard
              icon={featureScheduling}
              title="Smart Scheduling"
              description="Automatically schedule orientation sessions, training, and one-on-ones with team members and managers."
              gradient
            />
            <FeatureCard
              icon={featureTraining}
              title="Knowledge Transfer"
              description="Create custom training paths that adapt to each employee's role, experience, and learning pace."
              gradient
            />
          </div>
        </section>


        {/* ROI Section */}
        <section className="w-full py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Measurable Return on Investment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AgentForceHR delivers quantifiable business impact with demonstrable ROI for organizations of all sizes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-8 border shadow-md hover:shadow-lg transition-all">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <h3 className="text-xl font-medium mb-3">Reduced Onboarding Time</h3>
                <p className="text-muted-foreground">
                  Streamline the entire onboarding workflow with intelligent automation, reducing total time from weeks to days.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border shadow-md hover:shadow-lg transition-all">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <h3 className="text-xl font-medium mb-3">HR Staff Efficiency</h3>
                <p className="text-muted-foreground">
                  Free your HR professionals from repetitive tasks, allowing them to focus on strategic initiatives and employee engagement.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border shadow-md hover:shadow-lg transition-all">
                <div className="text-3xl font-bold text-primary mb-2">42%</div>
                <h3 className="text-xl font-medium mb-3">Lower Training Costs</h3>
                <p className="text-muted-foreground">
                  Reduce training expenses through consistent, personalized and accessible AI-driven knowledge transfer solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <section className="w-full py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Privacy-First Enterprise Solutions for Modern HR Teams
                </h2>
                <p className="text-lg text-muted-foreground">
                  Customize and scale your onboarding processes with Ocean Protocol-powered AI agents that process sensitive employee data without exposure, ensuring complete privacy while integrating seamlessly with your existing HR systems.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <FileCheck size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Privacy-by-Design Architecture</p>
                      <p className="text-sm text-muted-foreground">Ocean Protocol's Compute-to-Data ensures AI agents never access raw employee data, providing ultimate privacy protection with blockchain verification.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <FileCheck size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Privacy-Preserving Integration</p>
                      <p className="text-sm text-muted-foreground">Connect with HRIS, ATS, LMS systems while maintaining data privacy through Ocean Protocol's secure compute infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <FileCheck size={14} />
                    </div>
                    <div>
                      <p className="font-medium">Dedicated Success Manager</p>
                      <p className="text-sm text-muted-foreground">Enterprise clients receive personalized implementation and ongoing optimization support.</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline-primary" size="lg" className="mt-4">
                  Learn About Enterprise Solutions
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border">
                <div className="bg-card rounded-lg p-6 border shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Case Study: Global Financial Firm</h3>
                  <p className="text-muted-foreground mb-4">
                    "AgentForceHR's privacy-first approach using Ocean Protocol was game-changing for our compliance requirements. We reduced onboarding costs by 38% while improving satisfaction scores by 47%, all while ensuring sensitive employee data never left our secure environment."
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">VP of Global Human Resources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Compliance Section */}
        <section className="w-full py-20 px-4 bg-muted/30">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy-First Compliance & Security by Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Ocean Protocol-powered platform ensures regulatory compliance through privacy-by-design architecture, where AI agents process sensitive data without ever accessing raw files
            </p>
          </div>
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FileCheck size={16} />
                  </span>
                  Privacy-First Compliance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">GDPR Compliant:</span> Ocean Protocol C2D ensures data never leaves secure environments, exceeding GDPR requirements.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">HIPAA Ready:</span> Medical record processing through Ocean's privacy-preserving compute infrastructure.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Zero-Knowledge Processing:</span> AI agents generate insights without accessing sensitive employee information.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FileCheck size={16} />
                  </span>
                  Ocean Protocol Privacy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Compute-to-Data:</span> AI processes encrypted data in secure environments without raw file access.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Data Tokenization:</span> Employee records tokenized as ERC721 NFTs with granular access control.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Immutable Audit Trails:</span> All data access logged on blockchain for complete compliance transparency.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Privacy & Technology FAQ
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about AgentForceHR's privacy-first approach and Ocean Protocol integration
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl font-bold">
                  How does Ocean Protocol protect employee data privacy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AgentForceHR uses Ocean Protocol's Compute-to-Data (C2D) technology to create a privacy-first HR AI protocol. Employee data is tokenized as ERC721 NFTs and stored in secure environments. Our AI agents run computations on encrypted data without ever accessing raw files - they receive only anonymized results. This means sensitive information like SSNs, medical records, or performance reviews never leave their secure environment, ensuring complete privacy while enabling intelligent AI insights.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl font-bold">
                  How do HR tokens work with privacy-preserving AI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  HR tokens are BSC-based utility tokens that power our privacy-first platform. Each token enables creation of AI agents that use Ocean Protocol's secure compute infrastructure. When you create an agent, tokens are used to deploy privacy-preserving algorithms that can analyze your HR data without exposure. The BSC blockchain ensures transparent, low-cost transactions while Ocean Protocol guarantees data privacy throughout the AI processing lifecycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl font-bold">
                  What makes this different from traditional HR AI solutions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Traditional HR AI solutions require uploading sensitive data to external servers, creating privacy risks. AgentForceHR's privacy-first protocol using Ocean Protocol means your employee data never leaves your secure environment. AI agents perform computations on encrypted data through Ocean's C2D technology, returning only anonymized insights. This approach provides superior AI capabilities while maintaining complete data sovereignty and regulatory compliance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl font-bold">
                  How does privacy-preserving integration work with existing HR systems?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our privacy-first integration approach uses Ocean Protocol to connect with existing HR systems without compromising data security. We deploy secure provider nodes within your infrastructure that tokenize data from HRIS, ATS, and LMS systems. AI agents then access this tokenized data through Ocean's C2D mechanism, enabling intelligent processing while keeping raw employee data in your controlled environment. This ensures seamless integration with enhanced privacy protection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-xl font-bold">
                  How does the privacy-first architecture ensure compliance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our privacy-first architecture using Ocean Protocol exceeds traditional compliance requirements. Employee data is tokenized and remains in your secure environment, with AI agents accessing only computed results through C2D technology. This approach provides GDPR Article 25 "privacy by design" compliance, HIPAA-ready medical record processing, and immutable audit trails on BSC blockchain. The system generates compliance reports automatically, showing exactly what computations were performed without exposing underlying data.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Privacy-First HR AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join privacy-conscious organizations using Ocean Protocol-powered AI to improve employee satisfaction and reduce onboarding time by 60% without compromising data security.
            </p>
            <Button variant="hero" size="xl" className="group">
              Start Privacy-First Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* For Investors Section */}
        <section className="w-full py-20 px-4 bg-background border-t">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy-First Platform for Investors & Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience our complete privacy-first platform with Ocean Protocol integration, including secure agent creation and HR token management
            </p>
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/investor-demo">
                <Eye className="w-5 h-5 mr-2" />
                Access Privacy-First Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Experience privacy-preserving AI agents, HR token management, and Ocean Protocol integration in a secure demo environment
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
