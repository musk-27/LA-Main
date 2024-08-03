import "../styles/globals.css";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalWorkerOptions } from "pdfjs-dist";
import SSRProvider from "react-bootstrap/SSRProvider";
import ErrorBoundary from "../Components/ErrorBoundary"; // Ensure this path is correct

const Layout = dynamic(() => import("../Components/layout"));

function App({ Component, pageProps }) {
  useEffect(() => {
    GlobalWorkerOptions.workerSrc =
      "https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js";
  }, []);

  return (
    <SSRProvider>
      {/* return (
     <SSRProvider>
       <Layout>
         <Component {...pageProps} />
       </Layout>
     </SSRProvider>
 );
} */}
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </SSRProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
