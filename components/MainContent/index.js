import React from 'react';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const MainContent = props => {
  return (
    <motion.div
      key={props.uniqueId}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {props.children}
    </motion.div>
  );
};

export default MainContent;