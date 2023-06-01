import { useState } from "react";

import { BiErrorCircle } from "react-icons/bi";

const InputErrorMessage = ({ inputIsInvalid }) => {
  return (
    <div
      className={` absolute right-0 z-10 opacity-0 transition-all  ${
        inputIsInvalid ? " translate-x-12 opacity-100" : ""
      }`}
    >
      <span className={`flex items-center`}>
        <BiErrorCircle className="text-4xl text-red" />
      </span>
    </div>
  );
};

export default InputErrorMessage;
