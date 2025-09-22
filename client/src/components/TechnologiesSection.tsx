import { Card, CardContent } from "@/components/ui/card";

interface TechnologyCardProps {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

function TechnologyCard({ name, icon, color, bgColor }: TechnologyCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardContent className="p-8 text-center space-y-4">
        <div 
          className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: bgColor }}
        >
          <span className="text-4xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
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
      bgColor: "#e8f5e8",
    },
    {
      name: "Flutter",
      icon: "🎯", 
      color: "#02569B",
      bgColor: "#e3f2fd",
    },
    {
      name: "Cloud",
      icon: "☁️",
      color: "#4285F4", 
      bgColor: "#e3f2fd",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}