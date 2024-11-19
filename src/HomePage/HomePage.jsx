import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SlidingBg from "./SlidingBg";
import { NavLink } from "react-router-dom";
import HomeNav from "./HomeNav";
import SlidingPage from "../LandingPage/SlidingPage";

function HomePage() {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="overflow-hidden p-0 m-0 flex flex-col">
      <Navbar />
      <SlidingBg />
      {/* Middle Section */}
      {/* homeNavv */}
      <HomeNav/>
      <div
        className={` relative z-30 text-2xl font-mono font-medium text-white flex flex-col gap-8 justify-center items-center w-full h-screen transition duration-1000 transform ${
          visibility ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className=" text-4xl font-extrabold font-serif ">WANDERLUST</h1>
        <div className=" mx-10 md:mx-20 lg:mx-60 text-base text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          illum nihil quasi cum repudiandae velit, aperiam nesciunt libero
          voluptate cupiditate iste quas ullam. Fugit incidunt deleniti est
          eveniet obcaecati tempore.
        </div>
        <h2 className=" font-bold bg-black p-3 rounded-3xl hover:bg-slate-700 hover:ring-2 hover:ring-blue-600">
          create post
        </h2>
      </div>
      <div className=" -mt-48 max-h-min md:h-[412px] ">
            <SlidingPage />
          </div>

      <div className=" relative flex justify-center items-center flex-col gap-7 md:gap-10 w-full h-[35rem] md:h-[22rem] bg-purple-300">

        {/* app logos */}
          <div
            className={` flex flex-row gap-12 md:gap-20 transition duration-500 transform ${
              visibility
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <img
                src="src/Logos/16033372.png"
                alt=""
                className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"
              />
            </div>
            <div>
              <img
                src="src/Logos/1384046.png"
                alt=""
                className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"
              />
            </div>
            <div>
              <img
                src="src/Logos/5968915.png"
                alt=""
                className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"
              />
            </div>
            <div>
              <img
                src="src/Logos/1384037.png"
                alt=""
                className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"
              />
            </div>
          </div>
          <div
            className={` text-center text-xm md:text-xl font-serif mx-10 flex justify-center flex-col transition duration-500 transform ${
              visibility
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="mx-auto">PRIVACY POLICY | TERMS OF USE</h1>
            <h1 className="mx-auto">
              YOUR INDIA PRIVACY RIGHTS | CHILDREN'S ONLINE PRIVACY POLICY
            </h1>
            <h1 className="mx-auto">
              INTEREST BASED ADS | DO NOT SELL MY INFO
            </h1>
          </div>
        </div>
        <div className="  gap-7 md:gap-10 mt-5 w-full h-[35rem] md:h-[28rem]">
          <div
            className={`flex justify-center items-center flex-col gap-7 bg-transparent text-white transition duration-500 transform ${
              visibility
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="">
              <img
                src="src/Images/tnpie5hk.bmp"
                alt=""
                className=" rounded-full w-[80px] h-[80px] mx-auto ring-white ring-2"
              />
              <h1 className="text-3xl font-bold">LET'S TALK</h1>
            </div>
            <div className=" text-xl font-sans mx-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              doloremque neque, rem corporis laboriosam mollitia aspernatur
              beatae delectus consectetur dolores alias veniam necessitatibus
              illo tempore voluptates ab minus, soluta fugiat. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Mollitia quam eum corrupti
              illum. Placeat voluptas doloribus consequuntur iure quos. Facere
              autem modi natus numquam quibusdam. Excepturi quod necessitatibus
              magnam voluptatibus.
            </div>
            <div className=" flex flex-row gap-12 md:gap-40 text-xl">
              <div>Email</div>
              <div>contact</div>
              <div>instagram</div>
            </div>
            <button className=" text-lg text-black bg-slate-300 rounded-xl w-44 h-11 ring-2 ring-white hover:bg-slate-400 ">
              Book Now
            </button>
          </div>
        </div>
    </div>

  );
}

export default HomePage;
