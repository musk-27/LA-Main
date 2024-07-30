// import { useRef, useEffect } from "react";

// const WhatsappInterakt = ({ src, onLoad }) => {
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
//       if (scriptRef.current) {
//         document.head.removeChild(scriptRef.current);
//       }
//     };
//   }, [src, onLoad]);

//   return null;
// };

// export default WhatsappInterakt;

import { useRef, useEffect } from "react";

const Script = ({ src, onLoad }) => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.head.appendChild(script);
      scriptRef.current = script;
    }
    return () => {
      if (scriptRef.current && scriptRef.current.parentNode === document.head) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [src, onLoad]);

  return null;
};

export default Script;
