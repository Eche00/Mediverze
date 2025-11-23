import React from "react";
import { Outlet } from "react-router";
import Mobilenav from "./Mobilenav";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div className="min-h-[100vh] relative sm:h-full bg-[#DEEAFD]  ">
      {/* header  */}
      <div className="md:hidden">
      <Header />

      </div>

      {/* outlet for pages and sidebar  */}
      <section className=" w-full flex md:mt-0 mt-[45px] relative  ">
        <div className="hidden md:flex fixed top-[65px] md:top-0 left-0">
          <Sidebar />
        </div>
        <div className="ml-0 md:ml-[300px] flex-1  min-h-[100vh]">
          <Outlet />
        </div>
      </section>
      {/* mobile navigation  */}
      <section className="  fixed md:hidden flex bottom-[0px] w-full">
        <Mobilenav />
      </section>
    </div>
  );
}

export default Container;
