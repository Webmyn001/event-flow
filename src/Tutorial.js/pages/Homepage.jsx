// components/Homepage.js
import React from 'react';
import { FaBook, FaChalkboardTeacher, FaClock, FaLock, FaRocket, FaUsers, FaGraduationCap, FaChartLine, FaMedal, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Homepage = ({ onEnterClassroom }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="relative py-10 md:py-20 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Master Physics with <span className="text-yellow-300">Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">
              Exclusive learning platform for NTI and IJMBE students - Your gateway to physics excellence
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-300 rounded-full"></div>
        </div>
      </section>


 {/* Final CTA Section */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Physics?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join our community of successful students today and transform your understanding of physics
          </p>
         <Link to="/classroom" className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 px-10 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
        <FaRocket className="mr-2" />
           Enter Classroom
        </Link>
          <p className="mt-6 text-gray-400">Have an access code? Enter it on the Classroom page</p>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our <span className="text-indigo-600">Physics Platform</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaGraduationCap className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exam-Focused Content</h3>
              <p className="text-gray-600">Materials specifically tailored for NTI and IJMBE examination requirements, giving you the edge you need.</p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">Students using our platform have shown a 72% improvement in test scores and conceptual understanding.</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaMedal className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from certified physics educators with years of experience in preparing students for success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Get Started in <span className="text-indigo-600">3 Simple Steps</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Join thousands of students who are already excelling in physics with our structured learning approach
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center relative group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                1
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FaLock className="text-indigo-600 text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Your Access Code</h3>
              <p className="text-gray-600">
                Receive your unique classroom access code from your instructor. This ensures that only registered students can access our premium content.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md text-center relative group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                2
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaChalkboardTeacher className="text-purple-600 text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter Classroom</h3>
              <p className="text-gray-600">
                Go to the Classroom page and enter your access code. You'll gain immediate access to all learning materials and class schedules.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md text-center relative group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                3
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <FaBook className="text-green-600 text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Access Materials</h3>
              <p className="text-gray-600">
                Explore comprehensive study resources, join live classes, and track your progress through our structured learning modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Everything You Need to <span className="text-indigo-600">Succeed</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our platform is designed to provide a comprehensive learning experience tailored specifically for physics students
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-sm flex items-start">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <FaBook className="text-indigo-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Study Materials</h3>
                <p className="text-gray-600">
                  Access detailed notes, diagrams, formula sheets, and problem sets specifically designed for NTI and IJMBE syllabi. All materials are regularly updated to reflect the latest curriculum changes.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-sm flex items-start">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <FaChalkboardTeacher className="text-yellow-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Live Classes</h3>
                <p className="text-gray-600">
                  Join scheduled Google Meet sessions where you can ask questions in real-time, participate in discussions, and get immediate feedback from experienced physics educators.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl shadow-sm flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <FaClock className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Learning Schedule</h3>
                <p className="text-gray-600">
                  Access materials 24/7 and join classes at scheduled times that work for you. All live sessions are recorded and available for later review if you miss a class.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;