import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <>
    <Navbar />
        <Outlet />
    </>
  );
};


export default Layout;
