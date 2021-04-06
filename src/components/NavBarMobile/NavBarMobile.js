import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { singOut } from "../../firebase/Auth";

export default function NavBarMobile(props) {
  const [isVisible, setIsVisible] = useState(false);
  const { currentUser } = props;

  const onChange = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div
        className="absolute right-4 bg-white rounded-full p-1 w-8 h-8 top-4 text-2xl  shadow-lg"
        onClick={onChange}
      >
        <HiMenuAlt3 className="cursor-pointer text-teal" />
      </div>

      {isVisible && (
        <div className="w-2/3  bg-gray-300  shadow h-screen absolute right-0 ">
          <HiMenuAlt3
            className="cursor-pointer absolute right-4 text-gray-400 top-4 text-2xl"
            onClick={onChange}
          />
          <h1
            className="text-gray-600 font-semibold underline text-lg absolute top-14 right-5 opacity-100"
            onClick={() => singOut()}
          >
            Cerrar sesión
          </h1>
        </div>
      )}
    </div>
  );
}
