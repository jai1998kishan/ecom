import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

import $ from "jquery"; //import jQuery
import "datatables.net-dt/css/dataTables.dataTables.min.css"; //import DataTables style
import "datatables.net";

import {
  deleteSubcategory,
  getSubcategory,
} from "../../Redux/ActionCreators/SubcategoryActionCreators";

export default function AdminSubcategory() {
  let [data, setData] = useState([]);

  let dispatch = useDispatch();
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteSubcategory({ id: id }));
      getAPIData();
    }
  }

  function getAPIData() {
    dispatch(getSubcategory());
    console.log(SubcategoryStateData);

    if (SubcategoryStateData.length) {
      setData(SubcategoryStateData);
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
  }, [SubcategoryStateData.length]);

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
              Subcategory{" "}
              <Link to="/admin/subcategory/create">
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
                        <Link
                          to={`${process.env.REACT_APP_SERVER}${item.pic}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={`${process.env.REACT_APP_SERVER}${item.pic}`}
                            alt="Subcategory_Image"
                            height={50}
                            width={80}
                            className="rounded"
                          />
                        </Link>
                      </td>
                      <td>{item.active ? "Yes" : "No"}</td>
                      <td>
                        <Link
                          to={`/admin/subcategory/update/${item.id}`}
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
