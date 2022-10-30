import React from 'react';
import Common from './Common';
 import web from '../src/image/img3.jpg';
 import Footer from'./Footer';
const Home = () => {
  return (
    <div>
      <Common 
      name=" Grow your Business with " 
     imgsrc={web} 
     visit='/about'
      btname='Get Started'/>
       
       <Footer/>
       

    </div>
  )
}

export default Home;
