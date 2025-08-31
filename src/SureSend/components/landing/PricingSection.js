// components/landing/PricingSection.jsx
import React from 'react';

const PricingSection = () => {
  const routes = [
    { from: 'Ife', to: 'Ibadan (Iwo Road)', price: '₦1,500', duration: '24 hours' },
    { from: 'Ife', to: 'Ede', price: '₦1,500', duration: '24 hours' },
    { from: 'Ife', to: 'Osogbo', price: '₦1,500', duration: '24 hours' },
    { from: 'Ife', to: 'Abuja', price: '₦3,500', duration: '48 hours', comingSoon: true },
    { from: 'Ife', to: 'Port Harcourt', price: '₦3,000', duration: '48 hours', comingSoon: true },
    { from: 'Ife', to: 'Lagos', price: '₦2,800', duration: '36 hours', comingSoon: true },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Delivery Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable rates for inter-city delivery between major university locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative"
            >
              {/* Coming Soon Badge */}
              {route.comingSoon ? (
                <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full">
                  Coming Soon
                </span>
              ): (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Active
                </span>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start my-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {route.from} to {route.to}
                    </h3>
                    <p className="text-gray-600">Standard delivery</p>
                  </div>
                  <span className="text-2xl font-bold text-indigo-600">{route.price}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>{route.duration}</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Up to 4kg included
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Tracking included
                  </li>
                  
                </ul>

                {/* Button changes depending on status */}
                {route.comingSoon && (
                  <button
                    disabled
                    className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a route not listed here?</p>
          <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
            Contact us for custom pricing →
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;
