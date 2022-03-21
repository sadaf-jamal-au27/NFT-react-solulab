import React from 'react'
import profile from './img/profile.png'
import image from "./img/art1.jpg"
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <div className="padb-30 demo">
    <div className="container-fluid  ">
       <div className="feature-all">
          <div className="featured-content w-100 d-flex justify-content-between">
             <h2> Art Details
             </h2>
             <div className="dropdown dot-side">
                <button className="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                   <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <Link className="dropdown-item" to="/"> Share</Link>
                   <Link className="dropdown-item" to="/">Report</Link>

                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="container-fluid ">
    
       <div className="row">
       
          <div className="col-lg-7">
             <div className="owl-slider">
                <div className="owl-carousel singleitem">
                   <div className="item">
                      <Link to="/artlist-b-login.html">
                         <div className="art-text">
                           

                         </div>
                      </Link>
                   </div>

                   
                   
                   
                   
                   <div className="item">
                      <Link to="/artlist-d-login.html">
                         <div className="art-text">
                            <img src={image} alt=""/>

                         </div>
                      </Link>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-lg-5">
        

             <div className="profiledeatails">
                <div className="d-flex align-items-center justify-content-between">
                   <div className="profile d-flex align-items-center">

                      <img src={profile} alt=""/>
                      <h2 className="ml-3">Peter cole </h2>
                   </div>
                   <div className="d-flex">
                      <button type="" className="btn-primary btn followbtn">follow</button>

                   </div>

                </div>
                <div className="feature-text">
                   <div className="d-flex  align-items-center">
                      <h3>
                         Owned by <span className="ml-2"><b>Sergio ramos
                            </b></span>
                      </h3>



                   </div>
                   <div className="mt-3">
                      <h3 className="product-title">
                         Old Fashioned Vegetable from Campbell's Soup II, 1969


                      </h3>
                      <p className="mt-2">Screenprint</p>
                      <p>35 × 23 in</p>
                      <p>88.9 × 58.4 cm</p>
                      <p>Edition of 250</p>
                      <hr/>
                   </div>
                   <div className="d-flex mb-3 align-items-center justify-content-between">
                      <h3>
                         Price
                      </h3>


                      <h4 className="ml-2  "><b>$3000
                         </b></h4>




                   </div>
                   <button type="" className="btn btn-primary w-100" data-toggle="modal" data-target="#buynow">Buy now
                   </button>
                   <h3 className="text-underline mt-3"><Link to="/">Suppoment gallery</Link>
                   </h3>
                   <h3 className="text-underline mt-3"><Link to="/">Art fair name</Link>

                   </h3>
                </div>




             </div>


          </div>



       </div>
    </div>
 </div>
</>
 

 

  )
}

export default Banner