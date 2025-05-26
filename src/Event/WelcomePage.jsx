import { motion, useAnimation } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiCheckCircle, HiUserAdd } from 'react-icons/hi';

export default function WelcomePage() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userNumber, setUserNumber] = useState(null);
  const controls = useAnimation();

  const handleSubmit = (serialNumber) => {
    setUserNumber(serialNumber);
    setIsSubmitted(true);
    setTimeout(() => navigate('/schedule'), 5000);
  };

  useEffect(() => {
    if (isSubmitted) {
      controls.start({
        width: '100%',
        transition: { duration: 5, ease: 'linear' }
      });
    }
  }, [isSubmitted, controls]);

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
            Global Tech Summit
            <span className="block text-2xl text-blue-600 mt-2">2025</span>
          </h1>
          <p className="text-gray-600 font-medium">
            Innovate • Connect • Transform
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          {!isSubmitted ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-8">
                <HiUserAdd className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Event Registration
                </h2>
              </div>
              <RegistrationForm onSubmit={handleSubmit} />
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="inline-block p-4 bg-green-50 rounded-full">
                <HiCheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Registration Successful!
              </h3>
              <p className="text-gray-600 text-lg font-medium">
                You're attendee <span className="text-blue-600">#{userNumber}</span>
              </p>
              <div className="space-y-4">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: '0%' }}
                    animate={controls}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Redirecting to event schedule...
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

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