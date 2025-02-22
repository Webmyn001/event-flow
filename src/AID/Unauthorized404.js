import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Unauthorized404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* Icon */}
        <div className="mb-8">
          <svg
            className="h-20 w-20 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">404</h1>

        {/* Main Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
          Access to Dashboard Denied
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-8">
          You don't have permission to view this page. Please authenticate to
          access the dashboard features.
        </p>

        {/* Login Button */}
        <Link
          to="/login" // Update this to your login route
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Go to Login Page
        </Link>

        {/* Additional Help Text */}
        <p className="mt-8 text-gray-400 text-sm">
          If you believe this is an error, please contact support at{" 09164028709 "}
          <a
            href="mailto:bellomuhyideen0001@gmail.com"
            className="text-indigo-400 hover:underline"
          >
            bellomuhyideen0001@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Unauthorized404;