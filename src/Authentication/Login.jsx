import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen">
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
        <div className="bg-gray-900 p-10 rounded-lg w-full max-w-md shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Login to Your Account
          </h2>

          {/* Input Fields */}
          <form>
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
            {/* Remember Me */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
              />
              <span className="text-gray-400 text-sm ml-2">Remember me</span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          {/* Forgot Password and Register Links */}
          <div className="text-gray-400 text-center mt-4">
            <a href="#" className="text-blue-500">
              Forgot your password?
            </a>
            <p>
              New here?{" "}
              <NavLink to={"/signup"} className="text-blue-500">
                Create an account
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
