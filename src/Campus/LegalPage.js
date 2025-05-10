import { FiShield, FiFileText, FiAlertCircle } from 'react-icons/fi';

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FiShield className="text-4xl text-indigo-600" />
            <FiFileText className="text-4xl text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
            Privacy & Terms
          </h1>
          <p className="text-xl text-gray-600">
            Your safety and privacy are our top priority
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
          <ul className="space-y-2 text-indigo-600">
            <li><a href="#privacy" className="hover:text-indigo-700">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-indigo-700">Terms of Service</a></li>
            <li><a href="#security" className="hover:text-indigo-700">Security Practices</a></li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <section id="privacy" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FiShield className="text-indigo-600" />
            Privacy Policy
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>Last Updated: January 1, 2024</p>
            <p>
              We collect only essential information to facilitate campus transactions...
            </p>
            <h3 className="text-xl font-semibold mt-4">Data Collection</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (email, campus ID verification)</li>
              <li>Transaction history</li>
              <li>Device information for security purposes</li>
            </ul>
          </div>
        </section>

        {/* Terms of Service */}
        <section id="terms" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FiFileText className="text-indigo-600" />
            Terms of Service
          </h2>
          <div className="space-y-4 text-gray-600">
            <h3 className="text-xl font-semibold">User Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accurate representation of items</li>
              <li>Respectful communication between users</li>
              <li>Compliance with campus regulations</li>
            </ul>
          </div>
        </section>

        {/* Security Practices */}
        <section id="security" className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FiAlertCircle className="text-indigo-600" />
            Security Measures
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We employ bank-grade encryption and regular security audits...
            </p>
          </div>
        </section>

        <div className="text-center text-gray-600">
          Questions? Contact our <a href="/contact" className="text-indigo-600 hover:underline">legal team</a>
        </div>
      </div>
    </div>
  );
};

export default LegalPage