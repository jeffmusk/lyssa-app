import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";

const profile = process.env.PUBLIC_URL + "/assets/profile.png";
const avatar = process.env.PUBLIC_URL + "/assets/avatar.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col h-screen items-center bg-gray-100 max-w-sm">
      <img src={profile} alt="profile" className="-mt-56 " />
      <div className="avatar ml-5 -mt-28 self-start flex ">
        <img
          src={avatar}
          alt="avatar"
          className="image h-28 w-28  bg-gray-50 border-white border-4 rounded-full  shadow-md"
        />
        <button className="w-8 h-8 -ml-8 bg-gray-300 border-4  text-teal  border-white shadow-md rounded-full self-end  flex justify-center items-center">
          <FiCamera className="cursor-pointer " />
        </button>
      </div>
      <div className="card w-10/12 py-4 px-2 shadow-md rounded-md  mx-8 bg-white mt-20 flex flex-col">
        <FaRegEdit className="text-teal self-end mr-2 cursor-pointer" />
        <h1 className="font-semibold text-gray-700 text-lg -mt-4">Name</h1>
        <h2 className="text-gray-500 text-sm">
          email - <AiFillCheckCircle className="inline w-6 text-teal" />
        </h2>
        <p className="text-gray-500 text-sm">
          Ultima ingreso: <span>fecha</span>
        </p>

        <span className="text-teal text-sm mt-2 underline cursor-pointer ">
          Cambiar contrasea
        </span>
      </div>
    </div>
  );
}
