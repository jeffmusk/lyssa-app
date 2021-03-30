import React from "react";
import "./Buttons.css";

export default function ButtonPrimary(props) {
  const { text, onClick } = props;

  return (
    <React.Fragment>
      <button className="btn-primary " onClick={onClick}>
        {text}
      </button>
    </React.Fragment>
  );
}
