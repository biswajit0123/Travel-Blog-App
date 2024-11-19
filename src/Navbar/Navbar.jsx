import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scroll,setScroll]=useState(false)
  useEffect(()=>{
   const handleScroll=()=>{
        if(window.scrollY>40)
        {
          setScroll(true)
            console.log(window.scrollY);
            
        }
        else setScroll(false)
   }
   window.addEventListener('scroll',handleScroll)
   return()=>window.removeEventListener('scroll',handleScroll)
  },[])
  return (
    <>
      {scroll &&
        <nav className="w-full hidden  justify-between items-center px-6 py-2 shadow-sm  shadow-gray-300 bg-white fixed z-50 md:flex">
          <h2 className="font-serif text-xl font-bold cursor-pointer">
            Lets_Explore
          </h2>

          <ul className="flex gap-14 items-center text-base font-bold">
            <NavLink
              to="/home"
              className="relative font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              HOME
            </NavLink>
            <NavLink
              to="/blogpage"
              className="relative font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              BLOG
            </NavLink>

            <NavLink
              to="/mappage"
              className="relative font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              MAP
            </NavLink>
            <NavLink
              to="/planspage"
              className="relative font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              PLANS
            </NavLink>

            <img
              src="src/Images/pf.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </ul>
        </nav>
      }
    </>
  );
}

export default Navbar;
