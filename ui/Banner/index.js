import Logo from '@/components/Logo';
import * as classes from './banner.module.css';
import { motion, transform } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';

import { LoadingStateContext } from '@/context/context';

const bannerVariants = {
  hide: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const logoVariants = {
  down: {
    opacity: 0,
    y: 25,
    scale: 1.5,
  },

  up: {
    opacity: 1,
    y: 0,
    scale: 1.2,
    transition: {
      duration: 0.8,
      ease: [0.42, 0.71, 0.09, 0.86],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,

      ease: [0.42, 0.71, 0.09, 0.86],
    },
  },
};

const Banner = (props) => {
  const { setIsLoaderOut } = useContext(LoadingStateContext);
  return (
    <motion.div
      key="banner"
      variants={bannerVariants}
      initial="hide"
      animate="show"
      exit="exit"
      onAnimationComplete={() => {
        setTimeout(() => {
          setIsLoaderOut(true);
        }, 400);
        props.setShowBanner(false);
      }}
      className={classes.overlay}
    >
      <motion.div
        variants={logoVariants}
        initial="down"
        animate="up"
        exit="exit"
      >
        <Logo />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
