import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import { Outlet } from "react-router-dom";

const LayoutNoFooter = () => {
  return (
    <>
      <div className="d-flex flex-column hvh-100 ">
        <Navigationbar />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutNoFooter;
