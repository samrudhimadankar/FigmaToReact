import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  color?: string;
}

function FAQItem({ question, answer, isOpen, onToggle, color = "hsl(var(--primary))" }: FAQItemProps) {
  return (
    <Card className="hover-elevate transition-all duration-300">
      <CardContent className="p-0">
        <button
          onClick={onToggle}
          className="w-full p-6 text-left flex items-center justify-between hover-elevate"
          data-testid={`faq-question-${question.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <h3 className="text-lg font-semibold pr-4">{question}</h3>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          )}
        </button>
        
        {isOpen && (
          <div className="px-6 pb-6">
            <div 
              className="w-1 h-full absolute left-6 top-0 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
            <div className="pl-6 border-l-2" style={{ borderColor: color }}>
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "What is GDG?",
      answer: "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
      color: "hsl(var(--chart-1))",
    },
    {
      question: "How can you become a part of GDG ?",
      answer: "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It is free to join and doesn't require any prior experience as our team will teach you everything from the ground up.",
      color: "hsl(var(--chart-2))",
    },
    {
      question: "What does a GDG Lead do?",
      answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
      color: "hsl(var(--chart-3))",
    },
    {
      question: "How is DSC related to Google?",
      answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
      color: "hsl(var(--chart-4))",
    },
    {
      question: "How to reach us?",
      answer: 'Mail us at "dsc.rknec@gmail.com"',
      color: "hsl(var(--chart-5))",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            FAQs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frequently asked questions about Google Developer Groups
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              color={faq.color}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Have more questions?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-elevate transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}