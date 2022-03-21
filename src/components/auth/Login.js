import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, isNotLoggedIn } from "../../store/actionCreator/action.js";

function Login() {
  const navigate = useNavigate();
  const logInUser = useSelector((state) => state.loginData);
  const validUser = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  let userName = "";
  let pass = "";

  const submit = (e) => {
    e.preventDefault();
    // if(!logInUser.length()){
    //   navigate("/signup");
    // }
    logInUser.forEach((user) => {
      if (user.email === userName && user.pwd === pass) {
        dispatch(isLoggedIn());
        console.log(validUser);
        navigate("/");
        return;
      } else {
        dispatch(isNotLoggedIn());
        navigate("/signup");
        console.log(validUser);
      }
    });
  };
  return (
    <div>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container pb-2">
            <h2 className="font-weight-bold">Login</h2>
          </div>
          <div className="profile-photo">
            <img src="./img/profile.png" className="img-fluid" alt="img" />
          </div>
          <div className="row clearfix">
            <div className="w-100">
              <form>
                <div className="input_field">
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => (userName = e.target.value)}
                    placeholder="Mobile number / Email id"
                    required
                  />
                </div>
                <div className="d-flex input-mobile"></div>
                <div className="input_field mb-2">
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => (pass = e.target.value)}
                    className="password-controll form-control"
                    placeholder="Password"
                  />
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </div>

                <div className="title forget-link pb-3">
                  <Link to="/">Forgot password?</Link>
                </div>

                <input
                  className="button"
                  onClick={submit}
                  type="submit"
                  value="Login"
                />

                <div className="aready-ac mt-2 text-center">
                  <p>
                    Don't have an account?
                    <span>
                      <Link to="/signup"> Sign up</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
