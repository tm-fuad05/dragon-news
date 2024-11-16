import React from "react";
import { Outlet } from "react-router-dom";
import RightNav from "./layout-component/RightNav";
import Header from "./Header";

const NewsDetails = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header className="my-7">
        <Header></Header>
      </header>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
