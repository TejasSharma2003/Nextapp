import React, { useEffect, useState, useContext } from 'react';
import Button from '@/elements/Button';
import Link from 'next/link';
import Para from '../Para';

import HightlightHeading from '@/ui/HightlightHeading';

import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '../Reveal';
import { LoadingStateContext } from '@/context/context';

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


const Home = () => {
  const { isLoaderOut } = useContext(LoadingStateContext);

  return (
    <div className="mx-auto mt-40 flex max-w-large-w overflow-hidden px-5  xl:px-0 smallDevice:mt-[80px] smallDevice:min-h-0 pb-16">
      <div className="my-auto max-w-7xl">
        <AnimatePresence initial={true} key="home">
          <motion.div
            initial="hidden"
            animate={`${isLoaderOut ? 'show' : ''}`}
            variants={containerVariants}
          >
            <Reveal>
              <h3 className="mb-5 text-3xl text-primary sm:mb-6 ">
                Hello, I&#39;m
              </h3>
            </Reveal>
            <Reveal>
              <h1 className="md:text-7xl mb-5 text-4xl font-bold uppercase md:text-6xl ">
                <HightlightHeading>tejas sharma&#8228;</HightlightHeading>
              </h1>
            </Reveal>
            <Reveal>
              <h1 className="md:text-7xl relative inline-block text-4xl font-bold capitalize !leading-[1.2] text-white/[.7] md:text-6xl">
                Who Build websites that work <br />
                <span className="inline-block capitalize text-primary">
                  seemlessly
                </span>
                , so you don&#39;t have to&#8228;
              </h1>
            </Reveal>

            <Reveal>
              <Para className="mt-5 max-w-5xl sm:mt-6">
                Maybe you&#39;ve never thought about writing before or maybe
                you&#39;re looking for a little more motivation. Whatever the
                case, there are a lot of good reasons why writing can help us
                grow. Helping others to learn
              </Para>
            </Reveal>

            <Reveal>
              <div className="mt-12 flex items-center">
                <Link href="/projects">
                  <Button type="ghost" className="mr-10">
                    My Work
                  </Button>
                </Link>
                <Link href="/blogs">
                  <Button type="fill">My Blogs</Button>
                </Link>
              </div>
            </Reveal>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Home;
