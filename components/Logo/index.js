import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = (props) => {
  return (
    <Link href="/" className="relative flex  items-center">
      <Image
        src="/images/site/logo.svg"
        width={110}
        height={40}
        alt="logo"
        className={props.className || ''}
      />
    </Link>
  );
};

export default Logo;
