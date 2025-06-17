
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Download, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  Menu, 
  X,
  Unlock,
  Plug,
  Play
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "how-it-works", "pricing", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openPricing = () => {
    window.open("#pricing", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Unlock className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold gradient-text">iCloudFree</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "how-it-works", label: "How It Works" },
                { id: "pricing", label: "Pricing" },
                { id: "faq", label: "FAQ" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.id ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {[
                { id: "home", label: "Home" },
                { id: "how-it-works", label: "How It Works" },
                { id: "pricing", label: "Pricing" },
                { id: "faq", label: "FAQ" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              Trusted by 50,000+ Users Worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bypass iCloud Activation Lock{" "}
              <span className="gradient-text">Instantly</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional-grade unlocking tool that removes iCloud activation locks safely and efficiently. 
              Compatible with all iOS devices and versions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Tool
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openPricing}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
              >
                View Pricing
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">100% Safe</h3>
                <p className="text-gray-400">No data loss or device damage</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Unlock in under 5 minutes</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Guaranteed</h3>
                <p className="text-gray-400">Money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple 3-step process to unlock your device
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect text-center p-8 hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plug className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">1. Connect Device</h3>
                <p className="text-gray-300">
                  Connect your locked iOS device to your computer using a USB cable
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center p-8 hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">2. Run Tool</h3>
                <p className="text-gray-300">
                  Launch our unlocking software and follow the simple instructions
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center p-8 hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">3. Unlock Complete</h3>
                <p className="text-gray-300">
                  Your device is now unlocked and ready to use with any carrier
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compatible Devices Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compatible Devices</h2>
            <p className="text-xl text-gray-300">
              Works with all iOS devices and versions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max",
              "iPhone 14 Pro", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro",
              "iPhone 13", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12",
              "iPad Pro", "iPad Air", "iPad Mini", "Apple Watch"
            ].map((device) => (
              <div key={device} className="glass-effect p-4 rounded-lg text-center hover:scale-105 transition-transform">
                <Smartphone className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm font-medium">{device}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              iOS 17.x - iOS 11.x Supported
            </Badge>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300">
              Thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                comment: "Worked perfectly! My iPhone 13 was unlocked in just 3 minutes. Incredible service and super easy to use."
              },
              {
                name: "Mike Chen",
                location: "Toronto, Canada",
                rating: 5,
                comment: "I was skeptical at first, but this tool actually works. Saved me hundreds of dollars compared to other services."
              },
              {
                name: "Emma Rodriguez",
                location: "London, UK",
                rating: 5,
                comment: "Fast, reliable, and safe. My iPad Pro is now working perfectly with my new carrier. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-effect p-6 hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-300">
              One-time payment, lifetime access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect p-8 hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
                <div className="text-4xl font-bold mb-6">
                  $29.99
                  <span className="text-lg text-gray-400 font-normal">/one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Unlock up to 3 devices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    All iOS versions supported
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect p-8 hover:scale-105 transition-transform border-purple-500/50">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Most Popular
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                <div className="text-4xl font-bold mb-6">
                  $49.99
                  <span className="text-lg text-gray-400 font-normal">/one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Unlimited device unlocks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    All iOS versions supported
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Advanced features
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800">
                  Get Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is this tool safe to use?",
                answer: "Yes, our tool is completely safe and won't damage your device or cause data loss. We use advanced techniques that preserve your device's integrity."
              },
              {
                question: "How long does the unlocking process take?",
                answer: "Most devices are unlocked within 5 minutes. The exact time depends on your device model and iOS version."
              },
              {
                question: "What if the tool doesn't work for my device?",
                answer: "We offer a 100% money-back guarantee. If our tool can't unlock your device, you'll receive a full refund within 24 hours."
              },
              {
                question: "Do I need technical knowledge to use this tool?",
                answer: "No technical knowledge required! Our tool features a simple, user-friendly interface that guides you through each step."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/50 to-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unlock Your Device?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have successfully unlocked their devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={openPricing}
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Have questions? Our support team is here to help you 24/7.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              Email: <span className="text-purple-400">support@icloudfree.com</span>
            </p>
            <p className="text-lg">
              Live Chat: Available 24/7 on our website
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Unlock className="h-6 w-6 text-purple-400" />
            <span className="text-lg font-bold gradient-text">iCloudFree</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 iCloudFree. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
