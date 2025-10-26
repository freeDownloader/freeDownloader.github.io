import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-12">Last updated: May 2024</p>

            <Card className="p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  At AppDownloader, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Usage Data</h3>
                    <p>
                      We may collect information about how you access and use our service, including your device type, operating system, browser type, and usage patterns.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Download Information</h3>
                    <p>
                      We collect information about the videos you download, including URLs and file formats, to improve our service and provide you with a better experience.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  The security of your data is important to us. We use industry-standard security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used. These third parties have access to your information only to perform these tasks on our behalf.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@appdownloader.com
                </p>
              </section>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
