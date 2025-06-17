
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Smartphone, 
  ArrowLeft,
  CheckCircle,
  Unlock
} from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();

  const devices = [
    { name: "iPhone 15 Pro Max", price: 230 },
    { name: "iPhone 15 Pro Max [No Signal]", price: 110 },
    { name: "iPhone 15 Pro", price: 220 },
    { name: "iPhone 15 Pro [No Signal]", price: 100 },
    { name: "iPhone 15 Plus", price: 200 },
    { name: "iPhone 15 Plus [No Signal]", price: 90 },
    { name: "iPhone 15", price: 180 },
    { name: "iPhone 15 [No Signal]", price: 85 },
    { name: "iPhone 14 Pro Max", price: 200 },
    { name: "iPhone 14 Pro Max [No Signal]", price: 90 },
    { name: "iPhone 14 Pro", price: 190 },
    { name: "iPhone 14 Pro [No Signal]", price: 85 },
    { name: "iPhone 14 Plus", price: 175 },
    { name: "iPhone 14 Plus [No Signal]", price: 80 },
    { name: "iPhone 14", price: 170 },
    { name: "iPhone 13 Pro Max", price: 180 },
    { name: "iPhone 13 Pro", price: 160 },
    { name: "iPhone 13", price: 150 },
    { name: "iPhone 13 Mini", price: 110 },
    { name: "iPhone SE 3rd Gen", price: 90 },
    { name: "iPhone SE 2nd Gen", price: 80 },
    { name: "iPhone 12 Pro Max", price: 140 },
    { name: "iPhone 12 Pro", price: 130 },
    { name: "iPhone 12", price: 115 },
    { name: "iPhone 12 Mini", price: 90 }
  ];

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
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Pricing Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              Professional Unlock Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Device Unlock <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional iCloud activation lock removal for all iPhone models. 
              One-time payment with instant processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {devices.map((device, index) => (
              <Card key={index} className="glass-effect p-6 hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Smartphone className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{device.name}</h3>
                    <div className="text-3xl font-bold text-purple-400 mb-4">
                      ${device.price}
                    </div>
                    <ul className="space-y-2 mb-6 text-sm text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Instant processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        100% safe removal
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Money-back guarantee
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Select Device
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="glass-effect p-8 max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Complete iCloud removal
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    All iOS versions supported
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    24/7 customer support
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Step-by-step guidance
                  </div>
                </div>
              </CardContent>
            </Card>
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

export default Pricing;
