import '@/styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';
import Layout from './../components/Layout';

// This hook returns a function that you can call to remove unused styles when the 'out' phase of the transition is complete and the new page mounts.
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition';
import Banner from '@/ui/Banner';
import Context from '@/context/context';

export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps;

  const _ = useNextCssRemovalPrevention();

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

        <Context>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Context>
      </SessionProvider>
      <div
        id="alert-container"
        className="fixed bottom-10 right-5  z-[999]"
      ></div>
    </>
  );
}
