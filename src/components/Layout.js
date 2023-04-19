import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { getLocalStorage } from "../Api/allApi";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column hvh-100 ">
        <Navigationbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
