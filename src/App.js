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
import FullHome from './AID/Information/FullHome';
import Furnitures from './AID/Information/Furnitures';
import HomeDecor from './AID/Information/HomeDecor';
import HomeLight from './AID/Information/HomeLight';
import Stucco from './AID/Information/Stucco';
import POP from './AID/Information/POP';
import WallDesign from './AID/Information/WallDesign';


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


                         {/* Service details */}
      <Route path = "/home-interior" exact element= {<FullHome/>}></Route>
      <Route path = "/furnitures" exact element= {<Furnitures/>}></Route>
      <Route path = "/decor" exact element= {<HomeDecor/>}></Route>
      <Route path = "/lightning" exact element= {<HomeLight/>}></Route>
      <Route path = "/pop" exact element= {<POP/>}></Route>
      <Route path = "/stucco" exact element= {<Stucco/>}></Route>
      <Route path = "/wall-pannel" exact element= {<WallDesign/>}></Route>
   

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
