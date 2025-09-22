import { MapPin, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section - Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">
                  Google Developer Groups
                </div>
                <div className="text-muted-foreground">On Campus • Ramdeo Baba University</div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Building a community of developers passionate about Google technologies, 
              fostering innovation and collaboration among students.
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Follow Us:</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover-elevate transition-all duration-300"
                  data-testid="link-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover-elevate transition-all duration-300"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover-elevate transition-all duration-300"
                  data-testid="link-twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Shri Ramdeobaba College of Engineering and Management,<br />
                    Ramdeo Tekdi, Gittikhadan Katol Road Nagpur - 440013
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a 
                    href="mailto:dsc.rknec@gmail.com" 
                    className="text-primary hover:underline"
                    data-testid="link-email"
                  >
                    dsc.rknec@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Google Developer Groups RBU Chapter. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-3/5 -z-10 rounded-t-3xl"></div>
      </div>
    </footer>
  );
}