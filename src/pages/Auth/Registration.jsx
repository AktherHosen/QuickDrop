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

  const [imageLink, setImageLink] = useState("");

  const handleUploadImageClick = () => {
    document.getElementById("image").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageLink(imageURL);
    }
  };

  return (
    <section className="max-w-[1240px] h-[100vh] flex items-center justify-center mx-auto px-6 sm:px-5 lg:px-4">
      <div className="border rounded-md shadow-xs min-w-[450px] mx-auto ">
        <div className="px-4">
          <div className="my-1">
            <div>
              <img src={Logo} alt="" className="h-[74px] w-[74px] mx-auto  " />
            </div>
            <h2 className="text-[1.2rem] font-semibold mx-auto text-center">
              Create Account
            </h2>
          </div>
          <form className="flex flex-col gap-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="name"
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
                placeholder="hello@quickdrop.com"
                className="ps-2 py-3 border rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Profile
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="hidden"
                onChange={handleFileChange}
              />
              {imageLink === "" ? (
                <div
                  className="w-full flex items-center justify-center gap-x-2 border-[#e5eaf2] border rounded-md py-3 cursor-pointer"
                  onClick={handleUploadImageClick}
                >
                  <FiUpload className="text-[1.1rem] text-[#777777]" />
                  <p className="text-[#777777]">Browse to upload you picture</p>
                </div>
              ) : (
                <div className="relative w-full">
                  <img
                    src={imageLink}
                    alt="image"
                    className="w-[50px] h-[50px] object-cover"
                  />
                  <MdDelete
                    className="text-[1.4rem] text-white bg-[#000000ad] p-1 absolute top-0 left-16 cursor-pointer"
                    onClick={() => setImageLink("")}
                  />
                </div>
              )}
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
                  name="password1"
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
