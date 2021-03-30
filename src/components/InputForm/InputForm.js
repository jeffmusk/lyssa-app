import React from "react";
import "./InputForm.css";

export default function InputForm(props) {
  const { label, name, onchange, formState, errorMessage } = props;

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        autoFocus="false"
        className={`${
          formState[name] != "" && "filled"
        }  input  border-gray-200 appearance-none rounded-lg w-full px-3 py-3 border-2
        pt-5 pb-2 focus focus:border-green-600 focus:outline-none active:outline-none active:border-green-600
          ${errorMessage ? "border-red-300" : "border-gray-400"}
        `}
        autoFocus={false}
        name={name}
        onChange={onchange}
        value={formState[name]}
      />
      <label
        className={`label absolute mb-0  pt-4 pl-3  leading-tight ${
          errorMessage ? "text-red-500" : "text-gray-400"
        } text-base -mt-2 cursor-text`}
      >
        {label}
      </label>

      {errorMessage && <p className="pt-1 pl-2 text-red-400">{errorMessage}</p>}
    </div>
  );
}
