import { Target, Users, Lightbulb, Globe } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24" id="mission">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Get To Know Us */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Get To Know Us!
            </h2>
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Our Mission
              </h3>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
            </p>
          </div>

          {/* Mission Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="w-10 h-10 bg-chart-2 rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="w-10 h-10 bg-chart-3 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-chart-4 rounded-xl flex items-center justify-center">
                      <span className="text-xl">💡</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-chart-2 rounded-sm animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Our Perspective */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Perspective Illustration */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="bg-gradient-to-br from-chart-2/5 to-chart-2/10 rounded-3xl p-8">
                <div className="flex items-center justify-center space-x-4">
                  <div className="space-y-3">
                    <div className="w-14 h-14 bg-chart-2 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div className="w-12 h-12 bg-chart-3 rounded-xl flex items-center justify-center">
                      <span className="text-xl">💻</span>
                    </div>
                  </div>
                  <div className="space-y-3 pt-6">
                    <div className="w-12 h-12 bg-chart-1 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div className="w-14 h-14 bg-chart-4 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🌟</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-chart-1 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-chart-3 rounded-lg animate-pulse delay-500"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Our Perspective
              </h3>
              <div className="w-20 h-1 bg-chart-2 rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a community-driven initiative aiming to bridge the gap between research and practice, develop networking for the upcoming opportunities. We believe in connecting fellow developers, spreading stimulating ideas and working for a solution driven team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}