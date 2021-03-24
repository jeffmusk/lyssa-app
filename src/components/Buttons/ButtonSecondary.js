import React from "react";
import "./Buttons.css";

export default function ButtonSecondary(props) {
  const { text, icon } = props;

  return (
    <React.Fragment>
      <button className="btn-secondary flex justify-center items-center gap-1 ">
        {icon && <img src={icon} alt="logo" className="h-6" />}
        <span className="">{text}</span>
      </button>
    </React.Fragment>
  );
}
