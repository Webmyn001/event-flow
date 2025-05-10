import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">CampusSafe</h3>
            <p className="text-sm leading-relaxed">
              Empowering students with secure campus experiences through verified transactions and community protection.
            </p>
            <div className="flex space-x-4">
              {[FiFacebook, FiTwitter, FiInstagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Products</h4>
            {['Marketplace', 'Verification', 'Security', 'Resources'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ x: 5 }}
                className="block text-sm hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Resources</h4>
            {['Documentation', 'Guides', 'Support', 'Blog'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ x: 5 }}
                className="block text-sm hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Legal</h4>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ x: 5 }}
                className="block text-sm hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Stay Updated</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
            <p className="text-xs text-gray-400">
              We care about your data. Read our{' '}
              <a href="#" className="text-blue-400 hover:underline">privacy policy</a>
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-4">
              <span className="hover:text-white transition-colors cursor-pointer">Status</span>
              <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
              <span className="hover:text-white transition-colors cursor-pointer">Careers</span>
            </div>
            <div className="text-gray-400">
              © {new Date().getFullYear()} CampusSafe. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;