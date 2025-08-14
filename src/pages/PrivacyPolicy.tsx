import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Privacy Matters</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                    <p className="text-muted-foreground mb-4">
                      We collect information you provide directly to us, such as when you create an account, 
                      use our services, or contact us for support.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Account information (name, email, company details)</li>
                      <li>Profile information (department, role, preferences)</li>
                      <li>Usage data (interactions with AI agents, onboarding progress)</li>
                      <li>Communication data (chat messages, support requests)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect to provide, maintain, and improve our services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>To provide and personalize our AI onboarding services</li>
                      <li>To communicate with you about your account and our services</li>
                      <li>To improve our AI models and platform functionality</li>
                      <li>To ensure security and prevent fraud</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                    <p className="text-muted-foreground mb-4">
                      We implement industry-standard security measures to protect your information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>End-to-end encryption for all data transmission</li>
                      <li>Blockchain verification for immutable record-keeping</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>SOC 2 Type II compliance</li>
                      <li>GDPR and other regulatory compliance</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
                    <p className="text-muted-foreground mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties, 
                      except in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>With your explicit consent</li>
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and prevent fraud</li>
                      <li>With trusted service providers under strict confidentiality agreements</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                    <p className="text-muted-foreground mb-4">
                      You have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Access and review your personal data</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Delete your account and associated data</li>
                      <li>Export your data in a portable format</li>
                      <li>Opt-out of certain communications</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
                    <p className="text-muted-foreground">
                      We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                      and improve our services. You can control cookie settings through your browser preferences.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                    <p className="text-muted-foreground">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                      <p className="font-medium">AgentForceHR Privacy Team</p>
                      <p className="text-muted-foreground">Email: privacy@agentforcehr.com</p>
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

export default PrivacyPolicy;