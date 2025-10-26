import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground mb-12">Last updated: May 2024</p>

            <Card className="p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using AppDownloader, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Use License</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Permission is granted to temporarily download one copy of AppDownloader for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
                  </p>
                  <p>Under this license you may not:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software</li>
                    <li>Remove any copyright or other proprietary notations</li>
                    <li>Transfer the materials to another person</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You agree to use AppDownloader only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Download copyrighted content without proper authorization</li>
                    <li>Use the service in any way that violates applicable laws</li>
                    <li>Attempt to gain unauthorized access to any portion of the service</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Use automated systems to access the service</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on AppDownloader are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall AppDownloader or its suppliers be liable for any damages arising out of the use or inability to use the materials on our service, even if we have been notified of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Copyright Policy</h2>
                <p className="text-muted-foreground">
                  We respect the intellectual property rights of others. Users are responsible for ensuring they have the necessary rights or permissions to download content. We do not condone or encourage copyright infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Service Modifications</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or discontinue the service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at legal@appdownloader.com
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

export default Terms;
