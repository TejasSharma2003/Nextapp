import { useEffect, useState } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import * as classes from "./alert.module.css";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import CrossButton from "@/elements/CrossButton";

const alertVariants = {
  show: {
    opacity: 1,
    y: -15,
  },
  hide: {
    opacity: 0,
    y: 15,
  },
};

const initialLoad = true;

const Alert = ({ status, message, root }) => {
  const [showAlert, setShowAlert] = useState(true);

  const onAlertUnMountHandler = () => {
    setShowAlert(false);

    const timer = setTimeout(() => {
      root.unmount();
      clearInterval(timer);
    }, 200);
  };

  useEffect(() => {
    const closeAlertTimer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    const unMountTimer = setTimeout(() => {
      root.unmount();
    }, 2500);

    return () => {
      clearTimeout(closeAlertTimer);
      clearTimeout(unMountTimer);
    };
  }, [root]);

  const tailWindColorClass =
    status === "success"
      ? "bg-[#61E868]"
      : status === "error"
      ? "bg-[rgb(223,46,56)]"
      : status === "pending"
      ? "bg-black-100"
      : "";

  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          key="alert"
          className={`relative z-[999] max-w-[28rem] overflow-hidden rounded-lg bg-black py-6 pr-14 text-3xl text-white ${classes.alertContainer}`}
          variants={alertVariants}
          initial="hide"
          animate="show"
          exit="hide"
          transition={{
            type: "spring",
            stiffness: 270,
            damping: 20,
          }}
        >
          <span
            className={`absolute left-0 top-0 inline-block h-full w-4 ${tailWindColorClass}`}
          ></span>
          <span className="box-decoration-clone pl-10 text-2xl">{message}</span>
          <CrossButton
            className="!absolute !right-2 !top-2 !h-8 !w-8 before:!bg-white after:!bg-white"
            onClick={onAlertUnMountHandler}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function showAlert(props) {
  // if alert already exit then do nothing
  const alertDom = document.getElementById("alert-container");

  if (alertDom.hasChildNodes()) return;

  const root = createRoot(alertDom);

  root.render(
    <Alert status={props?.status} message={props?.message} root={root} />
  );
}

export default showAlert;
