import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: "How do I start rabbit farming?",
    answer: "Starting rabbit farming requires proper housing, feeding, and breeding stock. We recommend taking our beginner training course to learn the fundamentals."
  },
  {
    question: "What is the best breed for meat production?",
    answer: "New Zealand White and California rabbits are excellent breeds for meat production due to their fast growth rate and good meat-to-bone ratio."
  },
  {
    question: "How much space do rabbits need?",
    answer: "Each rabbit requires at least 2-3 square feet of space in their cage, but more space is always better for their health and well-being."
  },
  {
    question: "What do rabbits eat?",
    answer: "Rabbits primarily eat hay, which should make up about 80% of their diet. They also need fresh vegetables, a small amount of pellets, and constant access to clean water."
  },
  {
    question: "How often do rabbits breed?",
    answer: "Rabbits can breed year-round. A doe (female) can produce 5-6 litters per year, with each litter typically having 4-12 kits (babies)."
  },
  {
    question: "How long does it take for rabbits to mature?",
    answer: "Most meat rabbits reach market weight (4-5 lbs) in about 8-12 weeks, depending on the breed and feeding regimen."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-emerald-800">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about rabbit farming and our products
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 text-left bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                <span className="text-lg font-medium text-emerald-800">{faq.question}</span>
                <HiChevronDown 
                  className={`h-6 w-6 text-emerald-600 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 bg-white">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;