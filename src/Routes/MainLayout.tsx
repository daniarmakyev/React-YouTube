import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Widget/Navbar/Navbar";
import "../Styles/MainStyles.css"
import SideBar from "../Widget/SideBar/SideBar";

const   MainLayout = () => {
  return (
    <div className="container">
        <Navbar/>
        <SideBar/>
        <Outlet/>
    </div>
  );
};

export default MainLayout;