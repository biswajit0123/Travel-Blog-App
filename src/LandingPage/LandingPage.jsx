import { NavLink } from "react-router-dom";
import SlidingPage from "./SlidingPage";

function LandingPage() {
  const image = [
    "3ktnbuhr.bmp",
    "3o6vmc9n.bmp",
    "c7qyveyt.bmp",
    "e9f8948t.bmp",
    "ip3rvgiq.bmp",
    "pcmnv8i5.bmp",
    "v9wpmf0u.bmp",
  ];
  return (
    <>
      <img
        src="src/Images/4jpekc5x.bmp"
        alt=""
        className=" fixed w-full h-full"
      />
      <div className=" feedContainer  w-full m-0 p-0 overflow-hidden relative z-10">
        <header className="w-full h-16 bg-purple-100 flex items-center justify-between fixed z-40">
          <h2 className=" font-extrabold text-2xl">Lets_Explore</h2>
          <nav className="  gap-5 font-bold text-lg flex list-none">
            <NavLink
              to={"/login"}
              className=" bg-black text-green-100 p-2 rounded-2xl hidden md:block"
            >
              Log in
            </NavLink>
            <NavLink
              to={"/signup"}
              className=" bg-black text-green-100 p-2 rounded-2xl"
            >
              Sign Up
            </NavLink>
            {/* <li className=' bg-green-300'>{< Signup/>}</li> */}
          </nav>
        </header>
        <div className="mt-16 flex flex-col bg-slate-200 h-[46rem] lg:h-[51rem]">
          <section className=" grid grid-rows-3 grid-flow-col gap-2 sm:gap-3 md:gap-4">
            <div className=" sm:w-[27rem] md:w-[35rem] h-11 text-md md:text-xl lg:text-2xl sm:h-14 md:h-14 my-auto w-[19rem] bg-pink-300 mx-auto rounded-3xl flex justify-center items-center font-serif mt-4 ">
              <span>Explore Things and Make Memories</span>
            </div>
            <div className=" md:text-4xl lg:text-5xl font-extrabold mx-10 max-md:px-[10%] sm:px-[7%] lg:px-[10%] flex justify-center sm:text-3xl text-xl ">
              The journey of a thousand miles begins with a single step...!!
            </div>
            <div className="block m-auto">heyy</div>
          </section>
          <div className=" flex justify-center ">
            <button className=" bg-black text-lg sm:text-xl text-slate-300 font-extrabold p-4 rounded-3xl">
              Get Started
            </button>
          </div>
          <div className=" mt-9 max-h-min md:h-[412px] ">
            <SlidingPage />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-7 md:gap-10 w-full h-[35rem] md:h-[22rem] bg-yellow-500">
        <div className=" flex flex-row gap-12 md:gap-20 ">
            <div><img src="src/Logos/16033372.png" alt="" className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"/></div>
            <div><img src="src/Logos/1384046.png" alt="" className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"/></div>
            <div><img src="src/Logos/5968915.png" alt="" className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"/></div>
            <div><img src="src/Logos/1384037.png" alt="" className=" w-10 h-10 transition ease-linear duration-100 hover:scale-125"/></div>
          </div>
          <div className=" text-center text-xm md:text-xl font-serif mx-10 flex justify-center flex-col">
            <h1 className="mx-auto" >PRIVACY POLICY | TERMS OF USE</h1>
            <h1 className="mx-auto">YOUR INDIA PRIVACY RIGHTS | CHILDREN'S ONLINE PRIVACY POLICY</h1>
            <h1 className="mx-auto">INTEREST BASED ADS | DO NOT SELL MY INFO</h1>
          </div>
        </div>

        <div className=" flex justify-center items-center flex-col gap-7 md:gap-10 mt-5 w-full h-[35rem] md:h-[28rem] bg-transparent text-white">
          <div className="">
            <img
              src="src/Images/tnpie5hk.bmp"
              alt=""
              className=" rounded-full w-[80px] h-[80px] mx-auto ring-white ring-2"
            />
            <h1 className="text-3xl font-bold">LET'S TALK</h1>
          </div>
          <div className=" text-xl font-sans mx-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            doloremque neque, rem corporis laboriosam mollitia aspernatur beatae
            delectus consectetur dolores alias veniam necessitatibus illo
            tempore voluptates ab minus, soluta fugiat.
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
        <footer className=" w-full h-[30rem] md:h-[21rem] bg-stone-500 flex justify-center bg-opacity-95">
          <div className=" grid grid-cols-2 md:grid-cols-4 md:gap-24 ">
            <div className=" flex  flex-col gap-3 min-w-full min-h-[100vh]">
              <h1 className=" mx-auto mt-2 text-xl font-serif font-bold">
                Latest Article
              </h1>
              <div className=" font-mono font-semibold text-slate-200">
                <span>How to get used to higher altitudes</span>
                <br />
                <span>
                  finding perfect spots finding perfect spots where you don’t
                  need a{" "}
                </span>
                <br />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className=" mx-auto mt-2 text-xl font-serif  font-bold">
                News_Later
              </h1>
              <span className=" leading-9 mt-2 mx-auto font-mono font-semibold text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, animi impedit accusamus voluptatem rem dolor repellendus
                vitae laboriosam debitis facere?
              </span>
            </div>
            <div className=" -mt-[28rem] md:-mt-0 flex flex-col ">
              <h1 className="mx-auto mt-10 md:mt-2 text-xl font-serif  font-bold">
                Links
              </h1>
              <ul className=" flex flex-col leading-9 mx-auto font-mono font-semibold text-slate-200">
                <NavLink>Destination</NavLink>
                <NavLink>Experience</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Contact</NavLink>
              </ul>
            </div>
            <div className=" -mt-[28rem] md:-mt-0 flex flex-col ">
              <h1 className=" mx-auto mt-10 md:mt-2 text-xl font-serif  font-bold">
                Ratings
              </h1>
              <ul className=" flex flex-col leading-9 mx-auto font-mono font-semibold text-slate-200">
                <NavLink>Destination</NavLink>
                <NavLink>Experience</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Contact</NavLink>
              </ul>
              <span></span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
