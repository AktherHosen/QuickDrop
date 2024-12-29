import React, { useState } from "react";
import { IoMdArrowBack, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FiUpload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = "";
    const userType = form.userType.value;

    const userInfo = {
      name,
      email,
      photo,
      userType,
    };
    console.log(userInfo);
  };

  return (
    <section className="max-w-[1240px] h-screen flex items-center justify-center mx-auto px-6 sm:px-5 lg:px-4">
      <div className="border rounded-md shadow-xs w-[450px] mx-auto ">
        <div className="px-4">
          <div className="my-1">
            <div>
              <img src={Logo} alt="" className="h-[74px] w-[74px] mx-auto  " />
            </div>
            <h2 className="text-[1.2rem] font-semibold mx-auto text-center">
              Create Account
            </h2>
          </div>
          <form onSubmit={handleRegistration} className="flex flex-col gap-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="quickdrop"
                className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="hello@quickdrop.com"
                className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="profilePhoto" className="text-sm">
                Upload Photo
              </label>
              <input
                type="file"
                name="profilePhoto"
                id="profilePhoto"
                accept="image/*"
                className="file-input file-input-bordered file-input-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent  ps-2 py-3 border rounded-md w-full mt-1"
              />
            </div>
            <div>
              <label htmlFor="userType" className="block text-sm font-medium">
                Type
              </label>
              <select
                name="userType"
                id="userType"
                className="select bg-gray-50 text-gray-700 py-3 px-4 border border-gray-300 rounded-md w-full mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-gray-100 transition-colors"
              >
                <option value="user">User</option>
                <option value="deliveryMan">DeliveryMan</option>
              </select>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  name="password"
                  className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent block"
                />
                <div
                  className="absolute right-3 top-[28%] cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <IoMdEye className="text-xl" />
                  ) : (
                    <IoMdEyeOff className="text-xl" />
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-gray-200 rounded-md w-full py-3 h-[48px] border"
            >
              Register
            </button>
          </form>
          <h4 className="my-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#1a32cb] hover:underline hover:underline-offset-2"
            >
              Login
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Registration;
