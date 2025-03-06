import React from 'react';
import { motion } from "framer-motion";

function Notfound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 font-sans"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-red-500 text-center">404 Not Found</div>
      <h1 className="mt-4 text-3xl font-bold text-green-500 text-center">Kindly Go Back to Homepage</h1>
    </motion.div>
  );
}

export default Notfound;
