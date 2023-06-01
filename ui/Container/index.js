import React from "react";
import * as classes from "./container.module.css";

const Container = props => {
  return (
    <div
      className={`${classes.container} ${props.className || ""} px-5 xl:px-0`}
    >
      {props.children}
    </div>
  );
};

export default Container;
