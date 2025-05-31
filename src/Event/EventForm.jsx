import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios

export default function EventForm() {
  const [formData, setFormData] = useState({
    title: '',
    time: '',
    duration: '',
    handler: '',
    status: 'upcoming',
    noteTitle: '',
    noteUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for API
      const payload = {
        ...formData,
        duration: Number(formData.duration) // Convert duration to number
      };

      // Make POST request
      await axios.post('https://eventflow-five.vercel.app/api/events', payload);

      alert('Event added successfully!');
      
      // Reset form
      setFormData({
        title: '',
        time: '',
        duration: '',
        handler: '',
        status: 'upcoming',
        noteTitle: '',
        noteUrl: '',
      });
    } catch (error) {
      console.error('Error adding event:', error);
      alert(`Failed to add event: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Event</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Handler/Person</label>
            <input
              type="text"
              name="handler"
              value={formData.handler}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
          >
            <option value="upcoming">Upcoming</option>
            <option value="current">Current</option>
            <option value="done">Done</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Note Title (Optional)</label>
          <input
            type="text"
            name="noteTitle"
            value={formData.noteTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Note URL (Optional)</label>
          <input
            type="url"
            name="noteUrl"
            value={formData.noteUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            placeholder="https://example.com/notes"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Adding Event...' : 'Add Event'}
        </button>
      </form>
    </motion.div>
  );
}