// // // // import React, { useState } from "react";
// // // // import { useRouter } from "next/router";
// // // // import ReactMarkdown from "react-markdown";

// // // // const LimitedCharacters = ({ text, maxLength, blogSlug }) => {
// // // //   const [showFull, setShowFull] = useState(false);
// // // //   const router = useRouter();

// // // //   const handleReadMore = () => {
// // // //     router.push(`/BlogDetail/${blogSlug}`);
// // // //   };

// // // //   if (text.length <= maxLength) {
// // // //     return <ReactMarkdown>{text}</ReactMarkdown>;
// // // //   }

// // // //   return (
// // // //     <>
// // // //       {showFull ? (
// // // //         <ReactMarkdown>{text}</ReactMarkdown>
// // // //       ) : (
// // // //         <>
// // // //           <ReactMarkdown>{`${text.slice(0, maxLength)}...`}</ReactMarkdown>
// // // //           <button onClick={handleReadMore} className="readMoreButton">
// // // //             Read More...
// // // //           </button>
// // // //         </>
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default LimitedCharacters;

// // import React, { useState } from "react";
// // import { useRouter } from "next/router";
// // import ReactMarkdown from "react-markdown";

// // const LimitedCharacters = ({ text, maxLength, blogSlug }) => {
// //   const [showFull, setShowFull] = useState(false);
// //   const router = useRouter();

// //   const handleReadMore = () => {
// //     router.push(`/BlogDetail/${blogSlug}`);
// //   };

// //   if (text.length <= maxLength) {
// //     return <ReactMarkdown>{text}</ReactMarkdown>;
// //   }

// //   return (
// //     <>
// //       {showFull ? (
// //         <ReactMarkdown>{text}</ReactMarkdown>
// //       ) : (
// //         <>
// //           <ReactMarkdown>{`${text.slice(0, maxLength)}...`}</ReactMarkdown>
// //           <button onClick={handleReadMore} className="readMoreButton">
// //             Read More...
// //           </button>
// //         </>
// //       )}
// //     </>
// //   );
// // };

// // export default LimitedCharacters;

// import PropTypes from "prop-types";
// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import ReactMarkdown from "react-markdown";

// const LimitedCharacters = ({ text, maxLength, blogSlug }) => {
//   const [showFull, setShowFull] = useState(false);
//   const router = useRouter();

//   const handleReadMore = () => {
//     router.push(`/BlogDetail/${blogSlug}`);
//   };

//   if (text.length <= maxLength) {
//     return <ReactMarkdown>{text}</ReactMarkdown>;
//   }

//   return (
//     <>
//       {showFull ? (
//         <ReactMarkdown>{text}</ReactMarkdown>
//       ) : (
//         <>
//           <ReactMarkdown>{`${text.slice(0, maxLength)}...`}</ReactMarkdown>
//           <button onClick={handleReadMore} className="readMoreButton">
//             Read More...
//           </button>
//         </>
//       )}
//     </>
//   );
// };

// // PropTypes validation
// LimitedCharacters.propTypes = {
//   text: PropTypes.string.isRequired,
//   maxLength: PropTypes.number.isRequired,
//   blogSlug: PropTypes.string.isRequired,
// };

// export default LimitedCharacters;


import PropTypes from "prop-types";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const LimitedCharacters = ({ text, maxLength, blogSlug }) => {
  const [showFull, setShowFull] = useState(false);
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/BlogDetail/${blogSlug}`);
  };

  if (!text || typeof text !== "string") {
    return null; // or handle differently if needed
  }

  if (text.length <= maxLength) {
    return <ReactMarkdown>{text}</ReactMarkdown>;
  }

  return (
    <>
      {showFull ? (
        <ReactMarkdown>{text}</ReactMarkdown>
      ) : (
        <>
          <ReactMarkdown>{`${text.slice(0, maxLength)}...`}</ReactMarkdown>
          <button onClick={handleReadMore} className="readMoreButton">
            Read More...
          </button>
        </>
      )}
    </>
  );
};

// PropTypes validation
LimitedCharacters.propTypes = {
  text: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  blogSlug: PropTypes.string.isRequired,
};

// Default Props
LimitedCharacters.defaultProps = {
  text: "",
};

export default LimitedCharacters;
