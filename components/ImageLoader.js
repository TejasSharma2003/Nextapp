import React, { useState } from "react";

import Image from "next/image";

function ImageLoader({ orginalPath, placeHolderPath }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Image
          src={placeHolderPath}
          className={`transition  duration-700 ease-in-out
                     ${isLoading ? "blur-2xl " : " blur-0 "}`}
          alt="Placeholder"
          fill={true}
        />
      )}
      <Image
        src={orginalPath}
        alt="Original"
        fill={true}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
}

export default ImageLoader;
