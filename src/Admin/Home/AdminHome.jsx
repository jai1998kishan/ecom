import React from "react";
import HeroSection from "../../Components/HeroSection";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <>
      <HeroSection title="Admin" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <img src="/img/noimg.jpg" height={280} width="100%" alt="" />
              </div>

              <div className="col-md-8">
                <h2 className="bg-primary text-center text-light p-2">
                  Admin Section
                </h2>
                <table className="table table-bordered table-striped table-hover">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>Hello Moto</td>
                    </tr>
                    <tr>
                      <th>User Name</th>
                      <td>Moto</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>moto@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>9876543211</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <Link
                          to="/update-profile"
                          className="btn btn-primary w-100"
                        >
                          Update Profile
                        </Link>
                      </td>
                    </tr>
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
