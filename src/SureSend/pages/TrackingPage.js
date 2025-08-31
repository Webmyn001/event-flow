import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaShippingFast, FaCheckCircle, FaClock } from 'react-icons/fa';

function TrackingPage() {
  const [trackingId, setTrackingId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock tracking data - in a real app, this would come from an API
  const mockTrackingData = {
    id: 'SS-123456789',
    status: 'In Transit',
    origin: 'Lagos Distribution Center',
    destination: 'Ile-Ife Campus',
    package: 'Laptop and Iphone',
    history: [
      { status: 'Processing' },
      { status: 'In Transit' },
      {  status: 'Delivered' },
    ]
  };

  const handleTrackPackage = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTrackingInfo(mockTrackingData);
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing': return 'text-amber-600 bg-amber-100 border-amber-200';
      case 'In Transit': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'Delivered': return 'text-green-600 bg-green-100 border-green-200';
      case 'Exception': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return <FaCheckCircle className="text-green-500" />;
      case 'In Transit': return <FaShippingFast className="text-blue-500" />;
      case 'Out for Delivery': return <FaMapMarkerAlt className="text-purple-500" />;
      default: return <FaClock className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Track Your Package</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your tracking number below to get real-time updates on your delivery status
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-gray-100">
          <form onSubmit={handleTrackPackage} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 mb-2">
                Tracking Number
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaShippingFast className="h-5 w-5 text-indigo-400" />
                </div>
                <input
                  type="text"
                  id="tracking-number"
                  className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 py-4 text-lg border-gray-200 rounded-lg transition-colors duration-200"
                  placeholder="e.g. SS-123456789"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Tracking...
                  </>
                ) : (
                  <>
                    <FaSearch className="mr-2" />
                    Track Package
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {trackingInfo && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="px-6 py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Tracking Details</h2>
                  <p className="text-gray-500 mt-1">Tracking ID: {trackingInfo.id}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(trackingInfo.status)}`}>
                    {getStatusIcon(trackingInfo.status)}
                    <span className="ml-2">{trackingInfo.status}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Origin</h3>
                  <p className="text-lg font-medium text-indigo-600 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                    {trackingInfo.origin}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Destination</h3>
                  <p className="text-lg font-medium text-green-600 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-green-400" />
                    {trackingInfo.destination}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Package</h3>
                  <p className="text-lg font-medium text-purple-600">{trackingInfo.package}</p>
                </div>
              </div>

              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Delivery Progress</h3>
                
                {/* Timeline */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                
                <ul className="space-y-8">
                  {trackingInfo.history.map((event, index) => (
                    <li key={index} className="relative pl-16">
                      <div className="absolute left-0 rounded-full bg-white p-1 shadow-md">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gray-200'
                        }`}>
                          {index === 0 ? (
                            <FaMapMarkerAlt className="h-4 w-4 text-white" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                          )}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="text-lg font-medium text-gray-900">{event.status}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {!trackingInfo && !isLoading && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100">
              <FaShippingFast className="h-12 w-12 text-indigo-500" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">No tracking information yet</h3>
            <p className="mt-2 text-gray-500">
              Enter your tracking number to see the status of your package
            </p>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Where can I find my tracking number?</h4>
              <p className="text-sm text-gray-500">
                Your tracking number can be found in your booking confirmation message or Sent to you as SMS and Whatsapp Message.
                It typically starts with "SS-" followed by 9 digits.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackingPage;