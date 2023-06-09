import React from "react";
import Image from "next/image";

const Avatar = props => {
  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    >
      <Image
        src={props.imageSrc || `/images/site/me.jpg`}
        fill={true}
        alt="me"
        className={`${props.className || ""} `}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Avatar;
