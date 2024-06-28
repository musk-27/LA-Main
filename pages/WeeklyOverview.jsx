import Image from "next/image";
import Heading from "@/Components/Heading";
import React, { useRef, useState } from "react";
import Link from "next/link";
// Images
import BorderTop from "../public/Images/footer-border.png";
import RedHeader from "../public/Images/SVG/redHeader.svg";
// Swiper
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "@/useFetch";
import CalendarDays from "@/Components/CalendarDays";
import OverviewItems from "@/Components/OverviewItems";
const WeeklyOverview = () => {
  const { data: monthsData } = useFetch("/calnedar-months");
  const [selectedMonth, setSelectedMonth] = useState(
    monthsData?.attributes?.Title_With_Year
  );

  return (
    <div>
      <div className="WeeklyOverviewPage">
        <Heading headTitle="Weekly Overview" headBottomImg={RedHeader} />
        {/* ================= Calendar =================== */}
        <div className="calendarSection">
          {/* Calendar Swiper Head */}
          <div className="calenderSwiperHead">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={(swiper) => {
                setSelectedMonth(
                  monthsData[swiper.activeIndex].attributes?.Title_With_Year
                );
              }}
            >
              {monthsData.map((months, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="calendarSwiperMonth">
                      <h2>{months.attributes.Title_With_Year}</h2>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* ==== Calendar Items ===== */}
          <OverviewItems selectedMonth={selectedMonth} />
          <div className="calendarItemBorderTop">
            <Image src={BorderTop} alt="School Readiness Skills" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyOverview;
