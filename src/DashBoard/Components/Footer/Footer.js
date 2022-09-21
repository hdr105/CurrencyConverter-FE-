import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {FaHeart} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">

                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>98765432100</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                    <img
                      src="https://i.ibb.co/QDy827D/ak-logo.png"
                      className="img-fluid"
                      alt="logo"
                    />
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading" >
                  <h3 >Useful Links</h3>
                </div>
                <ul>
                  <li>
                  <Link  to="/">
                Home
              </Link>
                  </li>
                  <Link className="nav-link text-white" to="/about">
                About Us
              </Link>
                </ul>
              </div>
              <Outlet />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form>
                    <input type="text" placeholder="Email Address" />
                    <button style={{color:'white' }}>
                        <FaHeart/>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area ">
        <div className="container">
          <div className="d-flex justify-content-center row">
            <div className="col-xl-6 col-lg-6 text-center">
              <div className="copyright-text">
                <p>
                  Copyright © 2018, All Right Reserved{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
