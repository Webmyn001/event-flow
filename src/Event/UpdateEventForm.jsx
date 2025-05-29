import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const dummyEvents = [
  { id: 1, title: 'Opening Ceremony', time: '09:00', duration: '30', handler: 'John Smith', status: 'done', noteTitle: '', noteUrl: '' },
  { id: 2, title: 'Keynote Speech', time: '09:30', duration: '45', handler: 'Sarah Johnson', status: 'current', noteTitle: 'Welcome Notes', noteUrl: 'https://example.com/notes' },
  { id: 3, title: 'Workshop Session', time: '10:15', duration: '60', handler: 'Alex Rodriguez', status: 'upcoming', noteTitle: '', noteUrl: '' },
];

export default function UpdateEventForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    time: '',
    duration: '',
    handler: '',
    status: 'upcoming',
    noteTitle: '',
    noteUrl: '',
  });

  useEffect(() => {
    const event = dummyEvents.find(e => e.id === parseInt(id));
    if (event) {
      setFormData(event);
    } else {
      navigate('/organizer/events');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to update event
    console.log('Event updated:', formData);
    alert('Event updated successfully!');
    navigate('/organizer/events');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto p-6"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Update Event</h2>
        <button
          onClick={() => navigate('/organizer/events')}
          className="text-gray-500 hover:text-gray-700"
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
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Update Event
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}