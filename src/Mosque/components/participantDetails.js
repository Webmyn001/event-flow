import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faVenusMars, faClock, faBriefcase,
  faEnvelope, faPhone, faMapMarkerAlt, faArrowLeft,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function ParticipantDetails() {
  const { id } = useParams();
  const [participant, setParticipant] = useState([]);
  const [loading, setLoading] = useState(true);

      const navigate = useNavigate()
  

  const handleDeleteMessage = async (participantId) => {
    try {
      await axios.delete(`https://mosque-two.vercel.app/api/participant/${participantId}`);
      alert('Message deleted successfully');
      navigate("/")
      window.location.reload()
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Error deleting message');
    }
  };


  useEffect(() => {
    const fetchParticipant = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://mosque-two.vercel.app/api/participant/${id}`);
        setParticipant(response.data);
      } catch (error) {
        console.error('Error fetching participant:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchParticipant();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!participant) return <div>Participant not found</div>;

  return (
    <div className="bg-white p-6 rounded-lg mt-16 shadow max-w-4xl mx-auto">
      <Link 
        to="/admin" 
        className="mb-4 inline-flex items-center text-[#004D01]blue-600 hover:text-blue-800"
      >
        <FontAwesomeIcon icon={faArrowLeft} className=" text-[#004D01] mr-2" />
        Back to Participants
      </Link>

      <div className="space-y-6">
        {/* Personal Info */}
        <div className="bg-gray-50 text-[#004D01] p-4 rounded-lg">
          <h2 className="text-2xl [#004D01] font-semibold mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-[#004D01]" />
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem icon={faUser} label="Full Name" value={participant.fullName}/>
            <DetailItem icon={faVenusMars} label="Gender" value={participant.gender} />
            <DetailItem icon={faClock} label="Age" value={participant.age} />
            <DetailItem icon={faBriefcase} label="Occupation" value={participant.occupation} />

          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-2xl [#004D01] text-[#004D01] font-semibold mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem 
              icon={faEnvelope} 
              label="Email" 
              value={participant.email}
              link={`mailto:${participant.email}`}
            />
            <DetailItem 
              icon={faPhone} 
              label="WhatsApp" 
              value={participant.whatsappNumber}
            />

          <DetailItem 
              icon={faPhone} 
              label="WhatsApp" 
              value={participant.nokNumber}
            />

            <DetailItem 
              icon={faMapMarkerAlt} 
              label="Address" 
              value={participant.address}
              className="col-span-full"
            />
          </div>
        </div>

        <div className='flex justify-center items-center'>
                <button
                 onClick={() => handleDeleteMessage(participant._id)}
                 className="text-red-600 hover:text-red-800 p-2"
                 >
                Delete Participant <FontAwesomeIcon icon={faTrashAlt} />
                </button>
       </div>
                       
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value, link, className = '' }) {
  return (
    <div className={`${className} flex items-start space-x-3`}>
      <FontAwesomeIcon icon={icon} className="mt-1 text-[#004D01]" />
      <div>
        <div className="text-sm font-medium text-gray-500">{label}</div>
        {link ? (
          <a 
            href={link} 
            className="text-blue-600 hover:text-blue-800 break-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <div className="text-gray-900 break-all">{value}</div>
        )}
      </div>
    </div>
  );
}