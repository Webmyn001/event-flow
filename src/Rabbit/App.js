import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Rabbit/pages/HomePage';
import AboutPage from './Rabbit/pages/AboutPage';
import LoginPage from './Rabbit/pages/LoginPage';
import ClassroomPage from './Rabbit/pages/ClassroomPage';
// import DashboardPage from './Rabbit/pages/DashboardPage';
import Layout from './Rabbit/components/layout/Layout';
import ContactOwner from './Rabbit/pages/ContactOwner';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          <Route path="/contact-owner" element={<ContactOwner />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;