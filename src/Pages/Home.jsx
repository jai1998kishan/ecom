import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import About from "../Components/About";
import Facts from "../Components/Facts";
// import Features from "../Components/Features";
import Products from "../Components/Products";
import Testimonial from "../Components/Testimonial";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

import { getMaincategory } from "../Redux/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../Redux/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../Redux/ActionCreators/BrandActionCreators";

import { getProduct } from "../Redux/ActionCreators/ProductActionCreators";

import CategorySlider from "../Components/CategorySlider";

function Home() {
  let [maincategory, setMaincategory] = useState([]);
  let [subcategory, setSubcategory] = useState([]);
  let [brand, setBrand] = useState([]);

  let [product, setProduct] = useState([]);

  let dispatch = useDispatch();

  let ProductStateData = useSelector((state) => state.ProductStateData);
  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);

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

  useEffect(() => {
    (() => {
      dispatch(getMaincategory());
      if (MaincategoryStateData.length)
        setMaincategory(MaincategoryStateData.filter((x) => x.active));
    })();
  }, [MaincategoryStateData.length]);

  useEffect(() => {
    (() => {
      dispatch(getSubcategory());
      if (SubcategoryStateData.length)
        setSubcategory(SubcategoryStateData.filter((x) => x.active));
    })();
  }, [SubcategoryStateData.length]);

  useEffect(() => {
    (() => {
      dispatch(getBrand());
      if (BrandStateData.length)
        setBrand(BrandStateData.filter((x) => x.active));
    })();
  }, [BrandStateData.length]);

  useEffect(() => {
    (() => {
      dispatch(getProduct());
      if (ProductStateData.length)
        setProduct(ProductStateData.filter((x) => x.active));
    })();
  }, [ProductStateData.length]);

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="row g-0 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
              <h2 className=" text-light mb-5 text-center">
                Checkout Our Lastest Fashion Products of Top Brand
              </h2>
              <div className=" pt-4 animated slideInDown text-center">
                <Link
                  to="/shop"
                  className="btn btn-primary py-sm-3 px-3 px-sm-5"
                >
                  Shop Now
                </Link>
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

      {/* maincategory  */}
      <CategorySlider data={maincategory} title="Maincategory" />

      {/* product  */}
      <div className="container">
        {maincategory?.map((item) => {
          console.log(product);
          return (
            <Products
              key={item.id}
              title={item.name}
              data={product
                .filter((x) => x.maincategory === item.name)
                .slice(0, 12)}
            />
          );
        })}
      </div>

      <About />
      <CategorySlider data={subcategory} title="Subcategory" />
      <Facts />
      <CategorySlider data={brand} title="Brand" />

      {/* <Features /> */}

      <Testimonial />
    </>
  );
}

export default Home;
