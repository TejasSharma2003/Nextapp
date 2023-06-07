import React, { useEffect, useState } from 'react';
import * as classes from './navbar.module.css';

import NavLinks from './NavLinks';

import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const onClickMenuHandler = () => {
    setMenuActive(pre => !pre);
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
      <nav className={`relative z-40 flex  items-center lg:hidden `}>
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-black-100"
          onClick={onClickMenuHandler}
        >
          <div
            className={`${classes['ham-bar']} ${
              menuActive ? classes['ham-active'] : ''
            } `}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
