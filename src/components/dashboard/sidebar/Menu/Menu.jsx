import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ label, address, icon: Icon, toggle }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        ` flex items-center ${
          toggle ? "justify-center w-fit" : "w-[220px]"
        }  px-4 py-2 my-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
          isActive ? "bg-gray-300 text-gray-700" : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className={`font-medium ${toggle ? "hidden" : " block"} ml-2`}>
        {label}
      </span>
    </NavLink>
  );
};

export default Menu;
