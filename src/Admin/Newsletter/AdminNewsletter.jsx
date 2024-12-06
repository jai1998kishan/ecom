import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";

import $ from "jquery"; //import jQuery
import "datatables.net-dt/css/dataTables.dataTables.min.css"; //import DataTables style
import "datatables.net";

import {
  deleteNewsletter,
  getNewsletter,
  updateNewsletter,
} from "../../Redux/ActionCreators/NewsletterActionCreators";

export default function AdminNewsletter() {
  let [data, setData] = useState([]);

  let [flag, setFlag] = useState(false);

  let dispatch = useDispatch();
  let NewsletterStateData = useSelector((state) => state.NewsletterStateData);

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteNewsletter({ id: id }));
      getAPIData();
    }
  }

  function updateRecord(id) {
    if (window.confirm("Are You Sure To Change The Status : ")) {
      let item = NewsletterStateData.find((x) => x.id === id);
      let index = NewsletterStateData.findIndex((x) => x.id === id);
      dispatch(updateNewsletter({ ...item, active: !item.active }));
      data[index].active = !data[index].active;
      setFlag(!false);
    }
  }

  function getAPIData() {
    dispatch(getNewsletter());
    console.log(NewsletterStateData);

    if (NewsletterStateData.length) {
      setData(NewsletterStateData);
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
  }, [NewsletterStateData.length]);

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
              Newsletter{" "}
            </h5>
            <table
              className="table table-bordered table-hover table-striped"
              id="DataTable"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Active</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td
                        onClick={() => updateRecord(item.id)}
                        title="Click to Change Status"
                      >
                        {item.active ? "Yes" : "No"}
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
