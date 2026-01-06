'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How is your approach different?",
    answer: "We combine strategic thinking with engineering execution. Many consultancies recommend solutions they can't build; many agencies build without strategy. We do both equally well."
  },
  {
    question: "How long do projects take?",
    answer: "Project timelines vary depending on complexity and scope. Typically, a MVP takes 4-8 weeks, while enterprise-grade solutions may take 3-6 months. We provide a detailed roadmap during our initial sprint."
  },
  {
    question: "Can we hand this off later?",
    answer: "Absolutely. We build with clean, documented code and standard frameworks specifically to make handoffs easy. We also offer training and shadowing periods for your internal team."
  },
  {
    question: "Do you have industry experience?",
    answer: "Yes, we have deep experience across Fintech, Healthcare, Logistics, and Retail. Our cross-functional team brings domain expertise that helps us anticipate compliance and user needs."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer flexible engagement models including Time & Material for ongoing evolution, Fixed Price for well-defined scopes, and Dedicated Teams for long-term partnership."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-0 divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left group focus:outline-none"
              >
                <span className="text-xl md:text-2xl font-medium text-black pr-8">
                  {faq.question}
                </span>
                <span className="relative flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-lg text-black leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
