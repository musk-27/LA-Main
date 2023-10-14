import useFetch from "@/useFetch";
import React from "react";
import Image from "next/image";
// Images
import BorderTop from "../public/Images/footer-border.png";

const CalendarDays = ({ selectedMonth }) => {
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
                <Image src={BorderTop} alt="" />
              </div>
              <div className="row ">
                <div className="col-3">
                  <div
                    className={`calendarItemDate ${cd.attributes.BackgroundColor}`}
                  >
                    <h4>{cd.attributes.Day}</h4>
                    <h2>{cd.attributes.date}</h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="calendarItemDay">
                    <h3>{cd.attributes.school_event}</h3>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <div className="calendarItemNote">
                    <h4>{cd.attributes.global_event}</h4>
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

export default CalendarDays;
