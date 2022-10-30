import React from 'react';
import { useState } from 'react';
import Footer from'./Footer';

const Contect = () => {

  const [data, setDeta]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:""


  });
  const InputEvent=(event)=>{
    const {name,value} = event.target;
    setDeta((preVel)=>{
        return{
          ...preVel,
          [name]:value,
        };
        

    });

  };



const formSubmit=(e)=>{
  e.prventDefault();
  // alert(`My Name is ${data.fullname}. my mobile number is ${data.phone} and mu email ${data.email} , Here I want to say ${data.msg} `);


}



  return (
    <>
    <div className='my-5 '>
      <h1 className='text-center'>welcome Contect Page</h1>
    </div>

      <div className='container contect_div' >
        <div className='row'>
      <div className='col-lg-6 col-md-6 mx-auto'>


        <form onSubmit={formSubmit}>
 

        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
  name='fullname'
  value={data.fullname}
  onChange={InputEvent}
  
  placeholder="Enter your name" />
</div>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" 
    name='phone'
    value={data.phone}
    onChange={InputEvent}
  placeholder="Enter your Phone Number" />
</div>


<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
    name='email'
    value={data.email}
    onChange={InputEvent}

  placeholder="name@example.com" />
</div>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
   name='msg'
   value={data.msg}
   onChange={InputEvent}
  
  ></textarea>
</div>
<div class="mb-3 col-12">
  <button className='btn btn-outline-primary' type='submit'onClick={()=>alert(`My Name is ${data.fullname}. my mobile number is ${data.phone} and mu email ${data.email} , Here I want to say ${data.msg} `)} > Submit form</button>
</div>



        </form>
      </div>
        </div>
      </div>
      <Footer/>

      </>
 
  )
}

export default Contect;
