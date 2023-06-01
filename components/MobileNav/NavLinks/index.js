import React from "react";
import * as styles from "./navLinks.module.css";

import { motion } from "framer-motion";

const links = [
  {
    directTo: "#about",
    text: "About",
  },
  {
    directTo: "#footer",
    text: "Contact",
  },
  {
    directTo: "#portfolio",
    text: "Portfolio",
  },
  {
    directTo: "#services",
    text: "Services",
  },
];

const linksContainerVariants = {
  show: { transition: { staggerChildren: 0.2 } },
};

const linkVariant = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.2, 0, 0.97],
      duration: 0.8,
    },
  },
  hidden: { opacity: 0, y: 20 },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      ease: [0.34, 0.2, 0, 0.97],
      duration: 0.3,
    },
  },
};

const NavLinks = props => {
  return (
    <motion.div
      key="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${styles.navLinksContainer} flex items-center justify-center`}
    >
      <motion.ul
        variants={linksContainerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className={`${styles.links} text-center font-primary`}
      >
        {links.map((link, idx) => {
          return (
            <motion.li
              onClick={() => props.resetMenuActive()}
              variants={linkVariant}
              key={idx}
              className={`font-play-fair block tracking-wider`}
            >
              <a href={link.directTo} className={`${styles.link}`}>
                {link.text}
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default NavLinks;
