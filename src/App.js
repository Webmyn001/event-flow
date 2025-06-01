import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventSchedulePage from './Event/EventSchedulePage';
import Footer from './Event/Footer';
import OrganizerDashboard from './Event/OrganizerDashboard';
import UpdateEventForm from './Event/UpdateEventForm';
import WelcomeAndRegistration from './Event/WelcomeAndRegistration';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<WelcomeAndRegistration/>} /> */}
        {/* <Route path="/schedule" element={<EventSchedulePage />} /> */}


        <Route path="/organizer" element={<OrganizerDashboard />} />
        <Route path="/update/:id" element={<UpdateEventForm />} />

        

       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;