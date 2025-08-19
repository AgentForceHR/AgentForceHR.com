import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Bot, 
  Shield, 
  Zap, 
  Target, 
  Heart,
  Lightbulb,
  Globe,
  Award,
  ArrowRight
} from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AgentForceHR
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing employee onboarding with blockchain-powered AI agents that make 
              the first day experience seamless, engaging, and efficient for both HR teams and new hires.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To transform the employee onboarding experience by leveraging cutting-edge AI technology 
                  and blockchain security, making it more efficient, personalized, and engaging for 
                  organizations worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the global standard for AI-powered HR solutions, where every new employee 
                  receives a personalized, intelligent onboarding experience that sets them up for 
                  long-term success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Story */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">Our Story</CardTitle>
              <CardDescription>How AgentForceHR came to be</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Founded in 2024, AgentForceHR emerged from the recognition that employee onboarding 
                was one of the most critical yet underserved areas in HR technology. Our founding team, 
                with decades of combined experience in HR, AI, and blockchain technology, saw an 
                opportunity to create something truly transformative.
              </p>
              <p className="text-muted-foreground">
                We witnessed firsthand how traditional onboarding processes were often fragmented, 
                time-consuming, and inconsistent. New employees would struggle to find information, 
                HR teams would be overwhelmed with repetitive questions, and companies would lose 
                valuable talent due to poor first impressions.
              </p>
              <p className="text-muted-foreground">
                By combining the power of advanced AI with the security and transparency of blockchain 
                technology, we created a platform that not only solves these problems but reimagines 
                what employee onboarding can be in the digital age.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Employee-Centric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every decision we make prioritizes the employee experience, ensuring new hires 
                    feel welcomed, supported, and empowered from day one.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle>Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe that trust is earned through transparency and security. Our blockchain 
                    infrastructure ensures data integrity and provides audit trails.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We continuously push the boundaries of what's possible in HR technology, 
                    staying ahead of industry trends and emerging technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Leadership Team</CardTitle>
              <CardDescription className="text-center">
                Experienced professionals driving innovation in HR technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center md:col-start-1">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cristian Lantadilla</h3>
                  <p className="text-sm text-primary mb-2">CEO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground">
                    With 10 years of experience in blockchain and AI, Cristian is passionate about leveraging 
                    emerging technologies to solve real-world business challenges and create meaningful workplace improvements.
                  </p>
                </div>

                <div className="text-center md:col-start-3">
                  <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Renato Ortega</h3>
                  <p className="text-sm text-secondary mb-2">Co-Founder & HR Specialist</p>
                  <p className="text-sm text-muted-foreground">
                    With over 8 years in HR and talent development, Renato is dedicated to creating 
                    meaningful employee experiences and fostering inclusive workplace cultures that help people thrive.
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Process?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the hundreds of companies already using AgentForceHR to create better 
                onboarding experiences and improve employee satisfaction.
              </p>
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;