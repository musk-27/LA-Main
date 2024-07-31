// // import { Html, Head, Main, NextScript } from "next/document";

// // export default function Document() {
// //   return (
// //     <Html lang="en">
// //       <Head>
// //         {/* Global Site Tag (gtag.js) - Google Analytics */}
// //         <script
// //           async
// //           src="https://www.googletagmanager.com/gtag/js?id=G-BWNNYD66H1"
// //         ></script>
// //         <script
// //           dangerouslySetInnerHTML={{
// //             __html: `
// //               window.dataLayer = window.dataLayer || [];
// //               function gtag(){dataLayer.push(arguments);}
// //               gtag('js', new Date());
// //               gtag('config', 'G-BWNNYD66H1');
// //             `,
// //           }}
// //         />
// //       </Head>
// //       <body>
// //         <Main />
// //         <NextScript />
// //       </body>
// //     </Html>
// //   );
// // }

// import Script from "next/script";
// import Document, { Html, Head, Main, NextScript } from "next/document";

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />

//           {/* Google Analytics Script */}
//           <Script
//             src={`https://www.googletagmanager.com/gtag/js?id=G-BWNNYD66H1`}
//             strategy="afterInteractive"
//           />
//           <Script id="google-analytics" strategy="afterInteractive">
//             {`
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-BWNNYD66H1', {
//                 page_path: window.location.pathname,
//               });
//             `}
//           </Script>
//         </body>
//       </Html>
//     );
//   }
// }

import React from "react";
import Script from "next/script";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/* Other head elements can be added here */}</Head>
        <body>
          <Main />
          <NextScript />

          {/* Google Analytics Script */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BWNNYD66H1"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BWNNYD66H1', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </body>
      </Html>
    );
  }
}
