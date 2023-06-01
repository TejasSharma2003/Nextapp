import React from "react";
import * as classes from "./cross-button.module.css";

const CrossButton = props => {
  return (
    <button
      className={`${classes.item} ${props.className}`}
      onClick={props.onClick}
    ></button>
  );
};

export default CrossButton;
