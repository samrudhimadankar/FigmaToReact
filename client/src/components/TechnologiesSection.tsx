import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TechnologyCardProps {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

function TechnologyCard({ name, icon, color, bgColor }: TechnologyCardProps) {
  return (
    <Card className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-2 rounded-t-2xl" style={{ backgroundColor: color }} />
      <CardContent className="p-6 text-center space-y-4">
        <div
          className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: bgColor }}
        >
          <span className="text-4xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
        </div>
        <div className="text-sm text-gray-400">▾</div>
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
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-20 bg-neutral-300" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
              Technologies
            </h2>
            <div className="h-px w-20 bg-neutral-300" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Domains That Excite Us to Collaborate and Teach!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {technologies.map((tech) => (
            <motion.div key={tech.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <TechnologyCard {...tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}