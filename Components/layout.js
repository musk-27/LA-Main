import React from "react";
import Head from "next/head";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import MobileNavbar from "./Header/mobileNavbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Little Aryans</title>
      <meta
        name="keywords"
        content="Little Aryans, Little Aryans Ambernath, Best school in Ambernath, Arya Global"
      />
      <meta
        name="description"
        content="Nurturing Education. A stimulating and positive environment nurturing confidence through all domains of development, catering to the 3 R’s namely reading, writing and arithmetic readiness"
      />
    </Head>
    <Header />
    <MobileNavbar />
    <main
      style={{
        backgroundColor: "#FFEFD9",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1440px" }}>{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
