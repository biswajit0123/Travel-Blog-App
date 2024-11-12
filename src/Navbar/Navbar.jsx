import React, { useEffect, useState } from "react";

function Navbar() {
  const [scroll,setScroll]=useState(false)
  useEffect(()=>{
   const handleScroll=()=>{
        if(window.scrollY>100)
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
        <nav className="w-full flex  justify-between items-center px-6 py-4 shadow-lg  shadow-gray-300 bg-white fixed z-50 opacity-80">
          <h2 className="font-serif text-3xl font-bold cursor-pointer">
            Lets_Explore
          </h2>

          <ul className="flex gap-14 items-center text-xl font-bold">
            <a
              href="#"
              className="relative text-xl font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="relative text-xl font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              Blog
            </a>

            <a
              href="#"
              className="relative text-xl font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              Map
            </a>
            <a
              href="#"
              className="relative text-xl font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-black hover:before:w-full before:transition-all before:duration-300"
            >
              Plan
            </a>

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
