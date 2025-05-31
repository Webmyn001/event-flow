import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HiUser, HiMail, HiPhone, HiSelector, HiUserGroup,
  HiIdentification, HiCheckCircle, HiUserAdd, HiCalendar,
  HiLocationMarker
} from 'react-icons/hi';
import confetti from 'canvas-confetti';

export default function WelcomeAndRegistration() {
  const navigate = useNavigate();
  
  // Organizer data states
  const [organizerData, setOrganizerData] = useState(null);
  const [loadingOrganizer, setLoadingOrganizer] = useState(true);
  
  // Registration states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    gender: '',
    phoneNumber: '',
    role: ''
  });

  // Fetch organizer data directly from API
  useEffect(() => {
    const fetchOrganizerData = async () => {
      try {
        setLoadingOrganizer(true);
        const response = await axios.get('http://localhost:5000/api/organizer');
        if (response.data.length > 0) {
          setOrganizerData(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching organizer data:', error);
      } finally {
        setLoadingOrganizer(false);
      }
    };

    fetchOrganizerData();
  }, []);

  // Handle registration submission
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    try {
      // Submit registration form
      await axios.post('http://localhost:5000/api/form', formData);
      
      // Show success state and trigger confetti
      setIsSuccess(true);
      triggerConfetti();
      
      // Redirect after 5.5 seconds
      setTimeout(() => {
        navigate('/schedule');
      }, 5500);
      
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  // Trigger confetti animation
  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
    
    // Additional confetti bursts
    setTimeout(() => confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    }), 1000);
    
    setTimeout(() => confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    }), 2000);
  };

  // Get event name with fallback
  const getEventName = () => {
    if (loadingOrganizer) return 'Global Tech Summit';
    return organizerData?.name || 'Global Tech Summit';
  };

  // Get event year with fallback
  const getEventYear = () => {
    if (loadingOrganizer) return '2025';
    return organizerData?.date 
      ? new Date(organizerData.date).getFullYear() 
      : '2025';
  };
console.log(organizerData)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4"
    >
      <div className="max-w-md mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getEventName()}
            <span className="block text-2xl text-blue-600 mt-2">
              {organizerData.date}
            </span>
          </h1>
        
          {organizerData?.location && (
            <p className="text-gray-500 mt-2">
              {organizerData.location}
            </p>
          )}
        </motion.div>

        {/* Content Section */}
        {isSuccess ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-center space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6"
          >
            <div className="inline-block p-4 bg-green-50 rounded-full">
              <HiCheckCircle className="w-16 h-16 text-green-600" />
            </div>
            
            {/* Single personalized welcome message */}
            <h3 className="text-2xl font-bold text-gray-900">
              Welcome, {formData.fullName}!
            </h3>
            
            <p className="text-gray-600 text-lg font-medium">
              Your registration is complete. We're excited to have you at {getEventName()}!
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                  <HiCalendar className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                Taking you to the event schedule in a moment...
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <HiUserAdd className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Event Registration
              </h2>
            </div>
            
            {/* Registration Form */}
            <motion.form
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                {/* Full Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="john@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    />
                  </div>
                </motion.div>

                {/* Phone Number Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="09164028709"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                  </div>
                </motion.div>

                {/* Gender Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                    Gender
                  </label>
                  <div className="relative">
                    <HiIdentification className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <HiSelector className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      required
                      className="w-full appearance-none pl-10 pr-10 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </motion.div>

                {/* Role Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
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
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Complete Registration
              </motion.button>
            </motion.form>
          </motion.div>
        )}

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-100/40 rounded-full"
              style={{
                width: Math.random() * 80 + 40 + 'px',
                height: Math.random() * 80 + 40 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.4,
                scale: 1,
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: Math.random() * 5
                }
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}