import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UpdateEventForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    time: '',
    duration: '',
    handler: '',
    status: 'upcoming',
    noteTitle: '',
    noteUrl: '',
  });

  // Fetch event data from API
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(`https://eventflow-five.vercel.app/api/events/${id}`);
        
        // Map API response to form data structure
        const eventData = response.data;
        setFormData({
          title: eventData.title,
          time: eventData.time,
          duration: eventData.duration,
          handler: eventData.handler,
          status: eventData.status,
          noteTitle: eventData.noteTitle || '',
          noteUrl: eventData.noteUrl || '',
        });
      } catch (err) {
        console.error('Error fetching event:', err);
        setError('Failed to load event data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true); // Show loading during update
      setError('');
      
      // Prepare data for API
      const updateData = {
        title: formData.title,
        time: formData.time,
        duration: formData.duration,
        handler: formData.handler,
        status: formData.status,
        noteTitle: formData.noteTitle || undefined,
        noteUrl: formData.noteUrl || undefined,
      };

      // Make PUT request to update event
      await axios.put(`https://eventflow-five.vercel.app/api/events/${id}`, updateData);
      
      alert('Event updated successfully!');
      navigate('/organizer');
    } catch (err) {
      console.error('Update failed:', err);
      setError('Failed to update event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show loading spinner
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <div className="flex flex-col items-center justify-center h-64">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading event data...</p>
        </div>
      </div>
    );
  }

  // Show error message
  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-6">
          <p className="font-medium">{error}</p>
          <div className="flex justify-center mt-3">
            <button 
              onClick={() => navigate('/organizer')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm font-medium"
            >
              Back to Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto p-6"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Update Event</h2>
        <button
          onClick={() => navigate('/organizer')}
          className="text-gray-500 hover:text-gray-700 flex items-center"
        >
          ← Back to Events
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                required
                min="1"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Handler/Person</label>
            <input
              type="text"
              name="handler"
              value={formData.handler}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            >
              <option value="upcoming">Upcoming</option>
              <option value="current">Current</option>
              <option value="done">Done</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Note Title (Optional)</label>
            <input
              type="text"
              name="noteTitle"
              value={formData.noteTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Note URL (Optional)</label>
            <input
              type="url"
              name="noteUrl"
              value={formData.noteUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              placeholder="https://example.com/notes"
            />
          </div>
          
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/organizer/events')}
              className="px-6 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating...
                </>
              ) : 'Update Event'}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}