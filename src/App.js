import Footer from './AID/Footer';
import Navbar from './AID/Header/Navbar';

import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './AID/Contact';
import Works from './AID/Works';
import Auth from './AID/Auth.js/Auth';
import Service from './AID/Service';
import Home from './AID/Home';
import Certifications from './AID/Certifications';


function App() {
  
  

  return (
   <div className=" bg-repeat object-cover bg-[url('./AID/Image/background-design.jpg')]" >
    <Router>
       <Navbar/>
    <Routes>
    <Route path = "/" exact element= {<Home/>}></Route>
       <Route path = "/contact" exact element= {<Contact/>}></Route>
       <Route path = "/works" exact element= {<Works/>}></Route>
       <Route path = "/service" exact element= {<Service/>}></Route>
       <Route path = "/cert" exact element= {<Certifications/>}></Route>
       <Route path = "/login" exact element= {<Auth/>}></Route>
    </Routes>
      {/* Footer */}
      <Footer/>

    </Router>
    
     
   </div>
  );
}

export default App;
