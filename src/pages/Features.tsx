import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Download, Zap, Shield, Clock, Heart, Globe, Video, Music, Image, FileText, Smartphone, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Downloads",
      description: "Advanced technology ensures maximum download speeds. Get your videos in seconds, not minutes.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Secure & Safe",
      description: "No malware, no viruses, no hidden costs. Your privacy and security are our top priorities.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Platform Support",
      description: "Download from YouTube, Instagram, Facebook, TikTok, Twitter, and 50+ other platforms.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "High Quality Videos",
      description: "Choose from multiple quality options including HD, Full HD, and even 4K when available.",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Audio Extraction",
      description: "Extract audio from videos and save as MP3, AAC, or other popular audio formats.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Batch Downloads",
      description: "Queue multiple videos and download them all at once. Save time and effort.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Easy to Use",
      description: "Simple interface designed for everyone",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Works on Android, iOS, Windows, Mac, Linux",
    },
    {
      icon: <Sliders className="w-6 h-6" />,
      title: "Format Conversion",
      description: "Convert videos to different formats",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Thumbnail Extraction",
      description: "Save video thumbnails separately",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Subtitle Downloads",
      description: "Download subtitles with your videos",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "No Registration",
      description: "Start downloading immediately",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="text-gradient"> Effortless Downloads</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to download and manage your favorite videos from any platform
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mainFeatures.map((feature, i) => (
              <Card key={i} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">And More...</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Copy URL", desc: "Copy the video URL from any supported platform" },
                { step: "2", title: "Paste Link", desc: "Paste the URL into our downloader" },
                { step: "3", title: "Choose Quality", desc: "Select your preferred video quality" },
                { step: "4", title: "Download", desc: "Click download and enjoy your video" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Card className="p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience It?</h2>
              <p className="text-muted-foreground mb-8">
                Join millions of satisfied users and start downloading today
              </p>
              <Link to="/download">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
