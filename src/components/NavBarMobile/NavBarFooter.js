import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import AddElement from "../NavBarMobile/AddElement";
import { HiOutlineHome, HiOutlineBriefcase } from "react-icons/hi";
import { AiOutlineBank, AiOutlineUser } from "react-icons/ai";

import "./NavBar.css";

export default function NavBarFooter() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="bg-white w-full h-12 fixed bottom-0 navBarFooterShadow">
      {location.pathname != "/profile" && <AddElement />}
      <div className="w-full h-full  flex  justify-around items-center">
        <div className="w-10 h-10  flex justify-center items-center text-gray-500">
          <NavLink activeClassName="text-teal" to="/home">
            <HiOutlineHome className="text-3xl" />
          </NavLink>
        </div>

        <div className="w-10 h-10  flex justify-center items-center text-gray-500">
          <NavLink activeClassName="text-teal" to="/lists">
            <HiOutlineBriefcase className="text-3xl" />
          </NavLink>
        </div>

        <div className="w-10 h-10  flex justify-center items-center text-gray-500">
          <NavLink activeClassName="text-teal" to="/bills">
            <AiOutlineBank className="text-3xl" />
          </NavLink>
        </div>

        <div className="w-10 h-10  flex justify-center items-center text-gray-500">
          <NavLink activeClassName="text-teal" to="/profile">
            <AiOutlineUser className="text-3xl" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
