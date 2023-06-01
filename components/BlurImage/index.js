import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BlurImage({ src, className = "", ...props }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}
      style={{ objectFit: "cover" }}
      className={` ${props.className} h-full`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;

// ${cn(
//     'duration-700 ease-in-out',
//     isLoading
//         ? 'grayscale blur-2xl scale-110'
//         : 'grayscale-0 blur-0 scale-100'
// )}
