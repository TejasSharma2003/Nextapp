import Logo from "@/components/Logo";
import * as classes from "./banner.module.css";
import { motion, transform } from "framer-motion";
import React from "react";

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
      duration: 1,
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
    y: -50,
    transition: {
      duration: 0.8,
      ease: [0.42, 0.71, 0.09, 0.86],
    },
  },
};

const Banner = props => {
  return (
    <motion.div
      key="banner"
      variants={bannerVariants}
      initial="hide"
      animate="show"
      exit="exit"
      onAnimationComplete={() => props.setShowBanner(false)}
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
