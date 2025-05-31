import { useEffect, useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';
import axios from 'axios';

export default function EventManagement() {
  // Organizer state
  const [organizer, setOrganizer] = useState({
    _id: '',
    name: '',
    location: '',
    date: '',
    logoUrl: '', // Changed from logo file to URL string
    description: '',
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch organizer details on component mount
  useEffect(() => {
    const fetchOrganizer = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/organizer');
        
        // If organizer exists, set the state
        if (response.data.length > 0) {
          const orgData = response.data[0];
          setOrganizer({
            _id: orgData._id,
            name: orgData.name,
            location: orgData.location,
            date: orgData.date,
            logoUrl: orgData.logoUrl || '', // Use logoUrl from API
            description: orgData.description,
          });
        }
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load organizer details');
        console.error('Error fetching organizer:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizer();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrganizer({ ...organizer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create payload without FormData
      const payload = {
        name: organizer.name,
        location: organizer.location,
        date: organizer.date,
        description: organizer.description,
        logoUrl: organizer.logoUrl // Send as normal string
      };

      let response;
      if (organizer._id) {
        // Update existing organizer
        response = await axios.put(
          `http://localhost:5000/api/organizer/${organizer._id}`,
          payload
        );
      } else {
        // Create new organizer
        response = await axios.post(
          'http://localhost:5000/api/organizer/',
          payload
        );
        // Set the new ID from the response
        setOrganizer({ ...organizer, _id: response.data._id });
      }

      alert('Organizer details saved successfully!');
    } catch (error) {
      console.error('Error saving organizer:', error);
      setError(error.response?.data?.message || 'Failed to save organizer details');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!organizer._id) return;
    
    if (window.confirm('Are you sure you want to delete this organizer? All associated events will also be deleted.')) {
      try {
        await axios.delete(`http://localhost:5000/api/organizer/${organizer._id}`);
        
        // Reset organizer state
        setOrganizer({
          _id: '',
          name: '',
          location: '',
          date: '',
          logoUrl: '',
          description: '',
        });
        alert('Organizer deleted successfully!');
      } catch (error) {
        console.error('Error deleting organizer:', error);
        setError(error.response?.data?.message || 'Failed to delete organizer');
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Management</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{error}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Event Details Form */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Organizer Details</h3>
            {organizer._id && (
              <button
                onClick={handleDelete}
                className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
              >
                Delete Organizer
              </button>
            )}
          </div>
          
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading organizer details...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organizer Name</label>
                <input
                  type="text"
                  name="name"
                  value={organizer.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={organizer.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={organizer.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={organizer.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organizer Logo URL</label>
                <input
                  type="url"
                  name="logoUrl"
                  value={organizer.logoUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                  placeholder="https://example.com/logo.png"
                />
                
                {/* Logo preview */}
                {organizer.logoUrl && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-1">Logo Preview:</p>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex items-center justify-center w-32 h-32 rounded-lg border border-gray-300 bg-white">
                          <img 
                            src={organizer.logoUrl} 
                            alt="Logo preview" 
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.parentNode.innerHTML = '<span class="text-gray-500">Invalid URL</span>';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Saving...' : 'Save Organizer Details'}
              </button>
            </form>
          )}
        </div>
        
        {/* Event Schedule Management */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Schedule</h3>
          <EventForm />
          <div className="mt-8">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
}