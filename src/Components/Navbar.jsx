import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div
        className="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-envelope text-primary me-2"></small>
              <Link
                to="mailto:ducart@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ducart@gmail.com
              </Link>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone text-primary me-2"></small>
              <Link to="tel:+91-9876543212" target="_blank" rel="noreferrer">
                +91-9876543212
              </Link>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-whatsapp text-primary me-2"></small>
              <Link
                to="http://wa.me/+91-9876543212"
                target="_blank"
                rel="noreferrer"
              >
                +91-9876543212
              </Link>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-0"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to="/" className="navbar-brand p-0">
          <i className="fa fa-shopping-bag text-primary fs-1 me-2"></i>
          <h1 className="m-0 text-primary">Ducart</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse py-4 py-lg-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <NavLink to="/" className="nav-item nav-link ">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/shop" className="nav-item nav-link">
              Shop
            </NavLink>
            <NavLink to="/features" className="nav-item nav-link">
              Features
            </NavLink>
            <NavLink to="/testimonials" className="nav-item nav-link">
              Testimonials
            </NavLink>
            <NavLink to="/contactus" className="nav-item nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/admin" className="nav-item nav-link">
              Admin
            </NavLink>

            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="animal.html" className="dropdown-item">
                  Our Animals
                </a>
                <a href="membership.html" className="dropdown-item">
                  Membership
                </a>
                <a href="visiting.html" className="dropdown-item">
                  Visiting Hours
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div> */}
          </div>
          <a href="" className="btn btn-primary">
            Login<i className="fa  ms-3"></i>
          </a>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
}

export default Navbar;
