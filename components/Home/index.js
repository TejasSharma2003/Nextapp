import React from 'react';
import Button from '@/elements/Button';
import Link from 'next/link';
import Para from '../Para';

import HightlightHeading from '@/ui/HightlightHeading';

const Home = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-large-w px-5 xl:px-0">
      <div className="my-auto max-w-7xl">
        <h3 className="mb-5 text-3xl text-primary sm:mb-10">Hello, I&#39;m</h3>
        <h1 className="mb-8 text-5xl font-bold uppercase sm:text-6xl md:text-7xl ">
          <HightlightHeading>tejas sharma&#8228;</HightlightHeading>
        </h1>
        <h1 className="relative inline text-5xl font-bold capitalize !leading-[1.2] text-white/[.7] sm:text-6xl md:text-7xl">
          Who Build websites that work
          <br />
          <span className="inline-block capitalize text-primary">
            seemlessly
          </span>
          , so you don&#39;t have to&#8228;
        </h1>
        <Para className="mt-5 max-w-5xl sm:mt-10">
          Maybe you&#39;ve never thought about writing before or maybe
          you&#39;re looking for a little more motivation. Whatever the case,
          there are a lot of good reasons why writing can help us grow. Helping
          others to learn
        </Para>
        <div className="mt-14 flex items-center">
          <Link href="/projects">
            <Button type="ghost" className="mr-10">
              My Work
            </Button>
          </Link>
          <Link href="/blogs">
            <Button type="fill">My Blogs</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
