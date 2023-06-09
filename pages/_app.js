import '@/styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import Layout from './../components/Layout';

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

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <div
        id="alert-container"
        className="fixed bottom-10 right-5  z-[999]"
      ></div>
    </>
  );
}
