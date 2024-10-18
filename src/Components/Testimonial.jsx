import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  let options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
      "<button class='btn btn-primary slider-btn' id='slider-btn1' ><i class='fa fa-arrow-left'></button>",
      "<button class='btn btn-primary slider-btn' id='slider-btn2'><i class='fa fa-arrow-right'></button>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      4000: {
        items: 5,
      },
    },
  };
  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-2">
        <div className="container">
          <h1
            className="display-5 text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            Our Clients Say!
          </h1>
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <OwlCarousel {...options}>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                  src="img/testimonial-1.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                  src="img/testimonial-2.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                  src="img/testimonial-3.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                  src="img/testimonial-2.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4"
                  src="img/testimonial-3.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}

export default Testimonial;
