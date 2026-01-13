import React from 'react';
import {
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaLock,
  FaRocket,
  FaGraduationCap,
  FaChartLine,
  FaMedal,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaUserGraduate
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Homepage = ({ onEnterClassroom }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm mb-8">
              <FaStar className="text-yellow-300" />
              <span>Trusted by NTI, IJMBE & JUPEB Students</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Master Physics with{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Exclusive learning platform for <span className="font-semibold">NATIONAL TEACHERS' INSTITUTE, KADUNA</span> -
              Your gateway to physics excellence and academic success
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/login"
                className="group bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-3"
              >
                <FaRocket className="group-hover:animate-bounce" />
                Enter Classroom
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">95%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>

              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-80">Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Physics Platform?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Designed specifically for NTI and IJMBE students to achieve academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Exam-Focused Content</h3>
              <p className="text-slate-600 leading-relaxed">
                Materials specifically tailored for NTI and IJMBE examination requirements,
                giving you the competitive edge you need to excel.
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-semibold">
                <FaCheckCircle className="mr-2" />
                Tailored for Success
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Proven Results</h3>
              <p className="text-slate-600 leading-relaxed">
                Students using our platform have shown a <span className="font-bold text-green-600">72% improvement</span> in
                test scores and conceptual understanding.
              </p>
              <div className="mt-4 flex items-center text-green-600 font-semibold">
                <FaCheckCircle className="mr-2" />
                Measurable Progress
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMedal className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Expert Instructors</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn from certified physics educators with years of experience in preparing
                students for academic success and examination excellence.
              </p>
              <div className="mt-4 flex items-center text-purple-600 font-semibold">
                <FaCheckCircle className="mr-2" />
                Expert Guidance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-indigo-700 py-6 px-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-1">Payment Details</h2>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mt-2">
                <p className="text-white font-bold text-lg">₦10,000 <span className="text-sm font-normal text-indigo-100">/ month</span></p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Bank Name</p>
                    <p className="text-lg font-bold text-slate-800">Opay</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Account Name</p>
                    <p className="text-lg font-bold text-slate-800 leading-tight">Bello Muhyideen</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-4">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 relative group cursor-pointer transition-all hover:border-indigo-300">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Account Number</p>
                    <p className="text-xl font-mono font-bold text-indigo-700">9164028709</p>
                  </div>

                  <a
                    href="https://wa.me/2349164028709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-sm text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Send Proof
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 py-2 px-4 text-center border-t border-yellow-100">
              <p className="text-yellow-800 text-xs font-semibold">
                ⚠️ <span className="underline">Test Mode</span>: Details will be removed soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Get Started in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of students who are already excelling in physics with our structured learning approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative group hover:transform hover:-translate-y-3 transition-all duration-300 border border-slate-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaLock className="text-blue-600 text-4xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Get Your Access Code</h3>
              <p className="text-slate-600 leading-relaxed">
                Receive your unique classroom access code from your instructor. This ensures that only
                registered students can access our premium educational content.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative group hover:transform hover:-translate-y-3 transition-all duration-300 border border-slate-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaChalkboardTeacher className="text-purple-600 text-4xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Enter Classroom</h3>
              <p className="text-slate-600 leading-relaxed">
                Go to the Classroom page and enter your access code. You'll gain immediate access to
                all learning materials, class schedules, and interactive sessions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative group hover:transform hover:-translate-y-3 transition-all duration-300 border border-slate-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaBook className="text-green-600 text-4xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Access Materials</h3>
              <p className="text-slate-600 leading-relaxed">
                Explore comprehensive study resources, join live classes, and track your progress
                through our structured learning modules designed for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our platform is designed to provide a comprehensive learning experience tailored specifically for physics students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white p-4 rounded-2xl inline-flex shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBook className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Comprehensive Study Materials</h3>
              <p className="text-slate-600 leading-relaxed">
                Access detailed notes, diagrams, formula sheets, and problem sets specifically designed
                for NTI and IJMBE syllabi. All materials are regularly updated to reflect the latest curriculum changes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-amber-100 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white p-4 rounded-2xl inline-flex shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChalkboardTeacher className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Interactive Live Classes</h3>
              <p className="text-slate-600 leading-relaxed">
                Join scheduled Google Meet sessions where you can ask questions in real-time,
                participate in discussions, and get immediate feedback from experienced physics educators.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-emerald-100 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white p-4 rounded-2xl inline-flex shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaClock className="text-emerald-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Flexible Learning Schedule</h3>
              <p className="text-slate-600 leading-relaxed">
                Access materials 24/7 and join classes at scheduled times that work for you.
                All live sessions are recorded and available for later review if you miss a class.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2 inline-flex items-center gap-2 mb-8">
              <FaUserGraduate className="text-yellow-300" />
              <span className="text-sm font-semibold">Join Successful Students Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Excel in{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Physics?
              </span>
            </h2>

            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Transform your understanding of physics and join our community of successful students today.
              Your journey to academic excellence starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/login"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-3"
              >
                <FaRocket className="group-hover:animate-bounce" />
                Start Learning Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-8 text-slate-400 text-sm">
              Have an access code? Enter it on the Classroom login page
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;