// src/components/EventItem.jsx
import { motion } from 'framer-motion';
import { HiDocumentText } from 'react-icons/hi';

const statusColors = {
  done: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700' },
  current: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
  upcoming: { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-700' }
};

const statusIcons = {
  done: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  current: (
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1]
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-4 h-4 bg-blue-500 rounded-full"
    />
  ),
  upcoming: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

const statusLabels = {
  done: 'Completed',
  current: 'Live Now',
  upcoming: 'Upcoming'
};

export default function EventItem({ event, isCurrent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-xl border-l-4 ${statusColors[event.status].border} ${statusColors[event.status].bg} shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-start gap-3">
        {/* Status indicator */}
        <div className={`mt-0.5 p-2 rounded-full ${statusColors[event.status].bg} ${statusColors[event.status].text}`}>
          {statusIcons[event.status]}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-base font-semibold text-gray-800 truncate">
              {event.name}
            </h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[event.status].text}`}>
              {statusLabels[event.status]}
            </span>
          </div>
          
          {/* Handler */}
          <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-600">
            <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="truncate">{event.handler}</span>
          </div>
          
          {/* Time and duration */}
          <div className="flex flex-wrap gap-3 mt-2 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{event.time}</span>
            </div>
            
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4M8 7h8v4H8V7z" />
              </svg>
              <span>{event.duration}</span>
            </div>
          </div>
          
          {/* Notes link */}
          {event.noteUrl && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3"
            >
              <a 
                href={event.noteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <HiDocumentText className="flex-shrink-0 w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="truncate max-w-[160px] group-hover:underline">
                  {event.noteTitle}
                </span>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}