import { NavLink } from "react-router-dom";
import SlidingPage from "./SlidingPage";

function LandingPage() {
  return (
    <>

    {/* background fixed image */}
      <img
        src="src/Images/4jpekc5x.bmp"
        alt=""
        className=" fixed w-full h-full"
      />

      <div className=" feedContainer  w-full m-0 p-0 overflow-hidden relative z-10">

        {/* header logo/Navbar logo */}
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

          {/* front design */}
        <div className="mt-16 flex flex-col bg-slate-200 h-[46rem] lg:h-[51rem]">

          {/* big headings */}
          <section className=" grid grid-rows-3 grid-flow-col gap-2 sm:gap-3 md:gap-4">
            <div className=" sm:w-[27rem] md:w-[35rem] h-11 text-md md:text-xl lg:text-2xl sm:h-14 md:h-14 my-auto w-[19rem] bg-pink-300 mx-auto rounded-3xl flex justify-center items-center font-serif mt-4 ">
              <span>Explore Things and Make Memories</span>
            </div>
            <div className=" md:text-4xl lg:text-5xl font-extrabold mx-10 max-md:px-[10%] sm:px-[7%] lg:px-[10%] flex justify-center sm:text-3xl text-xl ">
              The journey of a thousand miles begins with a single step...!!
            </div>
            <div className="block m-auto">heyy</div>
          </section>
          
          {/* get started button */}
          <div className=" flex justify-center ">
            <button className=" bg-black hover:bg-purple-600 text-lg sm:text-xl text-slate-300 font-extrabold p-4 rounded-3xl">
              Get Started
            </button>
          </div>

          {/* sliding page */}
          <div className=" mt-9 max-h-min md:h-[412px] ">
            <SlidingPage />
          </div>

        </div>

        {/* Privacy Policy */}
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

        {/* Contact  with us */}
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

        {/* footer */}

        <footer className="bg-gray-900 text-gray-200 font-serif">
        {/* <!-- container --> */}
        <div className="container mx-auto py-6 px-6 "> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 ">
{/* col 1 */}
  <div className="p-2">
    
      <img className="h-10 w-1/2 sm:w-44" src="tvlogo.png" alt="tv logo" />
    
    <h2 className="my-4 text-2xl font-bold">Latest Blog Article</h2>
    <div className="my-5">
      <a className="text-lg font-medium my-1" href="/">Finding Perfect Spots</a> <br />
      <a className="text-lg font-medium" href="/">Where You Don’t Need A</a><br />
      <a className="text-lg font-medium" href="/">Fortune To Get There</a>
      <hr className="my-5 w-1/2" />
      <a className="font-mono text-base font-medium" href="">Let’s Travel Together.....</a>
    </div>
  </div>



{/* col 2 */}
<div className="p-2">
  <hr className="w-full sm:w-0" />
  <h2 className="my-4 text-2xl font-bold">Newsletter</h2>
  <p className="text-lg font-medium my-6">
    Be among the first ones to find <br />
    out about our awesome <br />
    adventure
  </p>

  <div className="flex items-center p-2 gap-1 bg-gray-500 rounded-3xl overflow-hidden  w-72 lg:w-60 h-14">
    <input type="email" placeholder="Email address.." className="bg-transparent outline-none w-1/2" />
    <button className="bg-slate-300 hover:bg-yellow-200 text-black outline-none  w-40 h-14 relative rounded-3xl left-7">Subscribe</button>
  </div>

  {/* Social links */}
  <div className="mt-5 flex space-x-4 items-center">
    <a href="" className=" transition ease-linear duration-100 hover:scale-125 "><i className="fa-brands fa-facebook text-3xl "></i></a>
    <a href="" className=" transition ease-linear duration-100 hover:scale-125 "><i className="fa-brands fa-linkedin text-3xl"></i></a>
    <a href="" className=" transition ease-linear duration-100 hover:scale-125 "><i className="fa-brands fa-square-twitter text-3xl"></i></a>
    <a href="" className=" transition ease-linear duration-100 hover:scale-125 "><i className="fa-brands fa-github text-3xl"></i></a>
    <a href="" className=" transition ease-linear duration-100 hover:scale-125 "><i className="fa-brands fa-instagram text-3xl"></i></a>
  </div>
</div>


{/* col 3 */}
<div className="p-2">
  <hr className="w-full sm:w-0" />

  <h2 className="my-4 text-2xl font-bold">Travel Dojo</h2>

  <p className="text-lg">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et qui sit ratione necessitatibus molestiae sint? Quos id, mollitia ratione voluptatibus <em>example text</em>.
  </p>
  <br />
  <p className="text-lg">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore obca
  </p>
</div>

{/* col 4  */}
<div className="p-2">
  <hr className="w-full sm:w-0" />

  <h2 className="my-4 text-2xl font-bold">Links</h2>
  
  <div className="flex flex-col space-y-1 text-lg">
    <a href="">Destinations</a> 
    <a href="">Experience</a> 
    <a href="">About Us</a> 
    <a href="">Blog</a> 
    <a href="">Contact</a>  
  </div>
</div>

</div>
</div>       
<h4 className="py-4 text-center text-lg ">Cpoyright ! Made by Biswajit | Commando @2024 ! All rigts Reserved 🖕</h4>
</footer>
        {/* end */}
      </div>
    </>
  );
}
export default LandingPage;
