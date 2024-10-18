import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";
import formValidators from "../../Components/Validators/formValidators";
import imageValidators from "../../Components/Validators/imageValidators";

import {
  createSubcategory,
  getSubcategory,
} from "../../Redux/ActionCreators/SubcategoryActionCreators";

export default function AdminCreateSubcategory() {
  //this for taking input from the form
  let [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
  });

  let dispatch = useDispatch();

  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);

  //this for giving error if the field in not provided
  let [errorMessage, setErrorMessage] = useState({
    name: "Name Field is Mendatory",
    pic: "Pic Field is Mendatory",
  });

  let navigate = useNavigate();

  //this is showing error message on the form
  let [show, setShow] = useState(false);

  //get the data from the form
  function getInputData(e) {
    let name = e.target.name;

    let value = e.target.files
      ? "/subcategory/" + e.target.files[0].name
      : e.target.value;

    if (name !== "active") {
      setErrorMessage((old) => {
        return {
          ...old,
          [name]: e.target.files ? imageValidators(e) : formValidators(e),
        };
      });
    }
    setData((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value,
      };
    });
  }

  function postData(e) {
    e.preventDefault();

    let error = Object.values(errorMessage).find((x) => x !== "");
    if (error) setShow(true);
    else {
      let item = SubcategoryStateData.find(
        (x) => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      );
      if (item) {
        setShow(true);
        setErrorMessage((old) => {
          return {
            ...old,
            name: "Subcategory Name is Already Exist",
          };
        });
      } else {
        //this line is used in both dummy server and real server if the form has no file field
        dispatch(createSubcategory({ ...data }));

        //but in case of real server and  if form has file field
        // var formData = new FormData()
        // formData.append("name",data.name)
        // formData.append("pic",data.pic)
        // formData.append("active",data.active)
        // dispatch(createSubcategory(formData))

        navigate("/admin/subcategory");
      }
    }
  }

  useEffect(() => {
    (() => {
      dispatch(getSubcategory());
    })();
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
              Create Subcategory{" "}
              <Link to="/admin/subcategory">
                {" "}
                <i className="fa fa-arrow-left text-light float-end"></i>{" "}
              </Link>
            </h5>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  onChange={getInputData}
                  className={`form-control border-3 ${
                    show && errorMessage.name
                      ? "border-danger"
                      : "border-primary"
                  }`}
                  placeholder="Subcategory Name"
                />
                {show && errorMessage.name ? (
                  <p className="text-danger text-capitalize">
                    {errorMessage.name}
                  </p>
                ) : null}
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Pic*</label>
                  <input
                    type="file"
                    name="pic"
                    onChange={getInputData}
                    className={`form-control border-3 ${
                      show && errorMessage.pic
                        ? "border-danger"
                        : "border-primary"
                    }`}
                    placeholder="Subcategory Name"
                  />
                  {show && errorMessage.pic ? (
                    <p className="text-danger text-capitalize">
                      {errorMessage.pic}
                    </p>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select
                    name="active"
                    className="form-select border-3 border-primary"
                    onChange={getInputData}
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}