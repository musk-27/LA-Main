// // // import "swiper/css";
// // // import "aos/dist/aos.css";
// // // import "../styles/globals.css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";
// // // // import Layout from '@/Components/layout';
// // // import Layout from "../Components/layout";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import "../styles/globals.css"; // your global CSS
// // // import SSRProvider from "react-bootstrap/SSRProvider";

// // // export default function App({ Component, pageProps }) {
// // //   return (
// // //     <SSRProvider>
// // //       <Layout>
// // //         <Component {...pageProps} />
// // //       </Layout>
// // //     </SSRProvider>
// // //   );
// // // }

// // import "swiper/css";
// // import React from "react";
// // import "aos/dist/aos.css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import "../styles/globals.css"; // Global CSS
// // import "bootstrap/dist/css/bootstrap.min.css";

// // import dynamic from "next/dynamic";
// // import SSRProvider from "react-bootstrap/SSRProvider";

// // // Dynamically import Layout to optimize initial load
// // const Layout = dynamic(() => import("../Components/layout"));

// // export default function App({ Component, pageProps }) {
// //   return (
// //     <SSRProvider>
// //       <Layout>
// //         <Component {...pageProps} />
// //       </Layout>
// //     </SSRProvider>
// //   );
// // }

// import "swiper/css";
// import React from "react";
// import "aos/dist/aos.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../styles/globals.css"; // Global CSS
// import "bootstrap/dist/css/bootstrap.min.css";

// import dynamic from "next/dynamic";
// import SSRProvider from "react-bootstrap/SSRProvider";
// import PropTypes from "prop-types"; // Import PropTypes

// // Dynamically import Layout to optimize initial load
// const Layout = dynamic(() => import("../Components/layout"));

// function App({ Component, pageProps }) {
//   return (
//     <SSRProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </SSRProvider>
//   );
// }

// // Add prop types validation
// App.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };

// export default App;

// import "swiper/css";
// import "aos/dist/aos.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import React, { useEffect } from "react";
// import "../styles/globals.css"; // Global CSS
// import "bootstrap/dist/css/bootstrap.min.css";

// import dynamic from "next/dynamic";
// import { GlobalWorkerOptions } from "pdfjs-dist";
// import SSRProvider from "react-bootstrap/SSRProvider";
// import PropTypes from "prop-types"; // Import PropTypes

// // Dynamically import Layout to optimize initial load
// const Layout = dynamic(() => import("../Components/layout"));

// function App({ Component, pageProps }) {
//   // Configure the PDF worker
//   // useEffect(() => {
//   //   GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`;
//   // }, []);

//   useEffect(() => {
//     GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js";
// }, []);

//   return (
//     <SSRProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </SSRProvider>
//   );
// }

// // Add prop types validation
// App.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };

// export default App;

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
