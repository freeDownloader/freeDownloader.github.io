import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold">Disclaimer</h1>
          </div>

          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">General Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided by AppDownloader on our website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites that are not provided or maintained by us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Usage Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for ensuring they have the right to download and use any content. We do not encourage or condone copyright infringement. Always respect the intellectual property rights of content creators and comply with the terms of service of the platforms from which you download content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide uninterrupted service, we do not guarantee that our service will be available at all times. Technical issues, maintenance, or other factors may cause temporary interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Professional Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The site cannot and does not contain legal advice. The information is provided for general informational and educational purposes only and is not a substitute for professional legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our disclaimer from time to time. We will notify you of any changes by posting the new disclaimer on this page. You are advised to review this disclaimer periodically for any changes.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
