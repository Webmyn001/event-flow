import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventItem from './EventItem';
import { HiCalendar, HiLocationMarker, HiDocumentText } from 'react-icons/hi';
import axios from 'axios';

export default function EventSchedulePage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventDetails, setEventDetails] = useState({
    name: '',
    location: '',
    date: '',
    logoUrl: ''
  });
  const [loadingDetails, setLoadingDetails] = useState(true);

  // Check authentication on component mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  // Fetch events from API
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://eventflow-five.vercel.app/api/events');
      
      // Transform API data to match component structure
      const transformedEvents = response.data.map(event => ({
        id: event._id,
        name: event.title,
        time: event.time,
        handler: event.handler,
        duration: `${event.duration} min`,
        status: event.status,
        noteTitle: event.noteTitle || 'Event Notes',
        noteUrl: event.noteUrl
      }));
      
      setEvents(transformedEvents);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch event details from organizer endpoint
  const fetchEventDetails = async () => {
    try {
      setLoadingDetails(true);
      const response = await axios.get('https://eventflow-five.vercel.app/api/organizer');
      if (response.data.length > 0) {
        const orgData = response.data[0];
        setEventDetails({
          name: orgData.name,
          location: orgData.location,
          logoUrl: orgData.logoUrl || '',
          date: new Date(orgData.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
        });
      }
    } catch (err) {
      console.error('Error fetching event details:', err);
    } finally {
      setLoadingDetails(false);
    }
  };

  useEffect(() => {
    // Only fetch data if user is authenticated
    const user = localStorage.getItem('user');
    if (user) {
      fetchEvents();
      fetchEventDetails();
    }
  }, []);

  // Render nothing while checking auth status
  const user = localStorage.getItem('user');
  if (!user) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f8f8f8]"
    >
      <div className="max-w-2xl mx-auto p-4">
        {/* Main Event Title Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center space-y-4"
        >
          {loadingDetails ? (
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            </div>
          ) : (
            <>
              {/* Logo - Only shown if exists in eventDetails */}
              {eventDetails.logoUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 flex justify-center"
                >
                  <img 
                    src={eventDetails.logoUrl} 
                    alt={`${eventDetails.name} logo`}
                    className="w-[132px] h-[132px] object-contain rounded-lg  shadow-md border "
                  />
                </motion.div>
              )}

              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {eventDetails.name}
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center justify-center gap-6 text-gray-600 mt-4"
              >
                {eventDetails.location && (
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <HiLocationMarker className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">{eventDetails.location}</span>
                  </div>
                )}
                {eventDetails.date && (
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <HiCalendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{eventDetails.date}</span>
                  </div>
                )}
              </motion.div>
            </>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-gray-600 uppercase tracking-wide"
          >
            Event Schedule
          </motion.p>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading events...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 text-center">
            <p>Error: {error}</p>
            <button 
              onClick={fetchEvents}
              className="mt-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Events List */}
        {!loading && !error && (
          <div className="space-y-4">
            {events.length > 0 ? (
              events.map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  isCurrent={event.status === 'current'}
                />
              ))
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No events scheduled yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}