import React from 'react';

const Para = (props) => {
  return (
    <p
      className={`${props.className} text-[1.6rem] text-white-100 sm:text-[1.7rem]`}
    >
      {props.children}
    </p>
  );
};

export default Para;
