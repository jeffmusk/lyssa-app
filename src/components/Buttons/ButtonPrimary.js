import React from "react";
import "./Buttons.css";

export default function ButtonPrimary(props) {
  const { text } = props;

  return (
    <React.Fragment>
      <button className="btn-primary">{text}</button>
    </React.Fragment>
  );
}
