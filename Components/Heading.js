// import Image from "next/image";

// const Heading = (props) => {
//   return (
//     <div>
//       <div className="centersHead">
//         <h1>{props.headTitle}</h1>
//         <div className="centerHeadImg">
//           <Image src={props.headBottomImg} alt="Toddler Activities" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heading;

import Image from "next/image";
import React from "react"; // Import React for JSX
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const Heading = (props) => {
  return (
    <div>
      <div className="centersHead">
        <h1>{props.headTitle}</h1>
        <div className="centerHeadImg">
          <Image src={props.headBottomImg} alt="Toddler Activities" />
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
Heading.propTypes = {
  headTitle: PropTypes.string.isRequired, // Expecting a string and it's required
  headBottomImg: PropTypes.string.isRequired, // Expecting a string and it's required
};

export default Heading;
