import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Target, Heart } from "lucide-react";

export default function KeepsUsGoingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            What Keeps Us Going?
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and more importantly leadership qualities are skills that can make you unstoppable! With that we believe in community-driven learning. Take part and lead to make yourself equipped and create impact.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and to broaden the approach towards technology.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-chart-3">
                🎯 SDDH
              </h3>
              <p className="text-muted-foreground">
                Skills Development & Diversity Hub - Our commitment to fostering inclusive growth and innovation.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Card className="bg-gradient-to-br from-chart-3/10 to-chart-4/10 border-chart-3/20">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Team Building */}
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-chart-1 rounded-2xl flex items-center justify-center mx-auto">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm font-medium">Team Building</p>
                    </div>

                    {/* Innovation */}
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-chart-2 rounded-2xl flex items-center justify-center mx-auto">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm font-medium">Innovation</p>
                    </div>

                    {/* Leadership */}
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-chart-3 rounded-2xl flex items-center justify-center mx-auto">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm font-medium">Leadership</p>
                    </div>

                    {/* Community */}
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-chart-4 rounded-2xl flex items-center justify-center mx-auto">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm font-medium">Community</p>
                    </div>
                  </div>

                  {/* Central connecting element */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-chart-3 rounded-xl rotate-12 animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-chart-1 rounded-lg -rotate-12 animate-pulse delay-700"></div>
              <div className="absolute top-1/2 -left-8 w-3 h-3 bg-chart-2 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 -right-6 w-5 h-5 bg-chart-4 rounded-sm rotate-45 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}