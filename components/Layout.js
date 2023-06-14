import React from 'react';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const MainContent = (props) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={ false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main
        key={props.page}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        //give margin-top except homepage since its gonna create a overflow since height is set to 100vh
        className={`${props.page === '/' || 'pt-52'} `}
      >
        {props.children}
      </motion.main>
    </AnimatePresence>
  );
};

const Layout = (props) => {
  const router = useRouter();
  const page = router.asPath;

  return (
    <>
      <Navbar />
      <MainContent {...props} page={page} />
      {router.asPath !== '/' && <Footer />}
    </>
  );
};

export default Layout;
