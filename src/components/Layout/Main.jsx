import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="md:mx-32">
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
