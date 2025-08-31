// App.js (Main Component)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './SureSend/pages/LandingPage';
import BookingPage from './SureSend/pages/BookingPage';
import ConfirmationPage from './SureSend/pages/ConfirmationPage';
import AdminDashboard from './SureSend/pages/AdminDashboard';
import Header from './SureSend/components/layout/Header';
import Footer from './SureSend/components/layout/Footer';
import TrackingPage from './SureSend/pages/TrackingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;