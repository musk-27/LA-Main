import Image from "next/image";
import Heading from "../Components/Heading";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CalendarDays from "../Components/CalendarDays";
import Layout from "../Components/layout";
import RedHeader from "../public/Images/SVG/redHeader.svg";
import BorderTop from "../public/Images/footer-border.png";

const MonthlyCalendar = () => {
  const metaData = {
    title: "Little Aryan's Pre K",
    description:
      "Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.",
    keywords: "chakkinaka , Ambernath , Happy child",
  };

  const [monthsData, setMonthsData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi.littlearyans.in/api/calnedar-months"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch months data");
        }
        const data = await response.json();
        const months = data.data.map((item) => item.attributes.Title_With_Year);
        setMonthsData(months);

        // Get the current month and year
        const currentDate = new Date();
        // const currentDate = new Date("2024-08-01");
        const currentMonth = currentDate.toLocaleString("default", {
          month: "long",
        });
        // const currentYear = currentDate.getFullYear();
        // const currentMonthYear = `${currentMonth} ${currentYear}`;
        // const currentMonthYear = `${currentMonth} ${currentYear}`;

        // Find the index of the current month
        const currentMonthIndex = months.findIndex(
          (month) =>
            currentMonth.toLowerCase() === month.split(" ")[0].toLowerCase()
        );

        if (currentMonthIndex !== -1) {
          setSelectedMonth(months[currentMonthIndex]);
          setSwiperIndex(currentMonthIndex);
        } else {
          setSelectedMonth(months[0]);
        }
      } catch (error) {
        console.error("Error fetching months data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="monthlyCalendarPage">
            <Heading headTitle="Monthly Calendar" headBottomImg={RedHeader} />
            <div className="calendarSection">
              <div className="calenderSwiperHead">
                {monthsData.length > 0 && (
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    initialSlide={swiperIndex}
                    onSlideChange={(swiper) => {
                      setSelectedMonth(monthsData[swiper.activeIndex]);
                    }}
                  >
                    {monthsData.map((month, i) => (
                      <SwiperSlide key={i}>
                        <div className="calendarSwiperMonth">
                          <h2>{month}</h2>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <CalendarDays selectedMonth={selectedMonth} />
              <div className="calendarItemBorderTop">
                <Image src={BorderTop} alt="Daycare Services" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MonthlyCalendar;
