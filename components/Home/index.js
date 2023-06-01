import React from "react";
import Button from "@/elements/Button";
import Image from "next/image";
import Link from "next/link";
import GreetIcon from "@/ui/GreetIcon";

import { m, motion } from "framer-motion";

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
    <main className="relative flex min-h-screen items-center justify-center  ">
      {/* <div className='absolute'>
                <Image src='/images/blob1.svg' width={500} height={500} alt='blob1' />
            </div>

            <div className='absolute'>
                <Image src='/images/blob2.svg' width={500} height={500} alt='blob2' />
            </div> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="relative h-[140px] w-[140px] rounded-full "
        >
          <Image
            src="/images/site/me.jpg"
            fill={true}
            alt="me"
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="mt-10 flex items-baseline text-3xl text-white-100"
        >
          Hello, I'm Tejas{" "}
          <span className="ml-2 -rotate-45">
            <GreetIcon />
          </span>
        </motion.h2>

        <motion.h1
          variants={itemVariants}
          className="mb-3 mt-3 text-center font-primary text-5xl font-semibold capitalize !leading-[1.3] 
                sm:text-6xl"
        >
          Building websites that work <br />
          seamlessly, so you don't have to
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
