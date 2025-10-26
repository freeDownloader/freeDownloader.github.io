import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">AppDownloader</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Making video downloads simple, fast, and accessible for everyone
              </p>
            </div>

            {/* Story */}
            <Card className="p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AppDownloader was founded with a simple mission: to make video downloading accessible to everyone, regardless of technical expertise. We noticed that people wanted to save their favorite videos, but existing solutions were either complicated, unsafe, or came with hidden costs.
                </p>
                <p>
                  Since our launch, we've grown to serve over 10 million users worldwide. Our commitment to security, speed, and simplicity has made us one of the most trusted video downloaders on the market.
                </p>
                <p>
                  We believe that everyone should have the freedom to enjoy their favorite content offline, and we're proud to provide a tool that makes that possible.
                </p>
              </div>
            </Card>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">User-Focused</h3>
                <p className="text-muted-foreground">
                  Every feature we build is designed with our users in mind. Your feedback drives our development.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly improve our technology to provide the fastest and most reliable downloads.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. From code to customer support, excellence is our standard.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trust & Safety</h3>
                <p className="text-muted-foreground">
                  Your security and privacy are paramount. We maintain the highest standards of data protection.
                </p>
              </Card>
            </div>

            {/* Stats */}
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                  <div className="text-sm text-muted-foreground">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Platforms Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                  <div className="text-sm text-muted-foreground">User Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
