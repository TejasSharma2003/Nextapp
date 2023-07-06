import React from "react";
import HightlightHeading from "@/ui/HightlightHeading";

const SectionHeading = props => {
  return (
    <h2
      className={`text-left font-primary text-6xl font-extrabold capitalize ${
        props.className || ""
      }`}
    >
      <HightlightHeading>{props.children}</HightlightHeading>
    </h2>
  );
};

export default SectionHeading;
