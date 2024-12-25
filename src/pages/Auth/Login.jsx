import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/google.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="max-w-[1240px] h-screen  mx-auto px-6 sm:px-5 lg:px-4">
      <Link
        to="/"
        className="my-6 text-white font-semibold rounded-full bg-black flex items-center justify-center  p-2 w-fit"
      >
        <IoMdArrowBack className="inline text-xl " />
      </Link>
      <div className="border rounded-md shadow-xs w-[450px] mx-auto ">
        <div className="px-4">
          <div className="my-2">
            <div className="my-1">
              <img src={Logo} alt="" className="h-[74px] w-[74px] mx-auto  " />
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
              <h2 className="text-[1.2rem] font-semibold">Welcome Back</h2>
              <p className="text-gray-600 text-sm">
                Please enter your details to login
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="hello@quickdrop.com"
                className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent block"
                />
                <div
                  className="absolute right-4 top-[28%] cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <IoMdEye className="text-2xl" />
                  ) : (
                    <IoMdEyeOff className="text-2xl" />
                  )}
                </div>
              </div>
            </div>

            <Link
              to="/forgot-password"
              className="text-[#1a32cb] text-sm hover:underline hover:underline-offset-2"
            >
              Forgot password?
            </Link>
            <button
              type="submit"
              className="bg-black text-gray-200 rounded-md w-full py-3 h-[48px] border"
            >
              Login
            </button>
            {/* <div className="flex items-center my-2">
              <hr className="flex-grow border-t border-gray-400" />
              <span className="px-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-400" />
            </div> */}
            <button
              type="submit"
              className="bg-gray-100  rounded-md w-full py-3 h-[48px] border"
            >
              <img src={Google} alt="" className="h-6 w-6 inline" />{" "}
              <span className="uppercase ms-2 text-sm">Login via google</span>
            </button>
          </form>
          <h4 className="my-4 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/registration"
              className="text-[#1a32cb] hover:underline hover:underline-offset-2"
            >
              Register
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Login;
