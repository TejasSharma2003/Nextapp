import React, { useEffect, useState } from 'react';
import * as classes from './navbar.module.css';

import NavLinks from './NavLinks';

import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const onClickMenuHandler = () => {
    setMenuActive((pre) => !pre);
  };

  const resetMenuActive = () => {
    setMenuActive(false);
  };
  return (
    <>
      <AnimatePresence>
        {menuActive && (
          <NavLinks menuActive={menuActive} resetMenuActive={resetMenuActive} />
        )}
      </AnimatePresence>

      <div
        className={`fixed right-[12px]  z-20 h-20 w-20 rounded-full bg-black-100 transition-transform  duration-500  lg:hidden ${
          menuActive ? 'scale-[50]' : ''
        } `}
      ></div>

      <div
        className={`relative z-40 flex h-20  w-20 items-center justify-center rounded-full bg-black-100 transition  lg:hidden`}
        onClick={onClickMenuHandler}
      >
        <div
          className={`${classes['ham-bar']} ${
            menuActive ? classes['ham-active'] : ''
          } `}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
