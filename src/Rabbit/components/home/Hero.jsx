import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-emerald-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-800/20 to-emerald-900/80"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Premium Rabbitry Products & Training
              </h1>
              <p className="mt-6 text-xl text-emerald-100 max-w-3xl">
                Your trusted source for high-quality live rabbits, fresh meat, breeding stock, and professional rabbit farming training.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#services"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
                >
                  Explore Our Products
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/login"
                  className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg"
                >
                  Access Training
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="bg-emerald-600 rounded-full w-80 h-80 flex items-center justify-center">
                  <div className="bg-emerald-500 rounded-full w-64 h-64 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-white text-emerald-800 py-2 px-6 rounded-full shadow-lg"
                >
                  <span className="font-bold">100%</span> Natural
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-4 -right-4 bg-amber-500 text-white py-2 px-6 rounded-full shadow-lg"
                >
                  <span className="font-bold">Premium</span> Quality
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;