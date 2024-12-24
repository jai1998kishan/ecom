import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";

import $ from "jquery"; //import jQuery
import "datatables.net-dt/css/dataTables.dataTables.min.css"; //import DataTables style
import "datatables.net";

import { getCheckout } from "../../Redux/ActionCreators/CheckoutActionCreators";
import { Link } from "react-router-dom";

export default function AdminCheckout() {
  let [data, setData] = useState([]);

  let dispatch = useDispatch();
  let CheckoutStateData = useSelector((state) => state.CheckoutStateData);

  function getAPIData() {
    dispatch(getCheckout());
    console.log(CheckoutStateData);

    if (CheckoutStateData.length) {
      setData(CheckoutStateData);
    } else {
      setData([]);
    }

    let time = setTimeout(() => {
      $("#DataTable").DataTable();
    }, 500);
    return time;
  }

  useEffect(() => {
    let time = getAPIData();
    return () => clearTimeout(time);
  }, [CheckoutStateData.length]);

  return (
    <>
      <HeroSection title="Admin" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <h5 className="bg-primary text-center text-light p-2">Checkout </h5>
            <div>
              <div className="table-responsive">
                <table
                  className="table table-bordered table-hover table-striped"
                  id="DataTable"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Order Status</th>
                      <th>Payment Mode</th>
                      <th>Payment Status</th>
                      <th>Subtotal</th>
                      <th>Shipping</th>
                      <th>Total</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.user}</td>
                          <td>{item.orderStatus}</td>
                          <td>{item.paymentMode}</td>
                          <td>{item.paymentStatus}</td>
                          <td>&#8377;{item.subtotal}</td>
                          <td>&#8377;{item.shipping}</td>
                          <td>&#8377;{item.total}</td>
                          <td>{new Date(item.date).toLocaleString()}</td>
                          <td>
                            <Link
                              to={`/admin/checkout/show/${item.id}`}
                              className="btn btn-primary"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
