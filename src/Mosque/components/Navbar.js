import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faEnvelope, faUserShield, 
  faMosque, faBars, faTimes, faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#004D01] text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 text-xl font-poppins font-bold hover:text-blue-200 transition-colors"
          >
            <FontAwesomeIcon icon={faMosque} className="text-2xl" />
            <span>Masjid Rahmah</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
            

           
            
               <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive ? 'bg-white/10 text-blue-300' : 'hover:bg-white/10'
                  }`
                }
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </NavLink>    
            
           
              
          
               
                <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive ? 'bg-white/10 text-blue-300' : 'hover:bg-white/10'
                  }`
                }
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Contact Us</span>
              </NavLink>

          
              
             
                {/* 
                
                <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive ? 'bg-white/10 text-blue-300' : 'hover:bg-white/10'
                  }`
                }
              >
                <FontAwesomeIcon icon={faUserShield} />
                <span>Admin</span>
              </NavLink>      
                
                */}
              
            

            </div>

            
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center space-x-2 px-4 py-3 rounded-md ${
                  isActive ? 'bg-white/10 text-blue-300' : 'hover:bg-white/10'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `flex items-center space-x-2 px-4 py-3 rounded-md ${
                  isActive ? 'bg-white/10 text-blue-300' : 'hover:bg-white/10'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact Us</span>
            </NavLink>


          {/* 
             
            <NavLink 
              to="/admin" 
              className={({ isActive }) => 
                `flex items-center space-x-2 px-4 py-3 rounded-md ${
                  isActive ? 'bg-white/10 text-blue-300' : 'hover:bg-white/10'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUserShield} />
              <span>Admin</span>
            </NavLink>
          */}

          </div>
        )}
      </div>
    </nav>
  );
}