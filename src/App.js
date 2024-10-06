import './App.css';
import Signin from './Auth/Signin';
import Login from './Auth/Login';
import Homepage from './Homepage';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Header/Navbar';
import Details from './Details';
import PostVideo from './PostVideo';
import Footer from './Footer';

function App() {
  
  

  return (
   <div className='bg-[#f5f5f5]'>
    <Router>
       <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/userprofile' element={<UserProfile/>}></Route>
      <Route path='/posts' element={<PostVideo/>}></Route>

      <Route path = "/details/:id" exact element= {<Details/>}></Route>
    </Routes>
       <Footer/>
    </Router>
    
     
   </div>
  );
}

export default App;
