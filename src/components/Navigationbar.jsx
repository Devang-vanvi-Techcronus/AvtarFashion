import React from "react";
import { NavLink } from "react-router-dom";
import LinksBar from "../Router/LinksBar";

const Navigationbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
        <div className="wrapper"></div>
        <div className="container-fluid all-show">
          <a className="navbar-brand" href="#">
            <i className="fa fa-buysellads fa-lg me-2" aria-hidden="true"></i>
            AvtarFashion
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div className="d-flex justify-content-around align-items-center w-100">
              <LinksBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigationbar;
