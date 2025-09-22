import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code, Lightbulb } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                <span className="text-primary">Google</span>{" "}
                <span className="text-foreground">Developer Groups</span>
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2">
                  RBU Chapter
                </div>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Google Developer Groups are community groups for college and university students interested in Google developer technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 h-auto"
                data-testid="button-join-hero"
              >
                JOIN US
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 h-auto"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8 items-center">
                  {/* Illustration Elements */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="text-sm font-medium">Community</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-chart-2 rounded-xl flex items-center justify-center">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">Development</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-chart-3 rounded-xl flex items-center justify-center">
                        <Lightbulb className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">Innovation</div>
                    </div>
                  </div>

                  {/* Character Illustrations */}
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-chart-1 to-chart-2 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👩‍💻</span>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-chart-3 to-chart-4 rounded-full flex items-center justify-center ml-4">
                      <span className="text-xl">👨‍💻</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-chart-4 to-chart-5 rounded-full flex items-center justify-center">
                      <span className="text-lg">🧑‍💻</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-chart-1 rounded-lg animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-chart-3 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-chart-2 rounded-sm animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}