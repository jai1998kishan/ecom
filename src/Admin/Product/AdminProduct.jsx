import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

import $ from "jquery"; //import jQuery
import "datatables.net-dt/css/dataTables.dataTables.min.css"; //import DataTables style
import "datatables.net";

import {
  deleteProduct,
  getProduct,
} from "../../Redux/ActionCreators/ProductActionCreators";

export default function AdminProduct() {
  let [data, setData] = useState([]);

  let dispatch = useDispatch();
  let ProductStateData = useSelector((state) => state.ProductStateData);

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteProduct({ id: id }));
      getAPIData();
    }
  }

  function getAPIData() {
    dispatch(getProduct());
    console.log(ProductStateData);

    if (ProductStateData.length) {
      setData(ProductStateData);
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
  }, [ProductStateData.length]);

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
              Product{" "}
              <Link to="/admin/product/create">
                {" "}
                <i className="fa fa-plus text-light float-end"></i>{" "}
              </Link>
            </h5>

            <div className="table-responsive">
              <table
                className="table table-bordered table-hover table-striped"
                id="DataTable"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Maincategory</th>
                    <th>Subcategory</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Base Price</th>
                    <th>Discount</th>
                    <th>Final Price</th>
                    <th>Stock</th>
                    <th>Stock Quantity</th>
                    <th>Pic</th>
                    <th>Active</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.maincategory}</td>
                        <td>{item.subcategory}</td>
                        <td>{item.brand}</td>
                        <td>{item.color}</td>
                        <td>{item.size}</td>
                        <td>&#8377;{item.basePrice}</td>
                        <td>&#8377;{item.discount}</td>
                        <td>&#8377;{item.finalPrice}</td>
                        <td
                          className={`${
                            item.stock ? "text-success" : "text-danger"
                          }`}
                        >
                          {item.stock ? "Yes" : "No"}
                        </td>
                        <td className="text-center">{item.stockQuantity}</td>

                        <td>
                          <div style={{ width: 400 }}>
                            {item.pic?.map((x, index) => {
                              return (
                                <Link
                                  key={index}
                                  to={`${process.env.REACT_APP_SERVER}${x}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={`${process.env.REACT_APP_SERVER}${x}`}
                                    alt="Product_Image"
                                    height={50}
                                    width={50}
                                    className="rounded me-2"
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </td>

                        <td>{item.active ? "Yes" : "No"}</td>
                        <td>
                          <Link
                            to={`/admin/product/update/${item.id}`}
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
      </div>
    </>
  );
}
