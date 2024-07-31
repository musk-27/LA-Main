// import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../Components/Header/header";
import MobileNavbar from "../Components/Header/mobileNavbar";

import Script from "next/script";
import { NextSeo } from "next-seo";
import Footer from "../Components/Footer/footer";

const Layout = ({ children, metaData = {}, includeHeaderFooter = true }) => {
  const {
    title = `Little Aryan's Pre K`,
    description = `Little Aryan's Pre K offers a nurturing and stimulating environment for early childhood education. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development.`,
    keywords = `Early Childhood Education, Best Preschool Programs, Child Development`,
  } = metaData;

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
      <NextSeo title={title} description={description} keywords={keywords} />
      {includeHeaderFooter && <Header />}
      {includeHeaderFooter && <MobileNavbar />}
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
      <main
        style={{
          backgroundColor: "#FFEFD9",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1440px" }}>{children}</div>
      </main>
      {includeHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
