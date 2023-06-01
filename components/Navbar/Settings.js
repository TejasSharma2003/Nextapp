import React from "react";
import { CiLock, CiBookmark } from "react-icons/ci";
import ExitIcon from "@/ui/ExitIcon";

import { easeInOut, motion } from "framer-motion";

const settingsVariants = {
  show: {
    y: 120,
    opacity: 1,
  },
  hide: {
    y: 130,
    opacity: 0,
  },
};

const Settings = props => {
  return (
    <motion.div
      variants={settingsVariants}
      initial="hide"
      animate="show"
      exit="hide"
      transition={{
        duration: 0.2,
        ease: easeInOut,
      }}
      className="absolute bottom-0 right-0 z-10  w-96  translate-y-full rounded-xl bg-black-100 px-8 py-5 text-2xl text-white shadow-sm"
    >
      <div className="mb-7 flex cursor-pointer items-center">
        <CiLock className="mr-3 text-4xl" />
        <p className="whitespace-nowrap">Change my password</p>
      </div>
      <div className="mb-7 flex cursor-pointer items-center">
        <CiBookmark className="mr-3  text-4xl" />
        <p className="whitespace-nowrap">Saved Posts</p>
      </div>

      <div
        className="flex cursor-pointer  items-center"
        onClick={props.onSignoutHandler}
      >
        <ExitIcon />
        <p className="whitespace-nowrap">Sign out</p>
      </div>
    </motion.div>
  );
};

export default Settings;
