import { Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        {/* Animated 404 Number */}
        <div className="mb-8 relative">
          <span className="text-[12rem] font-bold text-indigo-600 opacity-20">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <FiAlertTriangle className="text-red-500 text-8xl animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="relative -mt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lost in the Digital Space?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Oops! The page you're looking for seems to have taken a wrong turn at 
            the campus quad. Let's get you back to the marketplace!
          </p>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold
              hover:bg-indigo-700 transition-all flex items-center gap-2 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Return to Homepage
            </Link>
            <span className="text-gray-500">or</span>
            <a
              href="mailto:support@campusmart.com"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Report Missing Page
            </a>
          </div>

          {/* Fun Illustration */}
          <div className="mt-12 text-6xl space-x-4 opacity-50">
            <span className="inline-block animate-bounce">📚</span>
            <span className="inline-block animate-bounce delay-75">💻</span>
            <span className="inline-block animate-bounce delay-150">🛒</span>
          </div>
        </div>

        {/* Subtle Campus Illustration */}
        <div className="absolute bottom-8 left-0 right-0 text-center opacity-20">
          <div className="inline-flex text-4xl space-x-6">
            <span>🏛️</span>
            <span>🌳</span>
            <span>🚲</span>
            <span>☕</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;