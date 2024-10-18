import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

import $ from "jquery"; //import jQuery
import "datatables.net-dt/css/dataTables.dataTables.min.css"; //import DataTables style
import "datatables.net";

import {
  deleteTestimonial,
  getTestimonial,
} from "../../Redux/ActionCreators/TestimonialActionCreators";

export default function AdminTestimonial() {
  let [data, setData] = useState([]);

  let dispatch = useDispatch();
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteTestimonial({ id: id }));
      getAPIData();
    }
  }

  function getAPIData() {
    dispatch(getTestimonial());
    console.log(TestimonialStateData);

    if (TestimonialStateData.length) {
      setData(TestimonialStateData);
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
  }, [TestimonialStateData.length]);

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
              Testimonial{" "}
              <Link to="/admin/testimonial/create">
                {" "}
                <i className="fa fa-plus text-light float-end"></i>{" "}
              </Link>
            </h5>
            <table
              className="table table-bordered table-hover table-striped"
              id="DataTable"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Message</th>
                  <th>Pic</th>
                  <th>Active</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <div className="testimonial-message">
                          {item.message}
                        </div>
                      </td>
                      <td>
                        <Link
                          to={`${process.env.REACT_APP_SERVER}${item.pic}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={`${process.env.REACT_APP_SERVER}${item.pic}`}
                            alt="Testimonial_Image"
                            height={50}
                            width={80}
                            className="rounded"
                          />
                        </Link>
                      </td>
                      <td>{item.active ? "Yes" : "No"}</td>
                      <td>
                        <Link
                          to={`/admin/testimonial/update/${item.id}`}
                          className="btn btn-primary"
                        >
                          <i className="fa fa-edit"></i>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteRecord(item.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
