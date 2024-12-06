import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile(props) {
  let [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${localStorage.getItem(
          "userid"
        )}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      response = await response.json();
      if (response) setUser(response);
      else navigate("/login");
    })();
  });
  return (
    <div className="row">
      <h3 className="bg-primary text-center text-light p-2">{props.title}</h3>
      <div
        className={`col-md-6 d-block ${
          props.title === "Checkout" ? "d-none" : "d-block"
        }`}
      >
        {user.pic ? (
          <img
            src={`${process.env.REACT_APP_SERVER}${user.pic}`}
            height={props.title === "Admin Profile" ? 220 : 430}
            width="100%"
            alt="User Images"
          />
        ) : (
          <img
            src="/img/noimg.jpg"
            height={props.title === "Admin Profile" ? 220 : 430}
            width="100%"
            alt="noImages"
          />
        )}
      </div>
      <div className={` ${props.title === "Checkout" ? "col-12" : "col-md-6"}`}>
        {/* <h3 className="bg-primary text-center text-light p-2">{props.title}</h3> */}
        <table className="table table-bordered table-striped table-hover">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>User Name</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            {props.title !== "Admin Profile" ? (
              <>
                <tr>
                  <th>Address</th>
                  <td>{user.address}</td>
                </tr>
                <tr>
                  <th>Pin</th>
                  <td>{user.pin}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>{user.state}</td>
                </tr>
              </>
            ) : null}
            <tr>
              <td colSpan={2}>
                {" "}
                <Link to="/update-profile" className="btn btn-primary w-100">
                  Update Profile
                </Link>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
