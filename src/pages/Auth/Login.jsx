import React from "react";
import Container from "../../components/common/Container";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/google.png";
const Login = () => {
  return (
    <Container>
      <Link to="/">
        <button className="-mt-10 mb-4 text-white font-semibold rounded-full bg-black flex items-center justify-center  p-2 ">
          <IoMdArrowBack className="inline text-xl " />
        </button>
      </Link>
      <div className=" min-h-[75vh] border max-w-[500px] mx-auto ">
        <div className="p-4">
          <div className="mb-5">
            <div>
              <img src={Logo} alt="" className="h-14 w-14 mx-auto my-4 " />
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
            <Link to="/forgot-password" className="text-[#2d42ca] text-sm">
              Forgot password?
            </Link>
            <button
              type="submit"
              className="bg-black text-white rounded-md w-full py-3"
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
        </div>
      </div>
    </Container>
  );
};

export default Login;
