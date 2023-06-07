import '@/styles/globals.css';

import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';

import { AnimatePresence } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';

export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  const router = useRouter();
  const page = router.asPath;

  return (
    <>
      <div id="model"></div>
      <div id="mobile_nav"></div>

      <SessionProvider session={session}>
        {/* progressbar */}
        <NextNProgress
          color="linear-gradient(90deg, #FF602E, #ff602e)"
          options={{ easing: 'ease', speed: 300 }}
        />
        <Navbar />

        {/* page transition */}
        <AnimatePresence
          mode="wait"
          initial={page === '/' ? true : false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {/* Layout responsibe for wrapping every page  */}
          <MainContent uniqueId={page}>
            <Component {...pageProps} />
          </MainContent>
        </AnimatePresence>

        {/* Do not render footer on home page */}
        {page !== '/' && <Footer />}
      </SessionProvider>
      <div
        id="alert-container"
        className="fixed bottom-10 right-5  z-[999]"
      ></div>
    </>
  );
}
