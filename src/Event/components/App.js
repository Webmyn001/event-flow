import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Event/components/Register';
import Login from './Event/components/Login';
import Dashboard from './Event/components/Dashboard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100" >
       <Router>
       <Routes>
       <Route path = "/" exact element= {<Login/>}></Route>
          <Route path = "/register" exact element= {<Register/>}></Route>
          <Route path = "/dashboard" exact element= {<Dashboard/>}></Route>
       </Routes>   
       </Router>
       
        
      </div>
  );
};

export default App;












