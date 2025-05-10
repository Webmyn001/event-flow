import { Link } from 'react-router-dom';
import { FiUsers, FiTarget, FiAward, FiBook } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
            About CampusMart
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting campus communities through trusted exchanges since 2024
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FiUsers className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student-First Platform</h3>
            <p className="text-gray-600">
              Built by students, for students. We prioritize campus needs and security.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FiTarget className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Create sustainable campus economies through peer-to-peer exchanges.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FiAward className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <p className="text-gray-600">
              50,000+ successful transactions across 10 campuses nationwide.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                It all started in a dorm room when three students struggled to sell their 
                textbooks. Frustrated by existing platforms' limitations, we built CampusMart 
                to create a safer, campus-specific marketplace.
              </p>
              <Link to="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700">
                Join our journey →
              </Link>
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400">
                <FiBook className="text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage