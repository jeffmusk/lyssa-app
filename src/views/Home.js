import React /*,  { useEffect, useState }  */ from "react";
import { FiSun } from "react-icons/fi";

const eart = process.env.PUBLIC_URL + "/assets/eart.png";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <img src={eart} alt="Background" />
      </div>
      <div className="-mt-48 text-white flex flex-row justify-between items-end ">
        <div className="flex mt-10 ">
          <div className="flex flex-col ml-4">
            <h1 className="text-5xl border-b-4 w-10  border-b-white ">5</h1>
            <h3 className="text-lg">Actividades para hoy</h3>
            <div className="flex  items-center">
              <span>
                <FiSun className="text-4xl mr-2 mt-2" />
              </span>
              <h1 className="text-5xl">Hoy</h1>
            </div>
          </div>
        </div>

        <div className="justify-self-end mr-4">
          <h1 className="text-5xl">58%</h1>
        </div>
      </div>
    </div>
  );
}
