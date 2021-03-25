import React, { useState } from "react";
import "./InputForm.css";

export default function InputForm(props) {
  const { label, name, onchange, formState } = props;

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        className={`${
          formState[name] != "" && "filled"
        }  input  border-gray-200 appearance-none rounded-lg w-full px-3 py-3 border-2
        pt-5 pb-2 focus focus:border-green-600 focus:outline-none active:outline-none active:border-green-600 `}
        autoFocus
        name={name}
        onChange={onchange}
        value={formState[name]}
      />
      <label
        htmlFor=""
        className="label absolute mb-0  pt-4 pl-3  leading-tight text-gray-400 text-base -mt-2 cursor-text"
      >
        {label}
      </label>
    </div>
  );
}
