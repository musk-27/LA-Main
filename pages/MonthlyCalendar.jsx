import Image from "next/image";
import Heading from "../Components/Heading";
import React, { useRef, useState } from "react";
import Link from "next/link";
// Images
import RedHeadBottom from "../public/Images/red-head-underline.png";
import LeftArrow from "../public/Images/left-arrow.png";
import RightArrow from "../public/Images/right-arrow.png";
import BorderTop from "../public/Images/footer-border.png";
import RedHeader from "../public/Images/SVG/redHeader.svg";
import NandivaliBottom from "../public/Images/SVG/scribbleDarkGreen.svg";
import Arrow from "../public/Images/Arrow-right.png";
// Swiper
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "useFetch.js";
import CalendarDays from "../Components/CalendarDays";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const MonthlyCalendar = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
    description:
      `Little Aryan's Pre K offers a nurturing and stimulating environment for early childhood education. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development.`,
    keywords: "chakkinaka , Ambernath , Happy child",
  };

  const { data: monthsData } = useFetch("/calnedar-months");
  const [selectedMonth, setSelectedMonth] = useState(
    monthsData?.attributes?.Title_With_Year
  );

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="monthlyCalendarPage">
            {/* Heading */}
            <Heading headTitle="Monthly Calendar" headBottomImg={RedHeader} />
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
              <CalendarDays selectedMonth={selectedMonth} />

              {/* Calendar Item */}
              <div className="calendarItemBorderTop">
                <Image src={BorderTop} alt="Daycare Services" />
              </div>
            </div>
            {/* ================ End Calendar ================== */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default MonthlyCalendar;
