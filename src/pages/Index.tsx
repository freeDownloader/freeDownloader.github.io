import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Shield, Zap, Clock, Heart, CheckCircle2, Sparkles, Globe, Smartphone, Monitor, ArrowRight, Video, Music, Image as ImageIcon, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Download your favorite videos in seconds with our optimized engine",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Safe",
      description: "Trusted by millions. No malware, no hidden costs, completely secure",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Available",
      description: "Download anytime, anywhere. Works round the clock for you",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Easy to Use",
      description: "Simple interface designed for everyone. Just paste and download",
    },
  ];

  const stats = [
    { value: "10M+", label: "Downloads" },
    { value: "4.8", label: "Rating" },
    { value: "500K+", label: "Active Users" },
    { value: "Free", label: "Forever" },
  ];

  const platforms = [
    "YouTube", "Instagram", "Facebook", "TikTok", "Twitter", "Vimeo", "Dailymotion", "More"
  ];

  const howItWorks = [
    { step: "1", title: "Copy Video URL", description: "Find the video you want and copy its link" },
    { step: "2", title: "Paste Link", description: "Paste the URL into our downloader" },
    { step: "3", title: "Choose Quality", description: "Select your preferred video quality" },
    { step: "4", title: "Download", description: "Click download and save to your device" },
  ];

  const videoQualities = [
    { quality: "4K Ultra HD", resolution: "3840x2160", icon: <Monitor className="w-6 h-6" /> },
    { quality: "Full HD", resolution: "1920x1080", icon: <Monitor className="w-6 h-6" /> },
    { quality: "HD", resolution: "1280x720", icon: <Smartphone className="w-6 h-6" /> },
    { quality: "SD", resolution: "640x480", icon: <Smartphone className="w-6 h-6" /> },
  ];

  const supportedFormats = [
    { icon: <Video className="w-8 h-8" />, name: "Video", formats: "MP4, AVI, MKV, MOV" },
    { icon: <Music className="w-8 h-8" />, name: "Audio", formats: "MP3, WAV, AAC, M4A" },
    { icon: <ImageIcon className="w-8 h-8" />, name: "Images", formats: "JPG, PNG, GIF, WEBP" },
    { icon: <FileText className="w-8 h-8" />, name: "Documents", formats: "PDF, DOC, TXT" },
  ];

  const testimonials = [
    { name: "Sarah M.", rating: 5, text: "Best downloader I've ever used! Super fast and easy to use." },
    { name: "John D.", rating: 5, text: "Downloaded hundreds of videos without any issues. Highly recommend!" },
    { name: "Maria G.", rating: 5, text: "The quality options are amazing. Love that it's completely free!" },
  ];

  const faqs = [
    { 
      question: "Is AppDownloader really free?", 
      answer: "Yes! AppDownloader is 100% free to use. There are no hidden fees, subscriptions, or premium tiers. All features are available to everyone at no cost." 
    },
    { 
      question: "Do I need to create an account?", 
      answer: "No account needed! Simply paste your video URL and start downloading immediately. We believe in keeping things simple and hassle-free." 
    },
    { 
      question: "What video quality can I download?", 
      answer: "We support all available qualities from the source platform, including 4K, Full HD, HD, and SD. The available qualities depend on what the original video offers." 
    },
    { 
      question: "Is it safe to use?", 
      answer: "Absolutely! We don't store any videos or user data. Our service is completely secure, with no malware, viruses, or unwanted software. Your privacy and security are our top priorities." 
    },
    { 
      question: "Can I download videos on mobile?", 
      answer: "Yes! Our downloader works perfectly on all devices including smartphones, tablets, and computers. Download your favorite content anywhere, anytime." 
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="gradient-primary text-white border-0">
                <Star className="w-3 h-3 mr-1 fill-white" />
                Rated 4.8/5 by users
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Download Videos from
                <span className="text-gradient"> Any Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Fast, free, and easy video downloader. Save your favorite content from social media in just a few clicks. No registration required.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/download">
                  <Button size="lg" className="gradient-primary text-white hover:opacity-90">
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur">
                <div className="aspect-square rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <Download className="w-32 h-32 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-sm">All video formats supported</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-sm">High quality downloads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-sm">No watermarks</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the best video downloading experience with powerful features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Platforms</h2>
            <p className="text-muted-foreground">
              Download from all major social media and video platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, i) => (
              <Badge key={i} variant="secondary" className="px-6 py-2 text-base">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="w-3 h-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download your favorite videos in just 4 easy steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative">
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
                {i < howItWorks.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary w-6 h-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Quality Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Video Qualities Supported</h2>
            <p className="text-muted-foreground">
              Download in any quality from 4K to SD - you choose what works best for you
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {videoQualities.map((quality, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mx-auto mb-4">
                  {quality.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{quality.quality}</h3>
                <p className="text-sm text-muted-foreground">{quality.resolution}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Format Support</h2>
            <p className="text-muted-foreground">
              Download and convert to your preferred format
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {supportedFormats.map((format, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="text-primary mb-4 flex justify-center">
                  {format.icon}
                </div>
                <h3 className="font-semibold mb-2">{format.name}</h3>
                <p className="text-sm text-muted-foreground">{format.formats}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground">
              Join millions of satisfied users worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about our downloader
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative">
          <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Downloading?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of users who trust our platform for their video downloading needs
            </p>
            <Link to="/download">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90">
                <Download className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
