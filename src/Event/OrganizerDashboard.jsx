import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticipantsTable from './ParticipantsTable';
import EventManagement from './EventManagement';

export default function OrganizerDashboard() {
  const [activeTab, setActiveTab] = useState('participants');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <h1 className="text-2xl font-bold text-gray-800">Event Organizer Dashboard</h1>
          </div>
          
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('participants')}
            className={`px-4 py-2 font-medium text-lg ${
              activeTab === 'participants'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Participants
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 font-medium text-lg ${
              activeTab === 'events'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Event Management
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {activeTab === 'participants' ? <ParticipantsTable /> : <EventManagement />}
        </motion.div>
      </div>
    </motion.div>
  );
}