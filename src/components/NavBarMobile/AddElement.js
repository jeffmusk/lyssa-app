import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddElement() {
  return (
    <div className="w-full flex justify-center">
      <button className="w-16 h-16 rounded-full fixed bottom-6 border-white border-4 bg-teal  flex justify-center items-center  shadow-lg inset-auto focus:outline-none ">
        <AiOutlinePlus className="text-white text-2xl" />
      </button>
    </div>
  );
}
