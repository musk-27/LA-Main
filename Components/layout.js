import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import MobileNavbar from "../Components/Header/mobileNavbar";
import Script from "next/script";

const Layout = ({ children, metaTitle, description }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-KBRD4SW8WK";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-KBRD4SW8WK");
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BWNNYD66H1"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BWNNYD66H1');
        `}
      </Script>
      <Head>
        {/* <SEO metaTitle={metaTitle} description={description} /> */}
        {/* <meta name="keywords" content="Little Aryans, Little Aryans Ambernath, Best school in Ambernath, Arya Global" />
        <meta name="description" content="Nurturing Education. A stimulating and positive environment nurturing confidence through all domains of development, catering to the 3 R’s namely reading, writing and arithmetic readiness" /> */}
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
};

export default Layout;
