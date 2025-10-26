import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Mail } from "lucide-react";

const DMCA = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold">DMCA Policy</h1>
          </div>

          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Copyright Notice</h2>
              <p className="text-muted-foreground leading-relaxed">
                AppDownloader respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to claims of copyright infringement committed using our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Notice of Infringement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are a copyright owner, or authorized to act on behalf of one, please report alleged copyright infringements by providing our DMCA Agent with the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>A physical or electronic signature of the copyright owner or authorized person</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing</li>
                <li>Your contact information (address, telephone number, and email)</li>
                <li>A statement that you have a good faith belief that use of the material is not authorized</li>
                <li>A statement that the information in the notification is accurate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Counter-Notification</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you believe that your content was removed by mistake or misidentification, you may file a counter-notification with our DMCA Agent. Your counter-notification must include substantially the same information as listed above for infringement notices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Repeat Infringers</h2>
              <p className="text-muted-foreground leading-relaxed">
                In accordance with the DMCA and other applicable law, we have adopted a policy of terminating, in appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Important Notice</h2>
              <p className="text-muted-foreground leading-relaxed">
                AppDownloader is a tool that allows users to download publicly available content. We do not host, store, or distribute any content. We merely provide a technical service that enables users to access content that is already publicly available on third-party platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact DMCA Agent</h2>
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-2">DMCA Agent Contact:</p>
                    <p className="text-muted-foreground">Email: dmca@appdownloader.com</p>
                    <p className="text-muted-foreground">Subject Line: DMCA Takedown Request</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to respond to all valid DMCA notices within 48-72 hours. Please allow sufficient time for us to investigate and respond to your claim.
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

export default DMCA;
