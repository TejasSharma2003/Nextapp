import React from 'react';
import * as styles from './navLinks.module.css';

import { motion } from 'framer-motion';

import Link from 'next/link';
import { navLinks as links } from '../../Navbar/navlinks';

const linksContainerVariants = {
  show: { transition: { staggerChildren: 0.2 } },
};

const linkVariant = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.2, 0, 0.97],
      duration: 0.4,
    },
  },
  hidden: { opacity: 0, y: 20 },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      ease: [0.34, 0.2, 0, 0.97],
      duration: 0.4,
    },
  },
};

const NavLinks = (props) => {
  return (
    <motion.div
      key="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${styles.navLinksContainer} relative  z-30 flex items-center justify-center`}
    >
      <motion.ul
        variants={linksContainerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className={`${styles.links} text-center  text-5xl text-primary `}
      >
        {links.map((link, idx) => {
          return (
            <motion.li
              onClick={() => props.resetMenuActive()}
              variants={linkVariant}
              key={idx}
              className={` mb-14 block tracking-wider last:mb-0`}
            >
              <Link href={link.path} className={`${styles.link}`}>
                {link.name}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default NavLinks;
