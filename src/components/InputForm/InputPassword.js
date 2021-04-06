import React, { useState } from "react";
import "./InputForm.css";

/* TODO update to react icons */
function EyeOffIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

export default function InputPassword(props) {
  const { label, name, onchange, formState, errorMessage } = props;
  const [hidden, setHidden] = useState(true);

  const hiddenChange = () => {
    setHidden(!hidden);
  };

  return (
    <div className="mb-4 relative">
      {hidden ? (
        <EyeIcon
          className="w-7 absolute right-2 top-4 text-gray-400 cursor-pointer"
          onClick={hiddenChange}
        />
      ) : (
        <EyeOffIcon
          className="w-7 absolute right-2 top-4 text-teal cursor-pointer"
          onClick={hiddenChange}
        />
      )}
      <input
        type={hidden ? "password" : "text"}
        autoFocus="false"
        className={`${
          formState[name] != "" && "filled"
        }  input  border-gray-200 appearance-none rounded-lg w-full px-3 py-3 border-2
        pt-5 pb-2 focus focus:border-green-600 focus:outline-none active:outline-none active:border-green-600 
        ${errorMessage ? "border-red-300" : "border-gray-400"}`}
        autoFocus={false}
        name={name}
        onChange={onchange}
        value={formState[name]}
      ></input>
      <label
        htmlFor=""
        className={`label absolute mb-0  pt-4 pl-3  leading-tight text-base -mt-2 cursor-text ${
          errorMessage ? "text-red-500" : "text-gray-400"
        }`}
      >
        {label}
      </label>
      {errorMessage && <p className="pt-1 pl-2 text-red-400">{errorMessage}</p>}
    </div>
  );
}
