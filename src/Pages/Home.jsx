import React from "react";
import About from "../Components/About";
import Facts from "../Components/Facts";
import Features from "../Components/Features";
import Products from "../Components/Products";
import Testimonial from "../Components/Testimonial";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
  let options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    dots: false,
    // navText: [
    //   "<button class='btn btn-primary slider-btn' id='slider-btn1' ><i class='fa fa-arrow-left'></button>",
    //   "<button class='btn btn-primary slider-btn' id='slider-btn2'><i class='fa fa-arrow-right'></button>",
    // ],
    items: 1,
  };

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="row g-0 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="display-4 text-light mb-5">
                Enjoy Wonderful Day With Your Family
              </h1>
              <div className="d-flex align-items-center pt-4 animated slideInDown">
                <a
                  href=""
                  className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5"
                >
                  Read More
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h6 className="text-white m-0 ms-4 d-none d-sm-block">
                  Watch Video
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="1s">
            <div className="header-carousel">
              <OwlCarousel {...options}>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner1.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner2.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner3.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner4.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner5.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner6.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner7.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner8.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner9.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner10.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                <div className="owl-carousel-item">
                  <img
                    className="img-fluid"
                    src="img/banner11.jpg"
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Video Modal Start --> */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}

      <About />
      <Facts />
      <Features />
      <Products />
      <Testimonial />
    </>
  );
}

export default Home;
