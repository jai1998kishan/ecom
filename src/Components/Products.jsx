import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  // console.log(props);
  return (
    <>
      {/* <!-- Product Start --> */}

      <div className="my-3">
        {props.title !== "Shop" ? (
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
        ) : null}

        <div className="row g-4">
          {props.data?.map((item) => {
            return (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6  mb-3">
                <div className="card">
                  <img
                    src={`${process.env.REACT_APP_SERVER}${item.pic[0]}`}
                    className="card-img-top"
                    alt="product images"
                    height={300}
                    width={"100%"}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{item.name}</h6>
                    <p className="card-text">
                      <del className="text-danger">&#8377;{item.basePrice}</del>
                      &#8377;{item.finalPrice}{" "}
                      <sup className="text-success">{item.discount}% Off</sup>
                    </p>
                    <Link to="#" className="btn btn-primary w-100">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <!-- Product End --> */}
    </>
  );
}

export default Products;
