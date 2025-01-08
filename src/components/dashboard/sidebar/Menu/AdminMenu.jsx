import React from "react";
import Menu from "./Menu";
import { MdOutlineInsertChart } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { LiaBoxSolid } from "react-icons/lia";

const AdminMenu = ({ toggle }) => {
  return (
    <>
      <Menu
        label="statistics"
        address=""
        icon={MdOutlineInsertChart}
        toggle={toggle}
      />

      <Menu label="users" address="user" icon={LuUser} toggle={toggle} />
      <Menu
        label="delivery man"
        address="deliveryman"
        icon={TbUsers}
        toggle={toggle}
      />
      <Menu
        label="parcel"
        address="parcel"
        icon={LiaBoxSolid}
        toggle={toggle}
      />
    </>
  );
};

export default AdminMenu;
