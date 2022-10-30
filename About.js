import React from 'react';
import web from '../src/image/img1.jpg';
import Common from './Common';
import Footer from'./Footer';

const About = () => {
  return (
    <div>
     <Common name=" welcome about page" 
     imgsrc={web} 
     visit='/contect'
      btname='Contect Now' />

<Footer/>
    </div>
  )     
}

export default About;
