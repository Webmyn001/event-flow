import { FiArrowLeft, FiMail, FiPhone, FiUser, FiStar, FiAlertCircle, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ContactSeller = () => {
  const [seller] = useState({
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+234 812 345 6789",
    emergencyContact: "+234 809 876 5432",
    profilePic: "",
    status: "online",
    whatsapp:"09893",
    rating: 4.9,
    itemsSold: 42,
    memberSince: 2022
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <Link
            to="/listing/1"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FiArrowLeft className="text-lg" />
            <span className="font-medium">Back to Listing</span>
          </Link>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100"
        >
          {/* Profile Header */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 ring-4 ring-white shadow-lg" />
              <div className="absolute bottom-2 right-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  seller.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`}>
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <FiCheckCircle className="text-white w-4 h-4 relative" />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-1">{seller.name}</h2>
            <div className="flex items-center gap-2 text-amber-500">
              <FiStar className="w-5 h-5" />
              <span className="font-medium">{seller.rating} ({seller.itemsSold} sales)</span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Primary Phone</p>
                <a href={`tel:${seller.phone}`} className="text-lg font-medium text-gray-900">
                  {seller.phone}
                </a>
              </div>
            </div>


             {/* WhatsApp */}
             <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="p-3 bg-green-600 text-white rounded-xl">
                <FiMessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <a 
                  href={`https://wa.me/${seller.whatsapp.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-900"
                >
                  {seller.whatsapp}
                </a>
              </div>
            </div>


            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
              <div className="p-3 bg-purple-600 text-white rounded-xl">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <a href={`mailto:${seller.email}`} className="text-lg font-medium text-gray-900">
                  {seller.email}
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
              <div className="p-3 bg-red-600 text-white rounded-xl">
                <FiAlertCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Emergency Contact</p>
                <a href={`tel:${seller.emergencyContact}`} className="text-lg font-medium text-gray-900">
                  {seller.emergencyContact}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-8"
        >
          <a
            href={`tel:${seller.phone}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-colors shadow-lg"
          >
            <FiPhone className="w-6 h-6" />
            Call Seller Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSeller;