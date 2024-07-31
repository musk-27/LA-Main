// import "swiper/css";
// import "aos/dist/aos.css";
// import "../styles/globals.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import Layout from '@/Components/layout';
// import Layout from "../Components/layout";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/globals.css"; // your global CSS
// import SSRProvider from "react-bootstrap/SSRProvider";

// export default function App({ Component, pageProps }) {
//   return (
//     <SSRProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </SSRProvider>
//   );
// }

import "swiper/css";
import React from "react";
import "aos/dist/aos.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.css"; // Global CSS
import "bootstrap/dist/css/bootstrap.min.css";

import dynamic from "next/dynamic";
import SSRProvider from "react-bootstrap/SSRProvider";

// Dynamically import Layout to optimize initial load
const Layout = dynamic(() => import("../Components/layout"));

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
