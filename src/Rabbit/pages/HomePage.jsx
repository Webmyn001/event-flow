import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Services from '../components/home/Services';
import FAQ from '../components/home/FAQ';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Hero />
      <Benefits />
      <Services />
      <FAQ />
      
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              Ready to Start Your Rabbitry Journey?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join our classroom to learn professional rabbit rearing techniques from experts
            </p>
            <a 
              href="/login" 
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Access Classroom
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;