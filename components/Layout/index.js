import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";

const Layout = props => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main className={`${router.pathname === "/" || "pt-24"}`}>
        {props.children}
      </main>

      {router.pathname !== "/" && <Footer />}
    </>
  );
};

export default Layout;
