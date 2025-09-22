import { Card, CardContent } from "@/components/ui/card";

interface TechnologyCardProps {
  name: string;
  icon: string;
  color: string;
  description: string;
}

function TechnologyCard({ name, icon, color, description }: TechnologyCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 group">
      <CardContent className="p-6 text-center space-y-4">
        <div 
          className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: color }}
        >
          <span className="text-3xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TechnologiesSection() {
  const technologies = [
    {
      name: "Android",
      icon: "🤖",
      color: "#3DDC84",
      description: "Build amazing mobile experiences with Android development tools and frameworks.",
    },
    {
      name: "Flutter",
      icon: "🎯",
      color: "#02569B",
      description: "Create beautiful, natively compiled applications for mobile, web, and desktop.",
    },
    {
      name: "Cloud",
      icon: "☁️",
      color: "#4285F4",
      description: "Scale your applications with Google Cloud Platform's powerful infrastructure.",
    },
  ];

  return (
    <section className="py-16 md:py-24" id="technologies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domains That Excite Us to Collaborate and Teach!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="opacity-0 animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <TechnologyCard {...tech} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to dive into these exciting technologies?
          </p>
          <div className="space-x-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover-elevate transition-all duration-300">
              Explore Projects
            </button>
            <button className="border border-border px-6 py-3 rounded-lg font-medium hover-elevate transition-all duration-300">
              Join a Workshop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}