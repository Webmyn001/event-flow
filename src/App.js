import './App.css';
import Signin from './Auth/Signin';
import Login from './Auth/Login';
import Homepage from './Homepage';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/signin' element={<Signin/>}> </Route>
      <Route path='/dashboard' element={<Dashboard/>}> </Route>
      <Route path='/userprofile' element={<UserProfile/>}> </Route>
    </Routes>
    
    </BrowserRouter>
    
     
   </div>
  );
}

export default App;
