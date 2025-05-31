import { motion } from 'framer-motion';
import { HiDocumentText } from 'react-icons/hi';

const statusColors = {
  done: 'bg-green-50 border-green-300',
  current: 'bg-blue-50 border-blue-400',
  upcoming: 'bg-purple-50 border-purple-300'
};

const statusLabels = {
  done: 'Completed',
  current: 'Happening Now',
  upcoming: 'Up Next'
};

export default function EventItem({ event, isCurrent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-xl border-l-4 ${statusColors[event.status]} shadow-sm`}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-2 flex-1">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            event.status === 'done' ? 'bg-green-100 text-green-700' :
            event.status === 'current' ? 'bg-blue-100 text-blue-700' :
            'bg-purple-100 text-purple-700'
          }`}>
            {statusLabels[event.status]}
          </span>
          
          <h3 className="text-xl font-semibold text-gray-900">
            {event.name}
          </h3>

           <h3 className="text-[14px] font-semibold text-gray-900">
            Handler: {event.handler}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event.time}</span>
            <span className="mx-1">•</span>
            <span>{event.duration}</span>
          </div>
          
          {event.noteUrl && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              <HiDocumentText className="flex-shrink-0 w-4 h-4" />
              <a 
                href={event.noteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium truncate hover:underline"
                title={event.noteTitle}
              >
                {event.noteTitle}
              </a>
            </motion.div>
          )}
        </div>

        {event.status === 'done' && (
          <svg className="w-6 h-6 text-green-500 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </motion.div>
  );
}