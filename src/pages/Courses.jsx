import React from "react";
import Hero from "../coursescomponent/Hero";
import { NavLink, Outlet } from "react-router";

function Courses() {
  return <div>
    <Hero/>
    <div className="w-[90%] mx-auto sm:pt-[220px] pt-[120px]">
      <div className="flex items-center gap-2 text-[14px] font-[300]">
        <NavLink to="/user/courses" className={({isActive})=> isActive ? "bg-[#6357F9] py-2 px-3 rounded-[20px] text-white" : " bg-white py-2 px-3 rounded-[20px]"}>All</NavLink>
        <NavLink to="/user/courses/200l" className={({isActive})=> isActive ? "bg-[#6357F9] py-2 px-5 rounded-[20px] text-white" : " bg-white py-2 px-5 rounded-[20px]"}>200 L</NavLink>
        <NavLink to="/user/courses/300l" className={({isActive})=> isActive ? "bg-[#6357F9] py-2 px-5 rounded-[20px] text-white" : " bg-white py-2 px-5 rounded-[20px]"}>300 L</NavLink>
        <NavLink to="/user/courses/400l" className={({isActive})=> isActive ? "bg-[#6357F9] py-2 px-5 rounded-[20px] text-white" : " bg-white py-2 px-5 rounded-[20px]"}>400 L</NavLink>
      </div>
      <Outlet />
    </div>
  </div>;
}

export default Courses;
