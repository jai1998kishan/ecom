import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  // console.log(props);
  return (
    <>
      {/* <!-- Product Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-end wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <p>
                <span className="text-primary me-2">#</span>Our {props.title}{" "}
                Products
              </p>
              <h1 className="display-5 mb-0">
                Checkout Our <span className="text-primary">Ducart</span>{" "}
                {props.title} Product
              </h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <Link
                className="btn btn-primary py-3 px-5"
                to={`/shop?mc=${props.title}`}
              >
                Explore More Product
              </Link>
            </div>
          </div>
          <div className="row g-4">
            {props.data?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-3 col-md-4 wow fadeInUp mb-3"
                  data-wow-delay="0.1s"
                >
                  <div className="col-12">
                    <a
                      className="animal-item"
                      href={`${process.env.REACT_APP_SERVER}${item.pic[0]}`}
                      data-lightbox="animal"
                    >
                      <div className="position-relative">
                        <img
                          className="img-fluid"
                          src={`${process.env.REACT_APP_SERVER}${item.pic[0]}`}
                          alt="product images"
                          style={{ height: 250, width: "100%" }}
                        />
                        <div className="animal-text p-4">
                          <p className="text-white small text-uppercase mb-0">
                            {item.name}
                          </p>
                          <h5 className="text-white mb-0">
                            <del className="text-danger">
                              &#8377;{item.basePrice}
                            </del>
                            &#8377;{item.finalPrice}{" "}
                            <sup>{item.discount}% Off</sup>
                          </h5>
                          <Link
                            to={`/product/${item.id}`}
                            className="btn btn-primary w-100"
                          >
                            {" "}
                            <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                          </Link>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- Product End --> */}
    </>
  );
}

export default Products;
