import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-icon-content">
            <h2>NFT Gallery</h2>
            <p className="mt-2">
              <span className="pr-2">&copy;</span>2003 NFT Gallery
            </p>
          </div>
          <div className="footer-list-content">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-titles">
                  <h2 className="mb-2">Our Platform</h2>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to="/">About us</Link>
                      </li>
                      <li>
                        <Link to="/">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-titles">
                  <h2 className="mb-2">Connect with us</h2>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to="/">Instagram</Link>
                      </li>
                      <li>
                        <Link to="/">Facebook</Link>
                      </li>
                      <li>
                        <Link to="/">Youtube</Link>
                      </li>
                      <li>
                        <Link to="/">Linkedin</Link>
                      </li>
                      <li>
                        <Link to="/">Twitter</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-titles">
                  <h2 className="mb-2">LEGAL</h2>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to="/">Community Guidelines</Link>
                      </li>
                      <li>
                        <Link to="/">Terms of services</Link>
                      </li>
                      <li>
                        <Link to="/">Price Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-titles">
                  <h2 className="mb-2">Contact</h2>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link to="/">nftgallery@gmail.com</Link>
                      </li>
                      <li>
                        <Link to="/">Support</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
