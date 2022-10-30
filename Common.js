import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <div>
      <section id='header' className='d-flex  align-items-center; '>
        <div className='container-fluid '>
          
        <div className='col-10 mx-auto'>
          <div className='row '>
              <div className='col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                <h1>{props.name} <strong className='brand-name'>Raheem shah</strong></h1>
                <h2 className='my-3'> we are the teem of talented developer making website   </h2>
                <div className='mt-3'>
                  <NavLink to={props.visit} className='btn btn-primary'> {props.btname}</NavLink>
                </div>      
              </div>  
             
              <div className='col-lg-6 pt-3 pt-lg-0 order-1 order-lg-2 d-flex header-img '>

              <img src={props.imgsrc} class=" img-fluid animated  " alt="home img" />
              </div>
            </div>

          </div>
        </div>
      </section>      
    </div>
  )
}

export default Common
