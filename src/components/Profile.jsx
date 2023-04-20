import React from "react";
import { isAuthenticated } from "../utils/common";

const { name, email, createdAt } = JSON.parse(isAuthenticated().user);
const Profile = () => {
  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5 ">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">
                {isAuthenticated().user ? name : ""}
              </span>
              <span className="text-black-50">
                {isAuthenticated().user ? email : ""}
              </span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={isAuthenticated().user ? name : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Created at</label>
                  <input
                    type="text"
                    className="form-control"
                    value={isAuthenticated().user ? createdAt.slice(0, 10) : ""}
                    placeholder="create at"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email id"
                    value={isAuthenticated().user ? email : ""}
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
