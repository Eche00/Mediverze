import React from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"; 
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

function Mobilenav() {
  return (
    <div className="w-full py-2  shadow-black shadow-2xl  rounded-t-[30px] bg-[#0B1A37] ">
      {/* container  */}
      <nav className=" h-[55px] py-[10px] px-[20px] flex items-center justify-between w-full   text-[12px] ">
        {/* home  */}
        <NavLink
          to="/user"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px]  font-extrabold py-[6px]  rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-500 font-bold transition-all duration-300"
          }>
          {" "}
          <FontAwesomeIcon icon={faHome} size="2xl" /> 
        </NavLink>

        {/* courses  */}
        <NavLink
          to="/user/courses"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px]   font-extrabold py-[6px]  rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-500 font-bold transition-all duration-300"
          }>
          {" "}
          <FontAwesomeIcon icon={faBook} size="2xl" />
        </NavLink>

        {/* leaderboard  */}
        <NavLink
          to="/user/leaderboard"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px]   font-extrabold py-[6px]  rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-500 font-bold transition-all duration-300"
          }>
          {" "}
          <FontAwesomeIcon icon={faTrophy} size="2xl" />{" "}
        </NavLink>

        {/* quiz */}
        <NavLink
          to="/user/quiz"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px]   font-extrabold py-[6px]  rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-500 font-bold transition-all duration-300"
          }>
          {" "}
          <FontAwesomeIcon icon={faGraduationCap} size="2xl" />{" "}
        </NavLink>

        {/* profile  */}
        <NavLink
          to="/user/profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px]   font-extrabold py-[6px]  rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-500 font-bold transition-all duration-300"
          }>
          {" "}
          <FontAwesomeIcon icon={faUserAstronaut} size="2xl" />{" "}
        </NavLink>
      </nav>
    </div>
  );
}

export default Mobilenav;
