import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiArrowRight } from 'react-icons/fi';

const ReportButton = ({ description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
    >
      <Link
        to="/report"
        state={{ initialDescription: description }}
        className="relative block bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl p-0.5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-100"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-full group-hover:inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500" />
        </div>

        <div className="relative bg-gradient-to-br from-red-600 to-orange-600 rounded-[11px] px-6 py-4">
          <div className="flex items-center gap-3">
            <FiAlertCircle className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold">Report Suspicious Activity</h3>
              <p className="text-[14px] opacity-90 mt-1 max-w-md">
                {description || "Help protect others by reporting potential scams"}
              </p>
            </div>
            <FiArrowRight className="ml-auto w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ReportButton
// Usage example:
// <ReportButton description="Found suspicious activity in recent transaction?" />