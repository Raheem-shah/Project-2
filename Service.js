import React from 'react'
import Card from './Card';
import Sdata from './Sdata';
import Footer from'./Footer';
const Service = () => {
  return (
    <>
    <div className='my-5'>
    <h1 className='text-center'>Our Service</h1>
    </div>


      <div className='container-fluid '>  
      <div className='col-10 mx-auto'>
        <div className='row gy-3'>
          {Sdata.map((val, ind) => { 
                  return <Card key={ind}
                  imgsrc={val.imgsrc}
                   title={val.title} />})}


 </div>


         
        </div>

      </div>

   <Footer/>
    
    </>
  )
}

export default Service;
