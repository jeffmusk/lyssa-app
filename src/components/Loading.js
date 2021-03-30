import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="flex bg-white rounded justify-center px-20 py-10 shadow-md ">
        <h1 className="text-gray-400">Cargando...</h1>
      </div>
    </div>
  );
}
