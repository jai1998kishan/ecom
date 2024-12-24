import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";

import $ from "jquery"; //import jQuery
import "datatables.net-dt/css/dataTables.dataTables.min.css"; //import DataTables style
import "datatables.net";

import {
  getCheckout,
  updateCheckout,
} from "../../Redux/ActionCreators/CheckoutActionCreators";
import { useParams } from "react-router-dom";
import OrderProducts from "../../Components/OrderProducts";

export default function AdminCheckoutShow() {
  let [orderStatus, setOrderStatus] = useState("");
  let [paymentStatus, setPaymentStatus] = useState("");

  let [data, setData] = useState({});

  let [user, setUser] = useState({});

  let { id } = useParams();

  let [flag, setFlag] = useState(false);

  let dispatch = useDispatch();
  let CheckoutStateData = useSelector((state) => state.CheckoutStateData);

  function updateRecord() {
    if (window.confirm("Are You Sure To Change The Status : ")) {
      dispatch(
        updateCheckout({
          ...data,
          orderStatus: orderStatus,
          paymentStatus: paymentStatus,
        })
      );
      data.orderStatus = orderStatus;
      data.paymentStatus = paymentStatus;
      setFlag(!flag);
    }
  }

  async function getAPIData() {
    dispatch(getCheckout());
    // console.log(CheckoutStateData);

    if (CheckoutStateData.length) {
      let item = CheckoutStateData.find((x) => x.id === id);
      setData(item);
      setOrderStatus(item.orderStatus);
      setPaymentStatus(item.paymentStatus);

      let response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${item.user}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      response = await response.json();
      setUser(response);
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
            <h5 className="bg-primary text-center text-light p-2">
              Checkout status{" "}
            </h5>
            <table className="table table-bordered table-hover table-striped">
              <tbody>
                <tr>
                  <th>Id</th>
                  <td>{data.id}</td>
                </tr>
                <tr>
                  <th>User</th>
                  <td>
                    {user.name} <br />
                    {user.phone},{user.email} <br />
                    {user.address} <br />
                    {user.pin} {user.city} {user.state} <br />
                  </td>
                </tr>
                <tr>
                  <th>Order Status</th>
                  <td>
                    {data.orderStatus}
                    {data.orderStatus !== "Delivered" ? (
                      <>
                        <br />
                        <br />
                        <select
                          name="orderStatus"
                          onChange={(e) => setOrderStatus(e.target.value)}
                          value={orderStatus}
                          className="form-select border-primary border-3"
                        >
                          <option>Order is Placed</option>
                          <option>Order is Packed</option>
                          <option>Order is Ready to Ship</option>
                          <option>Order is in Transit</option>
                          <option>
                            Order is Reached to the Final Delivery Station
                          </option>
                          <option>Order is Out for Delivery</option>
                          <option>Delivered</option>
                        </select>
                      </>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <th>Payment Mode</th>
                  <td>{data.paymentMode}</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>
                    {data.paymentStatus}
                    {data.paymentStatus !== "Done" ? (
                      <>
                        <br />
                        <br />
                        <select
                          name="orderStatus"
                          onChange={(e) => setPaymentStatus(e.target.value)}
                          value={paymentStatus}
                          className="form-select border-primary border-3"
                        >
                          <option>Pending</option>
                          <option>Done</option>
                        </select>
                      </>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <th>Subtotal</th>
                  <td>&#8377;{data.subtotal}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>&#8377;{data.shipping}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>&#8377;{data.total}</td>
                </tr>

                <tr>
                  <th>Date</th>
                  <td>{new Date(data.date).toLocaleString()}</td>
                </tr>
                <tr>
                  <th>RPPID</th>
                  <td>{data.rppid ? data.rppid : "N/A"}</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    {data.orderStatus !== "Delivered" ||
                    data.paymentStatus !== "Done" ? (
                      <button
                        className="btn btn-primary w-100"
                        onClick={updateRecord}
                      >
                        Update Status
                      </button>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
            <h5 className="bg-primary text-light text-center p-2">
              Order Product Details
            </h5>
            <OrderProducts data={data.products} />
          </div>
        </div>
      </div>
    </>
  );
}
