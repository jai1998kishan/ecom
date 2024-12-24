import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";

import $ from "jquery"; //import jQuery
import "datatables.net-dt/css/dataTables.dataTables.min.css"; //import DataTables style
import "datatables.net";

import {
  deleteContactUs,
  getContactUs,
} from "../../Redux/ActionCreators/ContactUsActionCreators";
import { Link } from "react-router-dom";

export default function AdminContactUs() {
  let [data, setData] = useState([]);

  let dispatch = useDispatch();
  let ContactUsStateData = useSelector((state) => state.ContactUsStateData);

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteContactUs({ id: id }));
      getAPIData();
    }
  }

  function getAPIData() {
    dispatch(getContactUs());
    console.log(ContactUsStateData);

    if (ContactUsStateData.length) {
      setData(ContactUsStateData);
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
  }, [ContactUsStateData.length]);

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
              Contact Us{" "}
            </h5>
            <div>
              <div className="table-responsive">
                <table
                  className="table table-bordered table-hover table-striped"
                  id="DataTable"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Subject</th>
                      <th>Date</th>
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
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.subject}</td>
                          <td>{new Date(item.date).toLocaleString()}</td>
                          <td>{item.active ? "Yes" : "No"}</td>
                          <td>
                            <Link
                              to={`/admin/contactus/show/${item.id}`}
                              className="btn btn-primary"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </td>
                          <td>
                            {item.active ? null : (
                              <Link
                                to={`/admin/contactus/show/${item.id}`}
                                className="btn btn-danger"
                                onClick={() => deleteRecord(item.id)}
                              >
                                <i className="fa fa-trash"></i>
                              </Link>
                            )}
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
