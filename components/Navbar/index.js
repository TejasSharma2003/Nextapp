import { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import * as classes from './navbar.module.css';
import { useRouter } from 'next/router';

import Auth from '../Auth';

import { signOut, useSession } from 'next-auth/react';

import Container from '@/ui/Container';

import { IoIosArrowDown } from 'react-icons/io';

import Avatar from '../Avatar';
import Logo from '../Logo';
import Button from '@/elements/Button';

import Link from 'next/link';
import { navLinks } from './navlinks';

import Dropdown from './Dropdown';
import { AnimatePresence } from 'framer-motion';
import showAlert from '../AlertContainer';
import MobileNav from '../MobileNav';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { LoadingStateContext } from '@/context/context';

const Navbar = () => {
  const [modelIsVisible, setModelIsVisile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [modelFor, setModelFor] = useState('');
  const { isLoaderOut } = useContext(LoadingStateContext);

  const { data: session, status } = useSession();

  let isTopPage = true;

  if (typeof window !== 'undefined') {
    isTopPage = document.body.scrollTop === 0;
  }

  const router = useRouter();
  const pagePath = router.asPath;

  const resetShowSetting = () => {
    setShowDropdown(false);
  };

  const onSignoutHandler = async () => {
    await signOut({ redirect: false });
    showAlert({
      status: 'pending',
      message: 'Hold on we are working...',
    });
    resetShowSetting();
  };

  const onOpenModelHandler = (event) => {
    setModelIsVisile(true);
    const { innerText } = event.target;
    setModelFor(innerText.toLowerCase());
  };

  const onCloseModelHandler = () => {
    setModelIsVisile(false);
  };

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
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={isLoaderOut ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <Container className="relative">
          <nav className={`flex items-center justify-between py-6`}>
            <div className="hidden sm:block md:w-3/12">
              <Logo />
            </div>
            <div>
              <h1 className="block font-primary text-5xl font-bold text-primary sm:hidden">
                <Image src="/images/site/ts.svg" width={40} height={30} />
              </h1>
            </div>

            {/* profile options */}
            <AnimatePresence>
              {showDropdown && (
                <Dropdown
                  key="profile-Dropdown"
                  onSignoutHandler={onSignoutHandler}
                  setShowDropdown={setShowDropdown}
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
                      pagePath === link.path ? classes.linkActive : ''
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
              {status === 'authenticated' ? (
                <>
                  {/* <Link href="/new" className="mr-10">
                    <Button className="flex w-auto items-center justify-center border-2 border-white-100/[.2] px-10 text-white-100">
                      <WriteIcon className=" !h-9 !w-9" />
                      <span className="ml-2 text-2xl">Write</span>
                    </Button>
                  </Link> */}

                  <div
                    className={`relative flex cursor-pointer items-center justify-center ${classes.profileBox}`}
                    onClick={() => setShowDropdown((pre) => !pre)}
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
                    className="mr-10  sm:block"
                    onClick={onOpenModelHandler}
                  >
                    Login
                  </Button>

                  {/* </Link> */}
                  <Button
                    type="fill"
                    className="hidden  lg:block"
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
      </motion.div>
    </>
  );
};

const AuthModel = (props) => {
  return createPortal(<Auth {...props} />, document.getElementById('model'));
};

export default Navbar;
