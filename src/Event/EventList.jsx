import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const dummyEvents = [
  { id: 1, title: 'Opening Ceremony', time: '09:00', duration: '30', handler: 'John Smith', status: 'done', noteTitle: '', noteUrl: '' },
  { id: 2, title: 'Keynote Speech', time: '09:30', duration: '45', handler: 'Sarah Johnson', status: 'current', noteTitle: 'Welcome Notes', noteUrl: 'https://example.com/notes' },
  { id: 3, title: 'Workshop Session', time: '10:15', duration: '60', handler: 'Alex Rodriguez', status: 'upcoming', noteTitle: '', noteUrl: '' },
];

export default function EventList() {
  const [events, setEvents] = useState(dummyEvents);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  const handleUpdate = (id) => {
    navigate(`/organizer/events/update/${id}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'done':
        return 'bg-green-100 text-green-800';
      case 'current':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Schedule</h3>
      
      {events.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No events scheduled yet. Add your first event!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-800">{event.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{event.time} • {event.duration} min • {event.handler}</p>
                  {event.noteTitle && (
                    <p className="mt-1">
                      <span className="font-medium">Note:</span> {event.noteTitle}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(event.id)}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}