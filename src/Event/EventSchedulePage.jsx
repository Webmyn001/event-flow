// src/pages/EventSchedulePage.jsx
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EventItem from './EventItem';
import { HiCalendar, HiLocationMarker, HiRefresh } from 'react-icons/hi';
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
  const [lastUpdated, setLastUpdated] = useState(null);
  const refreshInterval = useRef(null);

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
      setLastUpdated(new Date());
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
            month: 'short',
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

  // Setup auto-refresh every 30 seconds
  useEffect(() => {
    refreshInterval.current = setInterval(() => {
      fetchEvents();
    }, 30000); // 30 seconds
    
    return () => {
      if (refreshInterval.current) {
        clearInterval(refreshInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only fetch data if user is authenticated
    const user = localStorage.getItem('user');
    if (user) {
      fetchEvents();
      fetchEventDetails();
    }
  }, []);

  // Format last updated time
  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Render nothing while checking auth status
  const user = localStorage.getItem('user');
  if (!user) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-6"
    >
      <div className="max-w-2xl mx-auto px-4">
        {/* Header with refresh controls */}
        <div className="flex justify-between items-center mb-4">
          <motion.h1 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl font-bold text-gray-800"
          >
            Event Schedule
          </motion.h1>
          
          <div className="flex items-center gap-2">
            {lastUpdated && (
              <div className="text-xs text-gray-500">
                Updated: {formatTime(lastUpdated)}
              </div>
            )}
            <button 
              onClick={fetchEvents}
              className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
            >
              <HiRefresh className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Main Event Details */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          {loadingDetails ? (
            <div className="flex justify-center py-4">
              <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-4">
                {eventDetails.logoUrl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-shrink-0"
                  >
                    <img 
                      src={eventDetails.logoUrl} 
                      alt={`${eventDetails.name} logo`}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                    />
                  </motion.div>
                )}

                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {eventDetails.name}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mt-2 text-xs">
                    {eventDetails.location && (
                      <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-blue-700">
                        <HiLocationMarker className="w-3 h-3" />
                        <span>{eventDetails.location}</span>
                      </div>
                    )}
                    {eventDetails.date && (
                      <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded text-purple-700">
                        <HiCalendar className="w-3 h-3" />
                        <span>{eventDetails.date}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-gray-700">
              Today's Schedule
            </h3>
            <div className="text-xs text-gray-500">
              {events.length} events
            </div>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-2 text-gray-500">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span>Loading events...</span>
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-center text-sm">
              <p>Error: {error}</p>
              <button 
                onClick={fetchEvents}
                className="mt-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-xs font-medium transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Events List */}
          {!loading && !error && (
            <div className="space-y-3">
              {events.length > 0 ? (
                events.map((event) => (
                  <EventItem
                    key={event.id}
                    event={event}
                    isCurrent={event.status === 'current'}
                  />
                ))
              ) : (
                <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500 text-sm">No events scheduled yet</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}