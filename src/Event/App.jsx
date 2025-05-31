import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Event/WelcomePage';
import EventSchedulePage from './Event/EventSchedulePage';
import Footer from './Event/Footer';
import OrganizerDashboard from './Event/OrganizerDashboard';
import UpdateEventForm from './Event/UpdateEventForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/schedule" element={<EventSchedulePage />} />


        <Route path="/organizer" element={<OrganizerDashboard />} />
        <Route path="/organizer/events/update/:id" element={<UpdateEventForm />} />

        

       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;