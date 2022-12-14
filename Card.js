import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
                <div className='col-lg-4 col-md-4 mx-auto'>
                <div className="card ">
                <img src={props.imgsrc}className="card-img-top img-fluid" alt="img-service" />
                 <div className="card-body">
                   <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="#" className="btn btn-primary">{props.title}</NavLink>
                     </div>
                      </div>
                      </div>


    </>
  )
}

export default Card;
