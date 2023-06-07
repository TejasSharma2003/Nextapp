import React, { useState } from 'react';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

function ImageLoader({ imageName, orginalPath, placeHolderPath }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Image
          key={imageName}
          src={placeHolderPath}
          className={`transition  duration-700 ease-in-out
                       ${isLoading ? 'blur-2xl ' : 'blur-0'}`}
          alt="Placeholder"
          fill={true}
        />
      )}
      <Image
        src={orginalPath}
        alt={imageName}
        fill={true}
        style={{ objectFit: 'cover' }}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
}

export default ImageLoader;
