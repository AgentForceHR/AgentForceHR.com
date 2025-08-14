import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Terms and Conditions</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                      By accessing and using AgentForceHR ("the Service"), you accept and agree to be bound 
                      by the terms and provision of this agreement. If you do not agree to abide by the above, 
                      please do not use this service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
                    <p className="text-muted-foreground mb-4">
                      AgentForceHR provides blockchain-powered AI agents for employee onboarding and HR automation. 
                      Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>AI agent creation and management tools</li>
                      <li>Employee onboarding automation</li>
                      <li>HR token-based payment system</li>
                      <li>Analytics and reporting features</li>
                      <li>Integration with existing HR systems</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                    <p className="text-muted-foreground mb-4">
                      To access certain features of the Service, you must create an account:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>You are responsible for maintaining the confidentiality of your account</li>
                      <li>You agree to provide accurate and complete information</li>
                      <li>You are responsible for all activities under your account</li>
                      <li>You must notify us immediately of any unauthorized use</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">4. HR Token Usage</h2>
                    <p className="text-muted-foreground mb-4">
                      HR Tokens (HRT) are utility tokens used to access premium features:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Tokens are required for AI agent creation and advanced features</li>
                      <li>Token transactions are recorded on the blockchain and are irreversible</li>
                      <li>Token values may fluctuate based on market conditions</li>
                      <li>Unused tokens remain in your account and do not expire</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
                    <p className="text-muted-foreground mb-4">
                      You agree not to use the Service to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Transmit harmful or malicious content</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Use the service for any illegal or unauthorized purpose</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                    <p className="text-muted-foreground">
                      The Service and its original content, features, and functionality are and will remain 
                      the exclusive property of AgentForceHR and its licensors. The Service is protected by 
                      copyright, trademark, and other laws.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                      In no event shall AgentForceHR, nor its directors, employees, partners, agents, 
                      suppliers, or affiliates, be liable for any indirect, incidental, special, 
                      consequential, or punitive damages, including without limitation, loss of profits, 
                      data, use, goodwill, or other intangible losses.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                    <p className="text-muted-foreground">
                      We may terminate or suspend your account and bar access to the Service immediately, 
                      without prior notice or liability, under our sole discretion, for any reason whatsoever 
                      and without limitation, including but not limited to a breach of the Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                    <p className="text-muted-foreground">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                      If a revision is material, we will provide at least 30 days notice prior to any new terms 
                      taking effect.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                    <p className="text-muted-foreground">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                      <p className="font-medium">AgentForceHR Legal Team</p>
                      <p className="text-muted-foreground">Email: legal@agentforcehr.com</p>
                      <p className="text-muted-foreground">Address: 123 Innovation Drive, Tech City, TC 12345</p>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;