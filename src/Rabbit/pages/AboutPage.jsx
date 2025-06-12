import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            About Toheeb Rabbitry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Dedicated to excellence in rabbit production and sustainable farming practices.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Toheeb Rabbitry started as a small family farm with a passion for 
                sustainable agriculture and healthy food production. Over the years, we have grown 
                into a leading rabbitry in the region, known for our high-quality rabbits and 
                commitment to excellence.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with just a few breeding pairs and a vision to provide communities 
                with a healthy, sustainable source of protein. Today, we serve hundreds of customers 
                and train aspiring rabbit farmers across Nigeria.
              </p>
              <p className="text-gray-600">
                At Toheeb Rabbitry, we believe in ethical farming practices, animal welfare, and 
                environmental sustainability. These principles guide everything we do.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"
            >
              {/* Placeholder for image */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-emerald-800"
            >
              Our Mission & Vision
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-emerald-600 text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, nutritious rabbit products while promoting sustainable 
                farming practices. We aim to empower communities through education and training, 
                creating opportunities for economic growth and food security.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-emerald-600 text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading rabbitry in West Africa, setting the standard for excellence 
                in rabbit production, processing, and farmer education. We envision a future where 
                rabbit farming is a cornerstone of sustainable agriculture and nutrition in Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-emerald-800"
            >
              Our Team
            </motion.h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals behind Toheeb Rabbitry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: item * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
              >
                <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-800">Team Member {item}</h3>
                  <p className="text-gray-600 mt-1">Position/Role</p>
                  <p className="mt-4 text-gray-600">
                    Brief description of team member and their role at Toheeb Rabbitry.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;