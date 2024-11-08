import React, { useContext } from "react";
import { DemoContext } from "../DemoContext";
import { NavLink } from "react-router-dom";

function Signup() {
  const { isLogin, setIsLogin } = useContext(DemoContext);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className=" root flex min-h-screen">
      {/* Left Side - Welcome Message */}
      <div className="flex-1 bg-gray-900 text-white  items-center justify-center p-8 flex-shrink-0 md:w-1/2 sm:hidden md:flex hidden">
        <div className=" text-wrap">
          <h1
            className=" demo lg:text-6xl md:text-3xl font-serif font-bold"
          >
       Welcome...Users
          </h1>
          <p className="md:text-2xl sm:text-xl font-mono">
            Let your memory stay with us forever !!!!{" "}
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-gray-800 flex items-center justify-center p-8">
        <div className="bg-gray-900 p-10 rounded-xl w-full max-w-md shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Register Your Account
          </h2>

          {/* Input Fields */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
              />
            </div>
            {/* or--> */}
            <div className="flex items-center my-2">
              <div className="flex-grow-0 w-10 border-t border-gray-400"></div>
              <span className="mx-1 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            {/* Social Buttons */}
            <div className="flex flex-row justify-start gap-4">
              <div>
                <a href="">
                  <img
                    src="src/Logos/2702602.png"
                    alt=""
                    className="w-7 transition ease-in-out hover:scale-110 duration-100 "
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src="src/Logos/2504923.png"
                    alt=""
                    className="w-7 transition ease-in-out hover:scale-110 duration-100"
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src="src/Logos/5968764.png"
                    alt=""
                    className="w-7 transition ease-in-out hover:scale-110 duration-100"
                  />
                </a>
              </div>
            </div>

            {/* Terms & Privacy */}
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                className="text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
              />
              <span className="text-gray-400 text-sm ml-2">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
                .
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>

          {/* Already a member */}
          <p className="text-gray-400 text-center mt-4">
            Already a member?{" "}
            <NavLink to={"/login"} className="text-blue-500">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
