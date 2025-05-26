import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiUser, HiIdentification, HiSelector, HiUserGroup } from 'react-icons/hi';

export default function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    lastName: '',
    initials: '',
    gender: '',
    role: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serialNumber = Math.floor(Math.random() * 100) + 1;
    onSubmit(serialNumber);
  };

  const inputAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Event Registration</h2>
          <p className="text-gray-500">Join us for an amazing experience</p>
        </motion.div>

        <div className="space-y-5">
          {/* Last Name Field */}
          <motion.div {...inputAnimation}>
            <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
              Last Name
            </label>
            <div className="relative">
              <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Robert"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </motion.div>

          {/* Initials Field */}
          <motion.div {...inputAnimation} transition={{ delay: 0.1 }}>
            <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
              Initials
            </label>
            <div className="relative">
              <HiIdentification className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 uppercase rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                value={formData.initials}
                onChange={(e) => setFormData({ ...formData, initials: e.target.value })}
                maxLength="3"
                placeholder="O.S"
              />
            </div>
          </motion.div>

          {/* Gender Dropdown */}
          <motion.div {...inputAnimation} transition={{ delay: 0.2 }}>
            <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
              Gender
            </label>
            <div className="relative">
              <HiSelector className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                required
                className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </motion.div>

          {/* Role Dropdown */}
          <motion.div {...inputAnimation} transition={{ delay: 0.3 }}>
            <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
              Role
            </label>
            <div className="relative">
              <HiUserGroup className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <HiSelector className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                required
                className="w-full appearance-none pl-10 pr-10 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="">Select Role</option>
                <option value="organizer">Organizer</option>
                <option value="audience">Audience</option>
                <option value="guest lecturer">Guest Lecturer/Speaker</option>
              </select>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Complete Registration
        </motion.button>
      </div>
    </motion.form>
  );
}