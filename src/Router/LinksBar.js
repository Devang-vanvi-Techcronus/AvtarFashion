import React from "react";
import { NavLink, Link } from "react-router-dom";
import { getLocalStorage } from "../Api/allApi";

const LinksBar = () => {
  const token = getLocalStorage("apiToken");
  console.log(token, "token");

  return (
    <>
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>

        <li className="nav-item">
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>

        <li className="nav-item">
          <NavLink to="/events" className="nav-link">
            Events
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contactus" className="nav-link">
            contact us
          </NavLink>
        </li>
        {!token ? (
          <>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <NavLink to="/logout" className="nav-link">
              Logout
            </NavLink>
          </li>
        )}

        {/* {!isAutheticated() && (
          <>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </li>
          </>
        )}
        {isAutheticated() && (
          <li className="nav-item">
            <NavLink to="/logout" className="nav-link">
              Logout
            </NavLink>
          </li>
        )} */}

        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-search me-2"></i>
            <input type="text" className="searchbox" name="search" />
          </a>
        </li>
      </ul>
      <div className="d-flex sim d-flex justify-content-around align-items-center">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart{" "}
              <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LinksBar;
