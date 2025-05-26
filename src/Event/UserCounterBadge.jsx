import { motion } from 'framer-motion';

export default function UserCounterBadge({ number, total, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`px-4 py-2 rounded-full flex items-center gap-2 ${className}`}
    >
      <span className="font-semibold text-sm">Attendees</span>
      <div className="flex items-center gap-1">
        <span className="text-blue-600 font-bold text-lg">{number}</span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-600">{total}</span>
      </div>
    </motion.div>
  );
}