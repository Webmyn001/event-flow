import { motion } from 'framer-motion';
import { HiLightningBolt } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-white shadowl-lg to-[#f8f8f8]"
    >
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
          <div className="text-sm">
            © {currentYear} Tech Conference. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Powered by</span>
            <a 
              href="https://yourcompany.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <HiLightningBolt className="w-4 h-4" />
              <span className="font-medium">EventFlow</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}