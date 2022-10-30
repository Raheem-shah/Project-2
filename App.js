import React from 'react';
import About from './About';
import Contect from './Contect';
import Home from './Home';
import Service from './Service'; 
import Navbar from './Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

const App = () => {
  return (
    <> 
     
<Router>
<Navbar />
     
      <Routes>
      
        <Route  path='/'  exect element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/service' element={<Service/>} />
        <Route  path='/contect' element={<Contect/>} />
       
      </Routes>
      
    </Router>
   


      </>
    
  )
}


export default App;
