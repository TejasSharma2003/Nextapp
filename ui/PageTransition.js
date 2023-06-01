import React, { forwardRef } from "react";
import { easeOut, motion } from "framer-motion";

const pageVariants = {
  invisible: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.42, 0.71, 0.09, 0.86],
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: easeOut,
    },
  },
};

function PageTransition({ children, ...rest }, ref) {
  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <motion.div
      ref={ref}
      variants={pageVariants}
      initial="invisible"
      animate="visible"
      exit="exit"
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
