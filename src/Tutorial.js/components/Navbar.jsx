// components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { 
  FaHome, 
  FaChalkboardTeacher, 
  FaUserCog, 
  FaBars, 
  FaTimes,
  FaAtom 
} from "react-icons/fa";
import Logo from "../Images/tutoriallogo.jpg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-indigo-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-1 rounded-md">
              <img src={Logo} alt="logo" className="h-[30px] w-[30px] object-cover"/>
            </div>
            <span className="text-xl font-bold text-white">PhysicsLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${location.pathname === "/" ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600"}`}
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link 
              to="/login" 
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${location.pathname === "/classroom" ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600"}`}
            >
              <FaChalkboardTeacher className="mr-2" />
              Classroom
            </Link>
            <Link 
              to="/admin" 
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${location.pathname === "/dashboard" ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600"}`}
            >
              <FaUserCog className="mr-2" />
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none p-2"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 mt-2">
              <Link 
                to="/" 
                className={`px-4 py-3 rounded-lg transition-colors flex items-center ${location.pathname === "/" ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="mr-3" />
                Home
              </Link>
              <Link 
                to="/login" 
                className={`px-4 py-3 rounded-lg transition-colors flex items-center ${location.pathname === "/classroom" ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaChalkboardTeacher className="mr-3" />
                Classroom
              </Link>
              <Link 
                to="/admin" 
                className={`px-4 py-3 rounded-lg transition-colors flex items-center ${location.pathname === "/dashboard" ? "bg-indigo-800 text-white" : "text-indigo-100 hover:bg-indigo-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUserCog className="mr-3" />
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;