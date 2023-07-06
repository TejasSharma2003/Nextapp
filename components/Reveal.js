import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useEffect } from 'react';

const fadeUpVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  initial: {
    y: 0,
    opacity: 1,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Reveal = ({ children }) => {
  const animateEleRef = useRef();
  const isInView = useInView(animateEleRef, { once: true });

  return (
    <motion.div
      ref={animateEleRef}
      //   initial="hidden"
      variants={fadeUpVariants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
