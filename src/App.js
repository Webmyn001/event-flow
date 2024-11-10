import Details from './IAB-Client/Details';
import Footer from './IAB-Client/Footer';
import Navbar from './IAB-Client/Header/Navbar';
import Home from './IAB-Client/Home';

import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Upload from './IAB-Client/Upload';

function App() {
  
  

  return (
   <div className='bg-[#f5f5f5]'>
    <Router>
       <Navbar/>
    <Routes>
       <Route path = "/" exact element= {<Home/>}></Route>
       <Route path = "/details/:id" exact element= {<Details/>}></Route>
       <Route path = "/upload" exact element= {<Upload/>}></Route>

    </Routes>
       <Footer/>
    </Router>
    
     
   </div>
  );
}

export default App;
