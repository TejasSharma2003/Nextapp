import React from 'react';
import Button from '@/elements/Button';
import Image from 'next/image';
import Link from 'next/link';
import GreetIcon from '@/ui/GreetIcon';
import { motion } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <main className="relative  flex min-h-screen items-center justify-center  py-40 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="relative h-[120px] w-[120px] rounded-full sm:w-[130px] sm:h-[130px] "
        >
          <Image
            src="/images/site/avatar.jpg"
            fill={true}
            alt="me"
            style={{ objectFit: 'cover' }}
            className="rounded-full"
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="mt-10 flex items-baseline text-3xl text-white/[.4]"
        >
          Hello, I&lsquo;m Tejas{' '}
          <span className="ml-2 -rotate-45 animate-wave">
            <GreetIcon />
          </span>
        </motion.h2>

        <motion.h1
          variants={itemVariants}
          className="mb-3 mt-3 px-6  text-center text-5xl capitalize !leading-[1.3] sm:text-6xl"
        >
          Building websites that work <br />
          seamlessly, so you don&lsquo;t have to.
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-10 flex items-center">
          <Link href="/">
            <Button type="ghost" className="mr-12 w-auto px-14">
              My Work
            </Button>
          </Link>
          <Link href="/blogs">
            <Button type="fill" className=" w-auto px-14">
              My Blogs
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};
export default Home;
