import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Widget/Navbar/Navbar";


const   MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  );
};

export default MainLayout;