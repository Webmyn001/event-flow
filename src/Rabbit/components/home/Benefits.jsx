import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Low in Cholesterol",
    description: "Rabbit meat is heart-healthy with significantly lower cholesterol than other meats.",
    icon: "❤️"
  },
  {
    title: "High in Protein",
    description: "Contains more protein per gram than beef, chicken, or pork.",
    icon: "💪"
  },
  {
    title: "Low in Fat",
    description: "Leaner than most meats with only 8% fat content.",
    icon: "⚖️"
  },
  {
    title: "Rich in Nutrients",
    description: "Excellent source of calcium, phosphorus, and essential vitamins.",
    icon: "🌟"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-emerald-800">Benefits of Rabbit Meat</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why rabbit meat is becoming the protein of choice for health-conscious consumers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl h-full flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;