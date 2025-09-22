import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  color?: string;
}

function FAQItem({ question, answer, isOpen, onToggle, color = "#3b82f6" }: FAQItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 md:px-6 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-2xl transition-colors"
        data-testid={`faq-question-${question.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="px-4 pb-4 md:px-6 md:pb-6">
              <div className="pl-4 md:pl-5 border-l-4 rounded-bl-xl" style={{ borderColor: color }}>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
      color: "#3b82f6",
    },
    {
      question: "How can you become a part of GDG ?",
      answer: "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It is free to join and doesn't require any prior experience as our team will teach you everything from the ground up.",
      color: "#10b981",
    },
    {
      question: "What does a GDG Lead do?",
      answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
      color: "#f59e0b",
    },
    {
      question: "How is DSC related to Google?",
      answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
      color: "#f59e0b",
    },
    {
      question: "How to reach us?",
      answer: 'Mail us at "dsc.rknec@gmail.com"',
      color: "#ef4444",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10 md:mb-16" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 md:w-16 bg-neutral-300" />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">FAQs</h2>
            <div className="h-px w-8 md:w-16 bg-neutral-300" />
          </div>
        </motion.div>

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
      </div>
    </section>
  );
}