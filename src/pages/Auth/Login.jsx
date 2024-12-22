import React from "react";
import Container from "../../components/common/Container";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/google.png";
const Login = () => {
  return (
    <section className="max-w-[1240px]  mx-auto px-6 sm:px-5 lg:px-4 my-4">
      <Link
        to="/"
        className="my-6 text-white font-semibold rounded-full bg-black flex items-center justify-center  p-2 w-fit"
      >
        <IoMdArrowBack className="inline text-xl " />
      </Link>
      <div className="border rounded-md shadow-xs max-w-[500px] mx-auto ">
        <div className="px-4">
          <div className="mb-2">
            <div className="my-1">
              <img src={Logo} alt="" className="h-[74px] w-[74px] mx-auto  " />
            </div>
            <div className="flex flex-col justify-center items-center">
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
              <input
                type="password"
                placeholder="********"
                className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Link to="/forgot-password" className="text-[#1a32cb] text-sm">
              Forgot password?
            </Link>
            <button
              type="submit"
              className="bg-black text-gray-200 rounded-md w-full py-3"
            >
              Login
            </button>

            <div className="flex items-center my-2">
              <hr className="flex-grow border-t border-gray-400" />
              <span className="px-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-400" />
            </div>

            <button
              type="submit"
              className="bg-gray-100  rounded-md w-full py-3"
            >
              <img src={Google} alt="" className="h-6 w-6 inline" />
            </button>
          </form>
          <h4 className="my-4 text-center text-sm">
            Don't have an account?{" "}
            <span className="text-[#1a32cb] hover:underline hover:underline-offset-2">
              Register
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Login;
