// // // import { useRef, useEffect } from "react";

// // // const WhatsappInterakt = ({ src, onLoad }) => {
// // //   const scriptRef = useRef(null);

// // //   useEffect(() => {
// // //     if (!scriptRef.current) {
// // //       const script = document.createElement("script");
// // //       script.src = src;
// // //       script.async = true;
// // //       script.onload = onLoad;
// // //       document.head.appendChild(script);
// // //       scriptRef.current = script;
// // //     }
// // //     return () => {
// // //       if (scriptRef.current) {
// // //         document.head.removeChild(scriptRef.current);
// // //       }
// // //     };
// // //   }, [src, onLoad]);

// // //   return null;
// // // };

// // // export default WhatsappInterakt;

// // import { useRef, useEffect } from "react";

// // const Script = ({ src, onLoad }) => {
// //   const scriptRef = useRef(null);

// //   useEffect(() => {
// //     if (!scriptRef.current) {
// //       const script = document.createElement("script");
// //       script.src = src;
// //       script.async = true;
// //       script.onload = onLoad;
// //       document.head.appendChild(script);
// //       scriptRef.current = script;
// //     }
// //     return () => {
// //       if (scriptRef.current && scriptRef.current.parentNode === document.head) {
// //         document.head.removeChild(scriptRef.current);
// //       }
// //     };
// //   }, [src, onLoad]);

// //   return null;
// // };

// // export default Script;

// import PropTypes from "prop-types";
// import { useRef, useEffect } from "react";

// const Script = ({ src, onLoad }) => {
//   const scriptRef = useRef(null);

//   useEffect(() => {
//     if (!scriptRef.current) {
//       const script = document.createElement("script");
//       script.src = src;
//       script.async = true;
//       script.onload = onLoad;
//       document.head.appendChild(script);
//       scriptRef.current = script;
//     }
//     return () => {
//       if (scriptRef.current && scriptRef.current.parentNode === document.head) {
//         document.head.removeChild(scriptRef.current);
//       }
//     };
//   }, [src, onLoad]);

//   return null;
// };

// Script.propTypes = {
//   src: PropTypes.string.isRequired,
//   onLoad: PropTypes.func.isRequired,
// };

// export default Script;


// ./Components/WhatsappInterakt.js
import { useEffect, useRef } from "react";

const WhatsappInterakt = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.src = "https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=" + new Date().getTime();
      script.async = true;
      script.onload = () => {
        if (window.kiwi) {
          window.kiwi.init("", "JRSetUd47MjEYlsgIzFZ09KnBu7zPZYi", {});
        }
      };
      document.head.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode === document.head) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  return null;
};

export default WhatsappInterakt;
