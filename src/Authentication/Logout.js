import React from "react";
import { clearLocalStorage } from "../Api/allApi";
import { NavLink, useNavigate } from "react-router-dom";
const Logout = () => {
  const token = clearLocalStorage("apiToken");
  const Navigate = useNavigate();
  return (
    <>
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
        Navigate("/")
      )}
    </>
  );
};

export default Logout;
