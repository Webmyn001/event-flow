import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faClock,
  faLink,
  faPrayingHands
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[#004D01] text-white pt-12 pb-6 font-Poppins">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          
          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center ">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg" />
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Beside Samalis filling Station, Gbopa, Ibadan.
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +234 8050 328 404
              </li>

              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +234 8050 361 814
              </li>
            </ul>
          </div>

    
        </div>

        <div className="border-t border-white/20 pt-6 mt-8">
          <p className="text-center text-sm">
            © 2025 Masjid Rahmah. All rights reserved.<br />
          </p>
        </div>
      </div>
    </footer>
  );
}