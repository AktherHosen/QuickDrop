import React, { useState } from "react";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex bg-darkText dark:border-black dark:bg-darkBg border-b justify-between py-4 px-6 fixed top-0 w-full h-[64px]  z-10 shadow-sm">
        <div
          className={`flex justify-between items-center gap-2 ${
            toggle ? "w-[55px]" : "w-[224px]"
          }  `}
        >
          <Link to="/" className={` ${toggle ? "hidden" : "flex"}`}>
            Quick Drop
          </Link>
          <span onClick={() => setToggle(!toggle)}>
            <IoCode className="text-[22px]" />
          </span>
        </div>
        <p>
          <FiUser size={26} />
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-[64px]">
        {/* Sidebar */}
        <div
          className={`fixed border-r-2 dark:border-r dark:border-r-black  bg-darkText dark:bg-darkBg h-full transition-all duration-300 ${
            toggle ? "w-[80px] px-2 pt-6" : "w-[250px] p-6"
          }`}
          style={{ top: "64px" }}
        >
          <Sidebar />
        </div>

        {/* Outlet */}
        <div
          className={`${
            toggle ? "ml-[80px]" : "ml-[80px] md:ml-[100px] lg:ml-[250px]"
          } flex-1 overflow-y-auto  bg-darkText dark:bg-darkBg
           p-6 `}
          style={{ height: "calc(100vh - 64px)" }}
        >
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
