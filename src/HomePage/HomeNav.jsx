import React from "react";
import { NavLink } from "react-router-dom";

function HomeNav() {
  return (
    // <div className=" w-full m-0 p-0 overflow-hidden">
    
      <ul className=" text-white justify-end items-center flex-row gap-20 font-serif text-sm  z-40 top-4  w-full mt-6 md:flex hidden">
        <NavLink
          to={"/home"}
          className="relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-white hover:before:w-full before:transition-all before:duration-300"
        >
          HOME
        </NavLink>
        <NavLink
          to={"/blogpage"}
          className="relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-white hover:before:w-full before:transition-all before:duration-300"
        >
          BLOG
        </NavLink>
        <NavLink
          to={"/mappage"}
          className="relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-white hover:before:w-full before:transition-all before:duration-300"
        >
          MAP
        </NavLink>
        <NavLink
          to={"/planspage"}
          className="relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-white hover:before:w-full before:transition-all before:duration-300 mr-5"
        >
          PLANS
        </NavLink>
      </ul>
    // </div>
  );
}

export default HomeNav;
