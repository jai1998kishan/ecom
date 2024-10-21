import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function CategorySlider(props) {
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
      {/* <!-- Maincategory slider Start --> */}
      <div className="container-xxl py-2">
        <div className="container">
          <h1
            className="display-5 text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            Our {props.title}
          </h1>
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <OwlCarousel {...options}>
              {props.data?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={props.title === "Brand" ? "mx-5" : "mx-2"}
                  >
                    <Link
                      to={
                        props.title === "Maincategory"
                          ? `/shop?mc=${item.name}`
                          : props.title === "Subcategory"
                          ? `/shop?sc=${item.name}`
                          : `/shop?bc=${item.name}`
                      }
                    >
                      {props.title === "Brand" ? (
                        <img
                          src={`${process.env.REACT_APP_SERVER}${item.pic}`}
                          alt="maincategory images"
                          height={100}
                          width={"80%"}
                        />
                      ) : (
                        <img
                          src={`${process.env.REACT_APP_SERVER}${item.pic}`}
                          alt="maincategory images"
                          height={200}
                        />
                      )}

                      <h2 className="text-center">{item.name}</h2>
                    </Link>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}
