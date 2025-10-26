import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Star, CheckCircle2, Smartphone, Monitor } from "lucide-react";

const DownloadPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Download className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Download <span className="text-gradient">AppDownloader</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Fast, free, and secure video downloader for all platforms
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <Badge variant="secondary" className="gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  4.8 Rating
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Download className="w-3 h-3" />
                  10M+ Downloads
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Shield className="w-3 h-3" />
                  100% Safe
                </Badge>
              </div>
            </div>

            {/* Download Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="text-center space-y-4">
                  <Smartphone className="w-16 h-16 mx-auto text-primary" />
                  <h3 className="text-2xl font-bold">Android</h3>
                  <p className="text-muted-foreground">
                    Compatible with Android 5.0 and above
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Version: 1.1.6</p>
                    <p>Size: 24.61 MB</p>
                    <p>Updated: May 2024</p>
                  </div>
                  <Button className="w-full gradient-primary text-white hover:opacity-90">
                    <Download className="w-4 h-4 mr-2" />
                    Download APK
                  </Button>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="text-center space-y-4">
                  <Monitor className="w-16 h-16 mx-auto text-primary" />
                  <h3 className="text-2xl font-bold">Desktop</h3>
                  <p className="text-muted-foreground">
                    Available for Windows, Mac, and Linux
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Version: 2.0.3</p>
                    <p>Size: 52.4 MB</p>
                    <p>Updated: May 2024</p>
                  </div>
                  <Button className="w-full gradient-primary text-white hover:opacity-90">
                    <Download className="w-4 h-4 mr-2" />
                    Download Installer
                  </Button>
                </div>
              </Card>
            </div>

            {/* Features */}
            <Card className="p-8 bg-muted/30">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Download from 50+ platforms",
                  "High-quality video downloads",
                  "Multiple format support",
                  "Batch download capability",
                  "No watermarks",
                  "Free forever",
                  "Regular updates",
                  "24/7 customer support",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Installation Guide */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Installation Guide</h3>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Download the installer</h4>
                      <p className="text-sm text-muted-foreground">
                        Click the download button above to get the installer for your platform
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Run the installer</h4>
                      <p className="text-sm text-muted-foreground">
                        Open the downloaded file and follow the on-screen instructions
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Start downloading</h4>
                      <p className="text-sm text-muted-foreground">
                        Launch the app and start downloading your favorite videos instantly
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadPage;
