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

const MonthlyCalendar = () => {
  const { data: monthsData } = useFetch("/calnedar-months");
  const [selectedMonth, setSelectedMonth] = useState(
    monthsData?.attributes?.Title_With_Year
  );
  // console.log("Selected Month:" + selectedMonth);

  return (
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

          {/* Calendar Head */}
          {/* <div className="calendarHead">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <div className="leftArrow">
                  <Image src={LeftArrow} alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="calendarHeadText">
                  <h2>DECEMBER 2022</h2>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end align-items-center">
                <div className="rightArrow">
                  <Image src={RightArrow} alt="" />
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Head */}

          {/* ==== Calendar Items ===== */}
          <CalendarDays selectedMonth={selectedMonth} />

          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>THU</h4>
                  <h2>01</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>Report Card Data Entry</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>World Aids Day</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}
          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>MON</h4>
                  <h2>05</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>Khel Mela Practice Begins for LA2</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>-</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}
          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>Mon</h4>
                  <h2>10</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>Khel Mela Tentative (LA6)</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>Human Rights Day</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}
          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>SUN</h4>
                  <h2>11</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>Chairman’s Day (Sukhmani Path)</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>-</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}
          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>MON</h4>
                  <h2>12</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>Khel Mela Practice Begins for LA1</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>-</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}
          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>FRI</h4>
                  <h2>16</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>Ganit Saptah Begins</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>- </h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}

          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>SAT</h4>
                  <h2>17</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>Khel Mela Tentative (LA2)</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>-</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}

          {/* Calendar Item */}
          {/* <div className="calendarItem">
            <div className="calendarItemBorderTop">
              <Image src={BorderTop} alt="" />
            </div>
            <div className="row ">
              <div className="col-3">
                <div className="calendarItemDate">
                  <h4>WED</h4>
                  <h2>21</h2>
                </div>
              </div>
              <div className="col-6">
                <div className="calendarItemDay">
                  <h3>-</h3>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <div className="calendarItemNote">
                  <h4>National Mathematics Day</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Calendar Item */}
          <div className="calendarItemBorderTop">
            <Image src={BorderTop} alt="Daycare Services" />
          </div>
        </div>
        {/* ================ End Calendar ================== */}
      </div>
    </div>
  );
};

export default MonthlyCalendar;
