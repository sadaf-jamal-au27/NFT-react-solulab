import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logInData} from '../../store/actionCreator/action.js'
import store from '../../store/store'


function Signup() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  let firstName="";
  let lastName="";
  let email="";
  let pass="";
  const submit=(e)=>{
    e.preventDefault();
    dispatch(logInData(firstName,lastName,email,pass))
    navigate("/login");
    console.log(store.getState());
  };
  return (
    <div><div className="form_wrapper">
    <div className="form_container">
      <div className="title_container pb-2">
        <h2 className="font-weight-bold">Sign up</h2>
      </div>
      <div className="profile-photo">
        <img src="./img/profile.png" className="img-fluid" alt='img'/>
      </div>
      <div className="row clearfix">
        <div className="">
          <form>
            <div className="row clearfix">
              <div className="col_half">
                <div className="input_field"> 
                  <input type="text" name="name" onChange={(e)=>firstName=e.target.value} placeholder="First Name" />
                </div>
              </div>
              <div className="col_half">
                <div className="input_field"> 
                  <input type="text" name="name" onChange={(e)=>lastName=e.target.value} placeholder="Last Name" required />
                </div>
              </div>
            </div>
            <div className="input_field">
              <input type="email" name="email" onChange={(e)=>email=e.target.value} placeholder="Email id" required />
            </div>
            <div className="input_field"> 
              <input type="password" id="password" onChange={(e)=>pass=e.target.value}className="password-controll form-control" placeholder="Password"/>
              <i className="toggle-password fa fa-fw fa-eye-slash"></i>
              </div>
            <input className="button" type="submit" onClick={submit} onChange="Register" />

            <div className="aready-ac mt-2 text-center">
                <p>Already have an account?<span><Link to="/login"> Login</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Signup