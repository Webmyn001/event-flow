import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Event/WelcomePage';
import EventSchedulePage from './Event/EventSchedulePage';
import Footer from './Event/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/schedule" element={<EventSchedulePage />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;