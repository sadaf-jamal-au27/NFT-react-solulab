import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <header className="header">
      <div className="d-block  d-desk-none  margin-center pt-3">
        <Link to="/" className="btn btn-primary">
          Sign up
        </Link>
        <Link to="/" className="btn btn-secondary">
          Login
        </Link>
      </div>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="nav-header">
            <Link to="/" className="navbar-brand header-logo">
              <img src={require("../../img/logo.png")} alt="logo" />
            </Link>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search.."
            />
            <button className="search-button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <div className="nav-menu">
            <div className="nav-button">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <input type="checkbox" id="nav-check" />
            <div className="nav-link">
              <div className=" dropdown">
                <Link
                  className=" dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Artplace
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/">
                    Artworks
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Artist
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Galleries
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Art fairs
                  </Link>
                </div>
              </div>
              <Link to="/">My Art</Link>
              <div className="d-none d-desk-block">
                
                  <>
                    <Link to="/signup" className="btn btn-primary">
                      Sign up
                    </Link>
                    <Link to="/login" className="btn btn-secondary">
                      Login
                    </Link>
                  </>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
