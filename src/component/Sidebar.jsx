import React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"; 
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className=" w-[300px] h-[100vh] bg-[#0B1A37]">
      <nav className=" flex flex-col   text-[14px] px-[20px] py-[10px] gap-[5px]">
        {/* logo */}
        <section className=" flex items-center gap-[4px]  py-[26px] ">
          <img
            src="logo.webp"
            alt="logo"
            className="w-[48px] h-[48px] object-cover bg-white rounded-full"
          />
          <h1
            className=" text-[24px] font-[600] text-blue-600 tracking-wider "
            style={{
              WebkitTextStroke: "2px white",
            }}>
            Tournex
          </h1>
        </section>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#6357F9]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95 "
          }>
          {" "}
          <FontAwesomeIcon icon={faHome} size="2xl" /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/user/courses"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#6357F9]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <FontAwesomeIcon icon={faBook} size="2xl" /><span>Courses</span>
        </NavLink>

        <NavLink
          to="/user/leaderboard"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#6357F9]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <FontAwesomeIcon icon={faTrophy} size="2xl" /> <span>Leaderboard</span>
        </NavLink>

        <NavLink
          to="/user/quiz"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#6357F9]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <FontAwesomeIcon icon={faGraduationCap} size="2xl" /> <span>Quiz</span>
        </NavLink>

        <NavLink
          to="/user/profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#6357F9]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
          }>
          {" "}
          <FontAwesomeIcon icon={faUserAstronaut} size="2xl" /> <span>Profile</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
