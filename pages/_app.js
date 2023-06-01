import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

import NextNProgress from "nextjs-progressbar";

import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";
import Banner from "@/ui/Banner";

import { getSession } from "next-auth/react";

import { authOptions } from "./api/auth/[...nextauth]";

export default function App({ Component, pageProps }) {
  const [showBanner, setShowBanner] = useState(true);
  const { session } = pageProps;
  const router = useRouter();
  const pageKey = router.asPath;
  const getLayout = Component.getLayout || (page => <Layout>{page}</Layout>);

  return (
    <>
      {/* <AnimatePresence>
        {showBanner && <Banner setShowBanner={setShowBanner} />}
      </AnimatePresence> */}

      <div id="model"></div>

      <NextNProgress
        color="#FF602E"
        options={{ easing: "ease", showSpinner: false }}
      />

      <SessionProvider session={session}>
        <AnimatePresence mode="popLayout">
          {getLayout(<Component key={pageKey} {...pageProps} />)}
        </AnimatePresence>
      </SessionProvider>
      <div id="alert-container" className="fixed bottom-10 right-5  z-50"></div>
    </>
  );
}
