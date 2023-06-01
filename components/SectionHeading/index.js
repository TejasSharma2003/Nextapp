import React from "react";
import * as classes from "./sectionHeading.module.css";
import HightlightHeading from "@/ui/HightlightHeading";

const SectionHeading = props => {
  return (
    <h2
      className={`mt-20 text-left font-primary text-7xl font-extrabold capitalize ${
        props.className || ""
      }`}
    >
      <HightlightHeading>{props.children}</HightlightHeading>
    </h2>
  );
};

export default SectionHeading;
