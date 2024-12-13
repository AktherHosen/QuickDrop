import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Container from "../common/Container";
import { IoNotificationsSharp } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <nav className="flex justify-between items-center relative">
        <div className="flex items-center gap-1">
          <img src={Logo} alt="Logo" className="h-14 w-14" />
          <h1 className="font-poppins items-center text-lg hidden lg:flex font-semibold">
            Quick Drop
          </h1>
        </div>

        <ul className="hidden font-raleway lg:flex items-center gap-x-2 text-sm ">
          <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
            <a href="#">Home</a>
          </li>
          <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
            <a href="#">Dashboard</a>
          </li>
          <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex items-center">
            <IoNotificationsSharp className="text-xl hover:text-[#75a3e9] transition-all duration-300" />
            <a href="#" className="lg:hidden">
              Notification
            </a>
          </li>
        </ul>
        <span
          className="lg:hidden cursor-pointer transition-all duration-400"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoCloseSharp size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </span>

        <ul
          className={`flex flex-col text-start ps-4 rounded-md absolute top-20 z-10 left-0 w-full bg-primary bg-opacity-20 text-black  lg:hidden 
          transition-all duration-300 transform origin-top ${
            isMenuOpen
              ? "scale-y-100 transition-all duration-400"
              : "scale-y-0 transition-all duration-400"
          }`}
        >
          <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex gap-1 items-center">
            <FaHome className="text-[14px] lg:hidden hover:text-[#75a3e9] transition-all duration-300" />
            <a href="#">Home</a>
          </li>
          <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex gap-1 items-center">
            <TbLayoutDashboardFilled className="text-[14px] lg:hidden hover:text-[#75a3e9] transition-all duration-300" />
            <a href="#" className="text-[15px]">
              Dashboard
            </a>
          </li>

          <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300 flex gap-1 items-center">
            <IoNotificationsSharp className="text-[14px] lg:text-xl hover:text-[#75a3e9] transition-all duration-300" />
            <a href="#" className="lg:hidden text-[15px]">
              Notification
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
