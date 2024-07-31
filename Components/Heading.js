// import React from "react";
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

import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

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

// PropTypes validation
Heading.propTypes = {
  headTitle: PropTypes.string.isRequired,
  headBottomImg: PropTypes.object.isRequired,
};

export default Heading;
