import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  HiDocumentText,
  HiDocument,
  HiPresentationChartBar,
  HiDownload,
  HiChevronDown 
} from 'react-icons/hi';


const FileIcon = ({ type }) => {
  const iconClass = "w-6 h-6 text-blue-600";
  
  switch(type) {
    case 'pdf':
      return <HiDocument className={iconClass} />;
    case 'ppt':
      return <HiPresentationChartBar className={iconClass} />;
    default:
      return <HiDocumentText className={iconClass} />;
  }
};

export default function NotesSection({ notes }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!notes?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8 border-t border-gray-200 pb-5 pt-6"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center group"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold text-gray-900">Event Materials</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {notes.length} files
          </span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-600 group-hover:text-blue-600"
        >
          <HiChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-3"
          >
            {notes.map((note, index) => (
              <motion.div
                key={note.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <FileIcon type={note.type} />
                  <div>
                    <h3 className="font-medium text-gray-900">{note.name}</h3>
                    <p className="text-sm text-gray-500 uppercase">{note.type}</p>
                  </div>
                </div>

                <a
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <HiDownload className="w-5 h-5" />
                  View
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}