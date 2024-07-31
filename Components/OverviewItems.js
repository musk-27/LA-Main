// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import useFetch from "useFetch.js";
// // Images
// import BorderTop from "../public/Images/footer-border.png";

// const OverviewItems = ({ selectedMonth }) => {
//   const { data: daysData } = useFetch("/caledar-days?populate=*");

//   // Filter the days based on the selectedMonth
//   const filteredDays = daysData.filter(
//     (cd) =>
//       cd.attributes?.calnedar_month?.data?.attributes.Title_With_Year ===
//       selectedMonth
//   );

//   return (
//     <div>
//       <div className="CalendarDays">
//         {filteredDays.map((cd, i) => {
//           return (
//             <div className="calendarItem" key={i}>
//               <div className="calendarItemBorderTop">
//                 <Image src={BorderTop} alt="Child Safety" />
//               </div>
//               <div className="row ">
//                 <div className="col-1"></div>
//                 <div className="col-7">
//                   <div className="calendarItemDay">
//                     <h3>{cd.attributes.school_event}</h3>
//                   </div>
//                 </div>
//                 <div className="col-4">
//                   <div
//                     className={`calendarItemDate ${cd.attributes.BackgroundColor}`}
//                   >
//                     <Link href="#" alt="">
//                       View PDf
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OverviewItems;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
// Images
import BorderTop from "../public/Images/footer-border.png";
import useFetch from "useFetch.js"; // Adjust the path to where your useFetch hook is located

const OverviewItems = ({ selectedMonth }) => {
  const { data: daysData } = useFetch("/caledar-days?populate=*");

  // Filter the days based on the selectedMonth
  const filteredDays = daysData.filter(
    (cd) =>
      cd.attributes?.calnedar_month?.data?.attributes.Title_With_Year ===
      selectedMonth
  );

  return (
    <div>
      <div className="CalendarDays">
        {filteredDays.map((cd, i) => {
          return (
            <div className="calendarItem" key={i}>
              <div className="calendarItemBorderTop">
                <Image src={BorderTop} alt="Child Safety" />
              </div>
              <div className="row ">
                <div className="col-1"></div>
                <div className="col-7">
                  <div className="calendarItemDay">
                    <h3>{cd.attributes.school_event}</h3>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className={`calendarItemDate ${cd.attributes.BackgroundColor}`}
                  >
                    <Link href="#" alt="">
                      View PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// PropTypes validation
OverviewItems.propTypes = {
  selectedMonth: PropTypes.string.isRequired,
};

export default OverviewItems;
