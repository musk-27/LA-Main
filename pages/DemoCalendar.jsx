import React from "react";
import Image from "next/image";
import Heading from "../Components/Heading";
// import useFetch from "useFetch.js";
import { fetchDataFromApi } from "../utils/apis";
// Images
import RedHeadBottom from "../public/Images/red-head-underline.png";
import LeftArrow from "../public/Images/left-arrow.png";
import RightArrow from "../public/Images/right-arrow.png";
import BorderTop from "../public/Images/footer-border.png";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
// import { Autoplay, Navigation } from "swiper";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

const MonthlyCalendar = () => {
  // const [data, setData] = useState(null);
  const [setData] = useState(null);

  useEffect(() => {
    fetchCalendar();
  }, []);

  const fetchCalendar = async () => {
    const { data } = await fetchDataFromApi("/calendar-days");
    setData({ data });
  };

  return (
    <div>
      <div className="monthlyCalendarPage">
        {/* Heading */}
        <Heading headTitle="Monthly Calendar" headBottomImg={RedHeadBottom} />
        {/* ================= Calendar =================== */}
        <div className="calendarSection">
          {/* Calendar Head */}
          <div className="calendarHead">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <div className="leftArrow">
                  <Image src={LeftArrow} alt="Cognitive Development" />
                </div>
              </div>
              <div className="col-6">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  slidesPerView={1}
                  navigation={true}
                  modules={[Navigation]}
                >
                  <SwiperSlide>
                    <div className="calendarHeadText">
                      <h2>DECEMBER 2022</h2>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="calendarHeadText">
                      <h2>JANUARY 2023</h2>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="calendarHeadText">
                      <h2>FEBRUARY 2023</h2>
                    </div>
                  </SwiperSlide>

                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </Swiper>
              </div>
              <div className="col-3 d-flex justify-content-end align-items-center">
                <div className="rightArrow">
                  <Image src={RightArrow} alt="Social Skills" />
                </div>
              </div>
            </div>
          </div>
          {/* End Calendar Head */}

          <div className="calendarItemBorderTop">
            <Image src={BorderTop} alt="Emotional Growth" />
          </div>
        </div>
        {/* ================ End Calendar ================== */}
      </div>
    </div>
  );
};

export default MonthlyCalendar;
