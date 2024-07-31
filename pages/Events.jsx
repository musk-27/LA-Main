import React from "react";
import Image from "next/image";
// import Link from "next/link";
import Heading from "../Components/Heading";
// Images
// import HeadBottomImg from "../public/Images/pink-head-underline.png";
import CalendarImg from "../public/Images/CalendarImg.png";
// import ArrowRight from "../public/Images/Arrow-right.png";
// import AwardsGal1 from "../public/Images/AwardsGal1.png";
// import CoScholasticGal2 from "../public/Images/coScholasticGal2.png";
// import JanmastamiImg from "../public/Images/janmastamiImg.png";
// import HoliImg from "../public/Images/holiImg.png";
// import GrandparentsImg from "../public/Images/grandparentsImg.png";
// import AnnualDayGal1 from "../public/Images/AnnualDayGal1.png";
// import AnnualDayGal2 from "../public/Images/AnnualDayGal1.png";
// import KhelMelaGal1 from "../public/Images/KhelMelaGal1.png";
// import IndependenceDayImg from "../public/Images/IndependenceDayImg.png";
// import VidhyaArambhamImg from "../public/Images/VidhyaArambhamImg.png";
// import NavratriGal1 from "../public/Images/NavratriGal1.png";
// import ChildrensDayGal2 from "../public/Images/ChildrensDayGal2.png";
// import ChildrensDayGal1 from "../public/Images/ChildrensDayGal1.png";
// import MkpGal1 from "../public/Images/MkpGal1.png";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Pagination } from "swiper";
// import { Autoplay, Navigation, Pagination } from "swiper";
import useFetch from "useFetch.js";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const Events = () => {
  const metaData = {
    title: "Little Aryan's Pre K",
        description:
          "Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.",
    keywords:
      "Language Development, Motor Skills Development, Art and Craft Activities",
  };

  const { data } = useFetch("/event-galleries?populate=*");
  const ImageApi = "https://strapi.littlearyans.in";

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="eventsPage">
            {/* Heading */}
            <Heading headTitle="Events" headBottomImg={PinkHeader} />

            {/*Events Description  */}
            <div className="lessPaddingInfoSection">
              <div className="infoSectionInner">
                <div className="eventsDescText">
                  <p>
                    At Little Aryans we celebrate a plethora of events that
                    garner 100% participation from students. Our events centre
                    around Indian culture, patriotism and global events. Each
                    event is unique in the way it is conducted and gives the
                    child the freedom to express.
                  </p>
                </div>
                <div className="eventsDescImage">
                  <Image src={CalendarImg} alt="Learning through Play" />
                </div>
              </div>
            </div>
            {/* End Events Description */}

            {/* =========== AMITY =============== */}
            {data.map((db, i) => {
              return (
                <div className="amityDaySection" key={i}>
                  <div className="amityDayHead">
                    <h3>{db.attributes.Title}</h3>
                  </div>
                  <div className="amityDayDescImgs">
                    {/* Gallery */}
                    {/* <div className="col-md-8"> */}
                    <div className="amityGallerySwiper">
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        speed={3000}
                        pagination={{
                          clickable: true,
                        }}
                        slidesPerView={"auto"}
                        navigation={false}
                        modules={[Autoplay, Pagination]}
                      >
                        {db.attributes.Images.data.map((image, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="galleryImage">
                                <Image
                                  src={`${ImageApi}${image.attributes.url}`}
                                  alt="Parent-Teacher Communication"
                                  width={400}
                                  height={400}
                                />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* =========== End AMITY ============ */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Events;
