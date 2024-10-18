import React from "react";

import About from "../Components/About";
import Testimonial from "../Components/Testimonial";
import HeroSection from "../Components/HeroSection";
import Features from "../Components/Features";

function ContactUsPage() {
  return (
    <>
      <HeroSection title="Contact Us" />

      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100 bg-light d-flex align-items-center p-5">
                <div className="btn-lg-square bg-white flex-shrink-0">
                  <i className="fa fa-map-marker-alt text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2">
                    <span className="text-primary me-2">#</span>Address
                  </p>
                  <h5 className="mb-0">123 Street, New York, USA</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="h-100 bg-light d-flex align-items-center p-5">
                <div className="btn-lg-square bg-white flex-shrink-0">
                  <i className="fa fa-phone-alt text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2">
                    <span className="text-primary me-2">#</span>Call Now
                  </p>
                  <h5 className="mb-0">+012 345 6789</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100 bg-light d-flex align-items-center p-5">
                <div className="btn-lg-square bg-white flex-shrink-0">
                  <i className="fa fa-envelope-open text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2">
                    <span className="text-primary me-2">#</span>Mail Now
                  </p>
                  <h5 className="mb-0">info@example.com</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p>
                <span className="text-primary me-2">#</span>Contact Us
              </p>
              <h1 className="display-5 mb-4">
                Have Any Query? Please Contact Us!
              </h1>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-light border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100" style={{ minHeight: "400px" }}>
                <iframe
                  className="rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      <Features />
      <Testimonial />
      <About />
    </>
  );
}

export default ContactUsPage;
