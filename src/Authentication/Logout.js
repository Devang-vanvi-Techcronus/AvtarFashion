import React from "react";
import { clearLocalStorage } from "../Api/allApi";
import { NavLink, useNavigate } from "react-router-dom";
const Logout = () => {
  const token = clearLocalStorage("apiToken");
  const Navigate = useNavigate();
  return (
    <>
      {token},{Navigate("/")}
    </>
  );
};

export default Logout;
