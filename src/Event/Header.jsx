import { motion } from 'framer-motion';
import UserCounterBadge from './UserCounterBadge';

export default function Header({ userNumber, totalAttendees }) {
  return (
    <header className="bg-gradient-to-r from-white to-[#f8f8f8] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="bg-gray-100/30 p-2 rounded-lg backdrop-blur-sm">
              <img 
                src="/logo.png" 
                alt="Event Logo" 
                className="h-8 sm:h-10 transition-all duration-300 hover:scale-105" 
              />
            </div>
      
          </motion.div>

          {/* User Counter */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <UserCounterBadge 
              number={userNumber} 
              total={totalAttendees} 
              className="bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/60 transition-colors text-gray-800"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}