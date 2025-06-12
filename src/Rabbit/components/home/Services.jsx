import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Live Rabbits",
    description: "Healthy, high-quality rabbits for meat production, pets, or breeding purposes.",
    icon: "🐇"
  },
  {
    title: "Fresh Rabbit Meat",
    description: "Fresh, dressed rabbit meat - a lean, healthy protein source for your family.",
    icon: "🍖"
  },
  {
    title: "Breeding Stock",
    description: "Premium breeding rabbits to start or improve your rabbitry operation.",
    icon: "🧬"
  },
  {
    title: "Pet Rabbits",
    description: "Friendly, well-socialized rabbits perfect for family pets.",
    icon: "🏠"
  },
  {
    title: "Training & Consultation",
    description: "Comprehensive training programs for rabbit farming beginners and experts.",
    icon: "🎓"
  },
  {
    title: "Farm Visitation",
    description: "Schedule a visit to our farm to see our operations and best practices.",
    icon: "👀"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-emerald-800">Our Products & Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of rabbitry products and services to meet your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-emerald-50 p-8 rounded-xl h-full flex flex-col items-center text-center hover:bg-emerald-100 transition-colors"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;