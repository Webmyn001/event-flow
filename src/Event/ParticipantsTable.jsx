import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function ParticipantsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch participants from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://eventflow-five.vercel.app/api/form');
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching participants:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle participant deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this participant?')) {
      try {
        await axios.delete(`https://eventflow-five.vercel.app/api/form/${id}`);
        // Update UI by removing the deleted participant
        setData(data.filter(participant => participant._id !== id));
      } catch (error) {
        console.error('Error deleting participant:', error);
        alert(`Failed to delete participant: ${error.response?.data?.message || error.message}`);
      }
    }
  };

  
// Normalize search term
  const normalizedSearch = searchTerm.trim().toLowerCase();

  // Filter participants based on search
  const filteredParticipants = data.filter(participant => {
    // Handle gender-specific searches
    if (normalizedSearch === 'male' || normalizedSearch === 'female') {
      return participant.gender?.toLowerCase() === normalizedSearch;
    }
    // General search
    return (
      participant.fullName?.toLowerCase().includes(normalizedSearch) ||
      participant.emailAddress?.toLowerCase().includes(normalizedSearch) ||
      participant.role?.toLowerCase().includes(normalizedSearch) ||
      participant.gender?.toLowerCase().includes(normalizedSearch)
    );
  });


  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Registered Participants</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search participants..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 w-full md:w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading participants...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 text-center">
          <p>Error: {error}</p>
          <button 
            onClick={fetchData}
            className="mt-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S/N
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredParticipants.map((participant, i) => (
                  <motion.tr
                    key={participant._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hover:bg-gray-50"
                  >
                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {i+1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {participant.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.emailAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {participant.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        participant.role === 'organizer' 
                          ? 'bg-blue-100 text-blue-800' 
                          : participant.role === 'guest lecturer'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {participant.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.submittedTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleDelete(participant._id)}
                        className="text-red-600 hover:text-red-900 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredParticipants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No participants found</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}