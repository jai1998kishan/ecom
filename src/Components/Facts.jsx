import React from "react";

function Facts() {
  return (
    <>
      {/* <!-- Facts Start --> */}
      <div
        className="container-xxl bg-primary facts my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <i className="fa fa-users fa-3x text-light mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                10000+
              </h1>
              <p className="text-white mb-0">Happy Customers</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              <i className="fa fa-list fa-3x text-light mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                50+
              </h1>
              <p className="text-white mb-0">Top Brand</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <i className="fa fa-certificate fa-3x text-light mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                100%
              </h1>
              <p className="text-white mb-0">Original Product</p>
            </div>
            <div
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.7s"
            >
              <i className="fa fa-phone fa-3x text-light mb-3"></i>
              <h1 className="text-white mb-2" data-toggle="counter-up">
                24/7
              </h1>
              <p className="text-white mb-0">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}
    </>
  );
}

export default Facts;
