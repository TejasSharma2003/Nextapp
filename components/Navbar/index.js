import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as classes from "./navbar.module.css";
import { useRouter } from "next/router";

import Auth from "../Auth";

import { signOut, useSession } from "next-auth/react";

import Container from "@/ui/Container";
import WriteIcon from "@/ui/WriteIcon";

import { IoIosArrowDown } from "react-icons/io";

import Avatar from "../Avatar";
import Logo from "../Logo";
import Button from "@/elements/Button";

import Link from "next/link";
import { navLinks } from "./navlinks";

import Settings from "./Settings";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import showAlert from "../AlertContainer";
import MobileNav from "../MobileNav";

const Navbar = () => {
  const [modelIsVisible, setModelIsVisile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [modelFor, setModelFor] = useState("");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [preScrollPosition, setPreScrollPosition] = useState(0);

  const { data: session, status } = useSession();

  const router = useRouter();
  const pagePath = router.asPath;

  const resetShowSetting = () => {
    setShowSettings(false);
  };

  const onSignoutHandler = async () => {
    await signOut({ redirect: false });
    showAlert({
      status: "pending",
      message: "Hold on we are working...",
    });
    resetShowSetting();
  };

  const onOpenModelHandler = event => {
    setModelIsVisile(true);
    const { innerText } = event.target;
    setModelFor(innerText.toLowerCase());
  };

  const onCloseModelHandler = () => {
    setModelIsVisile(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsNavbarVisible(preScrollPosition > currentPosition);
      setPreScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [preScrollPosition]);

  return (
    <>
      <AnimatePresence>
        {modelIsVisible && (
          <AuthModel
            modelIsVisible={modelIsVisible}
            onCloseModelHandler={onCloseModelHandler}
            modelFor={modelFor}
          />
        )}
      </AnimatePresence>
      <div
        className={`fixed top-0 z-10 w-full px-5 backdrop-blur transition-transform ${
          !isNavbarVisible ? "-translate-y-full" : ""
        }`}
      >
        <Container className="relative">
          <nav className={`flex items-center justify-between py-5`}>
            <div className="md:w-3/12">
              <Logo />
            </div>

            {/* profile options */}
            <AnimatePresence>
              {showSettings && (
                <Settings
                  key="profile-settings"
                  onSignoutHandler={onSignoutHandler}
                />
              )}
            </AnimatePresence>

            {/* Navlinks */}

            <ul className="hidden justify-center text-[1.7rem] lg:flex lg:w-3/12 lg:items-center ">
              {navLinks.map((link, idx) => {
                return (
                  <li
                    key={idx}
                    className={`mr-10 text-white-100 ${classes.navLink} ${
                      pagePath === link.path ? classes.linkActive : ""
                    }`}
                  >
                    <Link href={`${link.path}`} className="inline-block py-2">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center  justify-end md:w-3/12">
              {status === "authenticated" ? (
                <>
                  <Link href="/new" className="mr-10">
                    <Button className="flex w-auto items-center justify-center border-2 border-white-100/[.2] px-10 text-white-100">
                      <WriteIcon className=" !h-9 !w-9" />
                      <span className="ml-2 text-2xl">Write</span>
                    </Button>
                  </Link>

                  <div
                    className={`relative flex cursor-pointer items-center justify-center ${classes.profileBox}`}
                    onClick={() => setShowSettings(pre => !pre)}
                  >
                    <Avatar
                      imageSrc={session?.user.image}
                      width={45}
                      height={45}
                    />
                    <IoIosArrowDown
                      className={`ml-2 text-3xl text-white-100 transition-transform ${classes.arrowDown}`}
                    />
                  </div>
                </>
              ) : (
                <div className="relative flex items-center">
                  <Button
                    type="ghost"
                    className="mr-10 hidden px-10 py-2 text-[1.7rem] sm:block"
                    onClick={onOpenModelHandler}
                  >
                    Login
                  </Button>

                  {/* </Link> */}
                  <Button
                    type="fill"
                    className="hidden px-12 py-2 text-[1.7rem] lg:block"
                    onClick={onOpenModelHandler}
                  >
                    Signup
                  </Button>

                  <MobileNav />
                </div>
              )}
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

const AuthModel = props => {
  return createPortal(<Auth {...props} />, document.getElementById("model"));
};

export default Navbar;
