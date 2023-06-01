import React from "react";
import * as classes from "./button.module.css";

const Button = props => {
  // fill button and ghost button
  const buttonTypeClass =
    props.type === "fill"
      ? "bg-primary text-white"
      : props.type === "ghost"
      ? "border-white-100/[.2] border-2 text-white-100"
      : "";

  return (
    <button
      className={`${classes.button} ${props.className} ${buttonTypeClass}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
