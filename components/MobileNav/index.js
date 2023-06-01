import React, { useEffect, useState } from "react";
import * as styles from "./navbar.module.css";

import NavLinks from "./NavLinks";

import { AnimatePresence } from "framer-motion";

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
        <div className={`${styles.menu} flex `}>
          <div
            onClick={onClickMenuHandler}
            className={`${styles["menu-box"]} flex cursor-pointer items-center justify-center self-center`}
          >
            <span
              className={`${styles.ham} flex h-5 w-12 items-center ${
                menuActive ? styles["ham-active"] : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
