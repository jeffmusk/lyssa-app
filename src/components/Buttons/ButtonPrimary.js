import React from "react";

export default function ButtonPrimary(props) {
  const { text } = props;

  return (
    <React.Fragment>
      <button className=" text-white bg-gradient-to-r from-green-400 to-blue-500 px-7 py-2 rounded-full font-bold  shadow-lg outline-none">
        {text}
      </button>
    </React.Fragment>
  );
}
