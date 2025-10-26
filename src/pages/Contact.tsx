import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">support@appdownloader.com</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mx-auto mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mx-auto mb-4">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-sm text-muted-foreground">Find answers instantly</p>
              </Card>
            </div>

            <Card className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more..." 
                    rows={6}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="mt-12">
              <Card className="p-8 bg-muted/30">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Is AppDownloader really free?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! AppDownloader is completely free to use with no hidden costs or subscriptions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Is it safe to use?</h4>
                    <p className="text-sm text-muted-foreground">
                      Absolutely. We prioritize your security and privacy. Our app is regularly scanned and contains no malware.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Which platforms are supported?</h4>
                    <p className="text-sm text-muted-foreground">
                      We support 50+ platforms including YouTube, Instagram, Facebook, TikTok, Twitter, and many more.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
