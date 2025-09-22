import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#" },
    { name: "Team", href: "#" },
    { name: "Alumni", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-testid="logo">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg">
                Google Developer Groups
              </span>
              <div className="text-sm text-muted-foreground">RBU Chapter</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button data-testid="button-join-header">Join Us</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="w-full mt-4" 
                data-testid="button-join-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}