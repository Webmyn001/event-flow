import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import RegistrationForm from './Mosque/components/RegistrationForm';
import ContactForm from './Mosque/components/ContactForm';
import AdminDashboard from './Mosque/components/AdminDashboard';
import Footer from './Mosque/components/Footer';
import Navbar from './Mosque/components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/contact" element={<ContactForm />} />
           
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;