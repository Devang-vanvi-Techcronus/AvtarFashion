import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { getLocalStorage } from "../Api/allApi";

const Layout = () => {
  const [token, setToken] = useState("");
  // console.log(token, "token");

  useEffect(() => {
    // const getToken = getLocalStorage("apiToken");
    setToken(getLocalStorage("apiToken"));
    console.log(token, "token1");
  }, []);
  return (
    <>
      <Navigationbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
