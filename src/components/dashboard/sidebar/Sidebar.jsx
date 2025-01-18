import React from "react";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import DeliveryManMenu from "./Menu/DeliveryManMenu";
import "./Sidebar.css";
import { TbLogin2 } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ toggle }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <div
      className={`fixed border-r-2 dark:border-r dark:border-r-black bg-darkText dark:bg-darkBg h-full transition-all overscroll-y-scroll duration-300 ${
        toggle ? "w-[60px]  pt-6" : "w-[200px]  pt-6"
      }`}
      style={{ top: "34px" }}
    >
      {/* Container for menus with overflow-y-auto for scrolling */}
      <div className="h-full overflow-y-auto sidebar-container">
        <div className="flex items-center flex-col justify-between  min-h-[calc(100vh-64px)]">
          <div>
            <AdminMenu toggle={toggle} />
            <UserMenu toggle={toggle} />
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className={` w-fit flex gap-1  ${
                  toggle
                    ? " w-fit px-2"
                    : "w-[180px] px-10 flex justify-between items-center"
                }  py-1.5 my-5 transition-colors duration-300 rounded-md transform   
               bg-red-700 bg-opacity-80 text-white 
                  
              }`}
              >
                <TbLogout2 className="w-4 h-4" />
                <span
                  className={`text-sm font-medium ${
                    toggle ? "hidden" : " block"
                  } `}
                >
                  Logout
                </span>
              </button>
            ) : (
              <NavLink
                to="/login"
                className={` w-fit flex gap-1  ${
                  toggle
                    ? " w-fit px-2 justify-center items-center"
                    : "w-[180px] px-10 flex justify-between items-center"
                }  py-1.5 my-5 transition-colors duration-300 rounded-md transform   
                 bg-green-700 bg-opacity-80 text-white 
                    
                }`}
              >
                <span
                  className={`text-sm font-medium ${
                    toggle ? "hidden" : " block"
                  } `}
                >
                  Login
                </span>
                <TbLogin2 className="w-4 h-4" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
