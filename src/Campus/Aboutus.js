import { Link } from 'react-router-dom';
import { FiUsers, FiTarget, FiAward, FiBook } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-100 rounded-full opacity-20 animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-4">
            About Campus Crave
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting campus communities through trusted exchanges since 2025
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: FiUsers, title: "Student-First Platform", text: "Built by students, for students. We prioritize campus needs and security." },
            { icon: FiTarget, title: "Our Mission", text: "Create sustainable campus economies through peer-to-peer exchanges." },
            { icon: FiAward, title: "Achievements", text: "50,000+ successful transactions across 10 campuses nationwide." }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <item.icon className="text-4xl bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-black/5 p-8 mb-16 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                It all started in a dorm room when three students struggled to sell their 
                textbooks. Frustrated by existing platforms' limitations, we built Campus Crave 
                to create a safer, campus-specific marketplace.
              </p>
              <Link 
                to="/signup" 
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 group transition-all"
              >
                Join our journey
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 h-64 lg:h-80 rounded-xl flex items-center justify-center">
                <FiBook className="text-6xl text-indigo-600/80 animate-float" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { number: "4+", label: "Campuses" },
            { number: "1k+", label: "Transactions" },
            { number: "98%", label: "Satisfaction" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;