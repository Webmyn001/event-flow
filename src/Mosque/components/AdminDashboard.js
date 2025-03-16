import { useEffect, useState } from 'react';
import axios from 'axios';
import AllParticipantsList from './AllParticipantsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, faEnvelope, faChartBar, 
  faTrashAlt, faUserCircle, faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function AdminDashboard() {
  const [participants, setParticipants] = useState([]);
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [participantsRes, messagesRes] = await Promise.all([
          axios.get('https://mosque-two.vercel.app/api/participant/get'),
          axios.get('https://mosque-two.vercel.app/api/contact/get')
        ]);
        setParticipants(participantsRes.data);
        setMessages(messagesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteMessage = async (messageId) => {
    try {
      await axios.delete(`https://mosque-two.vercel.app/api/contact/${messageId}`);
      setMessages(messages.filter(message => message._id !== messageId));
      alert('Message deleted successfully');
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Error deleting message');
    }
  };

  const filteredParticipants = participants.filter(participant =>
    participant.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 mt-16 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#004D01] mb-2">
          <FontAwesomeIcon icon={faChartBar} className="mr-3" />
          Admin Dashboard
        </h1>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm mb-2">Total Participants</h3>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-[#004D01] mr-3 text-xl" />
              <span className="text-2xl font-bold">{participants.length}</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm mb-2"> Messages</h3>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#004D01] mr-3 text-xl" />
              <span className="text-2xl font-bold">{messages.length}</span>
            </div>
          </div>
        </div>

    
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Participants Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-[#004D01]">
            <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
            Registered Participants ({participants.length})
          </h2>
          <AllParticipantsList participants={filteredParticipants} />
        </div>

        {/* Messages Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-[#004D01]">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact Messages ({messages.length})
          </h2>
          <div className="space-y-4 overflow-y-auto h-[400px]">
            {messages.map(message => (
              <div key={message._id} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-lg">
                      <FontAwesomeIcon icon={faUsers} className="mr-2 text-[#004D01]" />
                      {message.name}
                    </p>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <a 
                      href={`mailto:${message.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {message.email}
                    </a>
                      </p>
                      {message.number && (
                        <p className="mt-1">
                          <FontAwesomeIcon icon={faPhone} className="mr-2" />
                          <a href={`tel:${message.number}`} className='text-green-600'>{message.number}</a>
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteMessage(message._id)}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
                <p className="mt-3 bg-gray-50 p-3 rounded-lg">
                  {message.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}