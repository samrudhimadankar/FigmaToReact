import { useEffect, useState } from "react";

interface StatisticProps {
  value: string;
  label: string;
  color: string;
  delay?: number;
}

function StatisticCard({ value, label, color, delay = 0 }: StatisticProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate the number counting up
      const numericValue = parseInt(value.replace(/\D/g, ""));
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCurrentValue(numericValue);
          clearInterval(counter);
        } else {
          setCurrentValue(Math.floor(start));
        }
      }, 16);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Circular Progress Ring */}
      <div className="relative w-32 h-32 md:w-36 md:h-36">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Background circle */}
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
          {/* Progress circle */}
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${isVisible ? "85, 100" : "0, 100"}`}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out"
            style={{ transitionDelay: `${delay}ms` }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold" style={{ color }}>
            {currentValue > 0 ? `${currentValue}${value.includes('+') ? '+' : ''}` : value}
          </span>
        </div>
      </div>

      {/* Label */}
      <div className="text-center">
        <span className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function StatisticsSection() {
  const statistics = [
    { value: "03+", label: "Years", color: "#16a34a" }, // Green
    { value: "10+", label: "Events", color: "#dc2626" }, // Red  
    { value: "1000+", label: "Community Members", color: "#2563eb" }, // Blue
    { value: "200+", label: "Attendees", color: "#ea580c" }, // Orange
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              color={stat.color}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}