import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddElement() {
  const location = useLocation();

  function add() {
    switch (location.pathname) {
      case "/home":
        console.log("home");

        break;
      case "/lists":
        console.log("list");

        break;
      case "/bills":
        console.log("Bills");

        break;

      default:
        break;
    }
  }

  return (
    <div className="w-full flex justify-center">
      <button className="w-16 h-16 rounded-full fixed bottom-6 border-white border-4 bg-teal  flex justify-center items-center  shadow-lg inset-auto focus:outline-none ">
        <AiOutlinePlus className="text-white text-2xl" onClick={() => add()} />
      </button>
    </div>
  );
}
