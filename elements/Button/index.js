import React from 'react';
import * as classes from './button.module.css';

import { motion } from 'framer-motion';

const Button = (props) => {
  // fill button and ghost button
  const buttonTypeClass = {
    fill: 'bg-primary text-white',
    ghost: 'border-white-100/[.2] border border-2 text-white-100',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        ease: 'linear',
        duration: 0.1,
      }}
      className={`rounded-full px-10 py-4 text-2xl ${
        buttonTypeClass[props.type]
      } ${props.className || ''}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
