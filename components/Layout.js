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
      initial={props.page === '/' ? true : false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={props.page}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {props.children}
      </motion.div>
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