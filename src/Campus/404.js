import { Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-100 rounded-full opacity-20 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-2xl text-center relative z-10">
        {/* 404 Display */}
        <div className="mb-8 relative">
          <div className="text-[8rem] sm:text-[12rem] font-bold text-indigo-600/10 bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FiAlertTriangle className="text-red-400 text-6xl sm:text-8xl animate-pulse" />
          </div>
        </div>

        {/* Content Card */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Lost in the Digital Space?
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have taken a wrong turn at 
            the campus quad. Let's get you back to the marketplace!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto bg-gradient-to-br from-indigo-600 to-blue-500 text-white px-6 py-3.5 rounded-xl font-semibold
              hover:from-indigo-700 hover:to-blue-600 transition-all flex items-center gap-2 group justify-center
              shadow-md hover:shadow-indigo-200/50 active:scale-95"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Return to Homepage
            </Link>
            <span className="text-gray-400 hidden sm:block">·</span>
            <a
              href="mailto:support@campusmart.com"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium transition-all
              text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 flex items-center justify-center gap-2
              active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/>
              </svg>
              Report Missing Page
            </a>
          </div>

          {/* Animated Emojis */}
          <div className="mt-8 flex justify-center space-x-4 opacity-75">
            <span className="inline-block animate-float">📚</span>
            <span className="inline-block animate-float animation-delay-200">💻</span>
            <span className="inline-block animate-float animation-delay-300">🛒</span>
          </div>
        </div>

        {/* Subtle Campus Illustration */}
        <div className="mt-12 hidden md:flex justify-center space-x-6 opacity-25">
          <span className="inline-block text-3xl">🏛️</span>
          <span className="inline-block text-3xl animate-wiggle">🌳</span>
          <span className="inline-block text-3xl animate-wiggle animation-delay-1000">🚲</span>
          <span className="inline-block text-3xl">☕</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;