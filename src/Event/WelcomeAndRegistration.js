import axios from 'axios';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HiUser, HiMail, HiPhone, HiSelector, 
  HiIdentification, HiCheckCircle, HiUserAdd, HiCalendar,
  HiLocationMarker, HiLockClosed, HiAcademicCap, HiOfficeBuilding
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
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    gender: '',
    phoneNumber: '',
    level: '',
    department: ''
  });
  
  // Loading states
  const [signupLoading, setSignupLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  // Fetch organizer data directly from API
  useEffect(() => {
    const fetchOrganizerData = async () => {
      try {
        setLoadingOrganizer(true);
        const response = await axios.get('https://eventflow-five.vercel.app/api/organizer');
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

  // Handle registration (signup) submission
  const handleSignup = async (e) => {
    if (e) e.preventDefault();
    
    try {
      setSignupLoading(true);
      // Submit registration form to signup endpoint
      await axios.post('https://eventflow-five.vercel.app/api/form/signup', formData);
      
      // Show success state and trigger confetti
      setIsSuccess(true);
      triggerConfetti();
      
      // After 5.5 seconds, switch to login mode with prefilled email
      setTimeout(() => {
        setLoginEmail(formData.emailAddress);
        setIsLoginMode(true);
        setIsSuccess(false);
        setSignupLoading(false);
      }, 5500);
      
    } catch (error) {
      setSignupLoading(false);
      alert('Registration failed. Please try again.');
      console.error('Registration error:', error);
    }
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoginLoading(true);
      setLoginError('');
      // Submit to login endpoint
      const response = await axios.post('https://eventflow-five.vercel.app/api/form/login', {
        emailAddress: loginEmail
      });
      
      // Check if login was successful
      if (response.data.Login) {
        // Store user info in localStorage
        localStorage.setItem('user', JSON.stringify({
          emailAddress: loginEmail,
          name: response.data.user?.fullName || 'Attendee'
        }));
        
        // Navigate to schedule
        navigate('/schedule');
      } else {
        setLoginError(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoginLoading(false);
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

  // Format date to readable string
  const formatDate = (dateString) => {
    if (!dateString) return 'Date not set';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return 'Invalid Date';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-6"
    >
      <div className="max-w-md mx-auto">
        {/* Animated Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 text-center space-y-4"
        >
          {loadingOrganizer ? (
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500">Loading event details...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-4">
              {/* Logo - Only shown if exists in organizerData */}
              {organizerData?.logoUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <img 
                    src={organizerData.logoUrl} 
                    alt={`${organizerData.name || 'Event'} logo`}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-xl shadow-lg border border-gray-200 bg-white p-2"
                  />
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {getEventName()}
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-2"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3 text-gray-700 mt-5"
              >
                {organizerData?.location && (
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <HiLocationMarker className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-sm">{organizerData.location}</span>
                  </div>
                )}
                {organizerData?.date && (
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <HiCalendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-sm">
                      {formatDate(organizerData.date)}
                    </span>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Content Section */}
        {isSuccess ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-center space-y-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <div className="inline-block p-4 bg-green-50 rounded-full">
              <HiCheckCircle className="w-16 h-16 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900">
              Welcome, {formData.fullName}!
            </h3>
            
            <p className="text-gray-600 text-lg font-medium">
              Your registration is complete. We're excited to have you at {getEventName()}!
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                  <HiLockClosed className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                Taking you to the login page to access the event...
              </p>
            </div>
          </motion.div>
        ) : isLoginMode ? (
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg">
                <HiLockClosed className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Participant Login
              </h2>
            </div>
            
            {/* Login Form */}
            <motion.form
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              onSubmit={handleLogin}
              className="space-y-6"
            >
              {loginError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center"
                >
                  {loginError}
                </motion.div>
              )}
              
              <div className="space-y-5">
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <HiMail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="john@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      disabled={loginLoading}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: loginLoading ? 1 : 1.02 }}
                whileTap={{ scale: loginLoading ? 1 : 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                disabled={loginLoading}
              >
                {loginLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : 'Login'}
              </motion.button>
              
              <div className="text-center mt-4 pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => {
                    setIsLoginMode(false);
                    setLoginError('');
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  disabled={loginLoading}
                >
                  Don't have an account? <span className="font-semibold">Register here</span>
                </button>
              </div>
            </motion.form>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg">
                <HiUserAdd className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Event Registration
              </h2>
            </div>
            
            {/* Registration Form */}
            <motion.form
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              onSubmit={handleSignup}
            >
              <div className="space-y-5">
                {/* Personal Info Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider pl-1">
                    Personal Information
                  </h3>
                  
                  {/* Full Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <HiUser className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        disabled={signupLoading}
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <HiMail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="john@example.com"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        disabled={signupLoading}
                      />
                    </div>
                  </motion.div>

                  {/* Phone Number Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <HiPhone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="09164028709"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        disabled={signupLoading}
                      />
                    </div>
                  </motion.div>

                  {/* Gender Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                      Gender
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <HiIdentification className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <HiSelector className="w-5 h-5 text-gray-400" />
                      </div>
                      <select
                        required
                        className="w-full appearance-none pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        disabled={signupLoading}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </motion.div>
                </div>

                {/* Academic Info Section */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider pl-1">
                    Academic Information
                  </h3>
                  
                  {/* Level Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                      Level
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <HiAcademicCap className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="Part 2"
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        disabled={signupLoading}
                      />
                    </div>
                  </motion.div>

                  {/* Department Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                      Department
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <HiOfficeBuilding className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="Soil Science"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        disabled={signupLoading}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: signupLoading ? 1 : 1.02 }}
                whileTap={{ scale: signupLoading ? 1 : 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                disabled={signupLoading}
              >
                {signupLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registering...
                  </>
                ) : 'Complete Registration'}
              </motion.button>
              
              <div className="text-center mt-4 pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => {
                    setIsLoginMode(true);
                    setLoginError('');
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  disabled={signupLoading}
                >
                  Already registered? <span className="font-semibold">Login here</span>
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}

        {/* Decorative Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-100/30 rounded-full"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
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