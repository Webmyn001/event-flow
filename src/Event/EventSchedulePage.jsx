import { motion } from 'framer-motion';
import Header from './Header';
import EventItem from './EventItem';
import NotesSection from './NotesSection';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';
import Footer from './Footer';

const dummyEvents = [
  { 
    id: 1, 
    name: 'Registration & Breakfast', 
    time: '08:00', 
    duration: '1 hr', 
    status: 'done' 
  },
  { 
    id: 2, 
    name: 'Opening Ceremony', 
    time: '09:00', 
    duration: '30 mins', 
    status: 'done' 
  },
  { 
    id: 3, 
    name: 'Keynote Speech: Future of Tech', 
    time: '09:30', 
    duration: '45 mins', 
    status: 'current',
    notes: [
      {
        name: 'Keynote Presentation Deck',
        type: 'ppt',
        url: '/materials/keynote.pptx'
      },
      {
        name: 'Speaker Talking Points',
        type: 'doc',
        url: '/materials/talking-points.docx'
      },
      {
        name: 'Reference PDF',
        type: 'pdf',
        url: '/materials/references.pdf'
      }
    ]
  },
  { 
    id: 4, 
    name: 'Coffee Break', 
    time: '10:15', 
    duration: '15 mins', 
    status: 'upcoming' 
  },
  { 
    id: 5, 
    name: 'Workshop: AI Development', 
    time: '10:30', 
    duration: '1.5 hrs', 
    status: 'upcoming',
    notes: [
      {
        name: 'Workshop Handbook',
        type: 'pdf',
        url: '/materials/ai-workshop.pdf'
      },
      {
        name: 'Code Examples',
        type: 'zip',
        url: '/materials/code-examples.zip'
      }
    ]
  },
  { 
    id: 6, 
    name: 'Lunch Break', 
    time: '12:00', 
    duration: '1 hr', 
    status: 'upcoming' 
  },
  { 
    id: 7, 
    name: 'Panel Discussion: Ethics in Tech', 
    time: '13:00', 
    duration: '1 hr', 
    status: 'upcoming',
    notes: [
      {
        name: 'Discussion Guidelines',
        type: 'doc',
        url: '/materials/ethics-guide.docx'
      }
    ]
  },
  { 
    id: 8, 
    name: 'Closing Remarks', 
    time: '14:00', 
    duration: '30 mins', 
    status: 'upcoming' 
  },
];

export default function EventSchedulePage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen bg-[#f8f8f8]"
  >
    <Header userNumber={25} totalAttendees={100} />
    
    <div className="max-w-2xl mx-auto p-4">
      {/* Main Event Title Section */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center space-y-4"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Global Tech Summit 2024
        </h1>
        
        

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 text-gray-600 mt-4"
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <HiLocationMarker className="w-5 h-5 text-purple-600" />
            <span className="font-medium">San Francisco Convention Center</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <HiCalendar className="w-5 h-5 text-blue-600" />
            <span className="font-medium">October 15-16, 2024</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-bold text-gray-600 uppercase tracking-wide"
        >
          Event Schedule
        </motion.p>
      </motion.div>

        {/* Events List */}
        <div className="space-y-4">
          {dummyEvents.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              isCurrent={event.status === 'current'}
            />
          ))}
        </div>

        <NotesSection notes={dummyEvents.find(e => e.status === 'current')?.notes} />
      </div>


    </motion.div>
      

  );
}