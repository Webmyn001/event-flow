import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactOwner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center relative">
      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 text-emerald-600 hover:text-emerald-800 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">Contact Toheeb Rabbitry</h2>
      <p className="mb-4 text-gray-700">
        For access to the classroom, please contact the farm owner directly with your details
      </p>
      
      <div className="bg-emerald-50 p-4 rounded-md text-emerald-700 border border-emerald-200 space-y-3">
        <div>
          <p className="font-semibold">Phone/WhatsApp:</p>
          <p className="mt-1">09064631703</p>
          <p>09134407680</p>
        </div>
        
        <div className="pt-2">
          <p className="font-semibold">Farm Address:</p>
          <p className="text-sm mt-1">
            No.3 Anwo Lane, Ajadi Community, Ologuneru, Ibadan
          </p>
        </div>
      </div>
      
      <p className="mt-6 text-sm text-gray-500">
        Please mention you're contacting about classroom access when you call
      </p>
    </div>
  </motion.div>
);

export default ContactOwner;