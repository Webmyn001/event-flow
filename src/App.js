// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Tutorial.js/pages/Homepage";
import Classroom from "./Tutorial.js/pages/Classroom";
import Dashboard from "./Tutorial.js/pages/Dashboard";
import Navbar from "./Tutorial.js/components/Navbar";
import Footer from "./Tutorial.js/components/Footer";
import AdminLogin from "./Tutorial.js/pages/AdminLogin";
import SutudentsSection from "./Tutorial.js/pages/StudentsSection";
import StudentLogin from "./Tutorial.js/pages/StudentLogin";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/login" element={<StudentLogin/>} />
          <Route path="/students" element={<SutudentsSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
