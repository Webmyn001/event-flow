import React from 'react';
import { motion } from 'framer-motion';

const ContactOwner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">Contact the Farm Owner</h2>
      <p className="mb-4 text-gray-700">
        Sorry, your email was not found. To join the class, please contact the owner with your details.
      </p>
      <div className="bg-emerald-50 p-4 rounded-md text-emerald-700 border border-emerald-200">
        {/* Sample contact details, replace as needed */}
        <p><strong>Email:</strong> farmowner@example.com</p>
        <p><strong>Phone:</strong> +1-234-567-8901</p>
        <p><strong>WhatsApp:</strong> +1-234-567-8901</p>
      </div>
    </div>
  </motion.div>
);

export default ContactOwner;