import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch events from API
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete an event
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`http://localhost:5000/api/events/${id}`);
        // Optimistically update UI
        setEvents(events.filter(event => event._id !== id));
      } catch (error) {
        console.error('Error deleting event:', error);
        alert(`Failed to delete event: ${error.response?.data?.message || error.message}`);
      }
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

  // Safe status formatting
  const formatStatus = (status) => {
    if (!status) return 'Unknown';
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Schedule</h3>
      
      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading events...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8 bg-red-50 rounded-lg">
          <p className="text-red-500">Error: {error}</p>
          <button 
            onClick={fetchEvents}
            className="mt-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Retry
          </button>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No events scheduled yet. Add your first event!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <motion.div
              key={event._id || event.id}  // Handle both _id and id
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-800">
                    {event.title || 'Untitled Event'}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                    {formatStatus(event.status)}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>
                    {event.time || 'No time'} • 
                    {event.duration ? ` ${event.duration} min` : ' Duration not set'} • 
                    {event.handler || 'No handler'}
                  </p>
                  {event.noteTitle && (
                    <p className="mt-1">
                      <span className="font-medium">Note:</span> {event.noteTitle}
                    </p>
                  )}
                  {event.noteUrl && (
                    <p className="mt-1">
                      <a 
                        href={event.noteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Notes
                      </a>
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(event._id || event.id)}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event._id || event.id)}
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