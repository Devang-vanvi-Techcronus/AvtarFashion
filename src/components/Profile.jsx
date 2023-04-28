import React from "react";
import { isAuthenticated } from "../utils/common";
import { useEffect, useState } from "react";
import PROFILE from "../assets/image/profile.jpg";

const Profile = () => {
  const [dataStorage, setDataStorage] = useState("Hello");
  useEffect(() => {
    let data = JSON.parse(isAuthenticated().user);
    setDataStorage(data);
  }, []);
  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5 ">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <div class="profile-pic">
                <label class="-label" for="file">
                  <i class="fa fa-camera me-2" aria-hidden="true"></i>
                  <span>Change Image</span>
                </label>
                <input id="file" type="file" onchange="loadFile(event)" />
                <img
                  width="200px"
                  className="rounded-circle mt-5"
                  src={PROFILE}
                />
              </div>

              <span className="font-weight-bold">{dataStorage?.name}</span>
              <span className="text-black-50">{dataStorage?.email}</span>
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
                    value={dataStorage?.name}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Created at</label>
                  <input
                    type="text"
                    className="form-control"
                    value={dataStorage?.createdAt?.slice(0, 10)}
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
                    value={dataStorage?.email}
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
