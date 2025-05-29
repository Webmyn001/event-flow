import { useState } from 'react';
import { motion } from 'framer-motion';

const dummyParticipants = [
  { id: 1, fullName: 'John Smith', email: 'john@example.com', phone: '555-1234', gender: 'Male', role: 'Audience', arrivalTime: '09:15 AM' },
  { id: 2, fullName: 'Sarah Johnson', email: 'sarah@example.com', phone: '555-5678', gender: 'Female', role: 'Guest Speaker', arrivalTime: '08:45 AM' },
  { id: 3, fullName: 'Michael Brown', email: 'michael@example.com', phone: '555-9012', gender: 'Male', role: 'Organizer', arrivalTime: '07:30 AM' },
  { id: 4, fullName: 'Emily Davis', email: 'emily@example.com', phone: '555-3456', gender: 'Female', role: 'Audience', arrivalTime: '09:05 AM' },
];

export default function ParticipantsTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParticipants = dummyParticipants.filter(participant =>
    participant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
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
                Arrival Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredParticipants.map((participant) => (
              <motion.tr
                key={participant.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {participant.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {participant.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {participant.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {participant.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    participant.role === 'Organizer' 
                      ? 'bg-blue-100 text-blue-800' 
                      : participant.role === 'Guest Speaker'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {participant.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {participant.arrivalTime}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredParticipants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No participants found matching your search</p>
        </div>
      )}
    </div>
  );
}