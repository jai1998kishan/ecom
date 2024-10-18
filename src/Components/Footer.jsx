import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker me-3"></i>A-43, Sector 16, Noida
              </p>
              <Link className="mb-2 text-light d-block" to="tel:+919876543212">
                <i className="fa fa-phone me-3"></i>+91-9876543212
              </Link>
              <Link
                className="mb-2 text-light d-block"
                to="mailto:ducart@gmail.com"
              >
                <i className="fa fa-envelope me-3"></i>ducart@gmail.com
              </Link>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/">
                Home
              </Link>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" to="/shop">
                Shop
              </Link>
              <Link className="btn btn-link" to="/features">
                Features
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/testimonials">
                Testimonials
              </Link>
              <Link className="btn btn-link" to="/contactus">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="#">
                Terms & Condition
              </Link>
              <Link className="btn btn-link" to="#">
                Refund Policy
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Ducart
                </a>
                , All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
