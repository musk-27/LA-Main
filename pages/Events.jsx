import React from "react";
import Image from "next/image";
import Heading from "../Components/Heading";
import CalendarImg from "../public/Images/CalendarImg.png";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import useFetch from "useFetch.js";

import Layout from "../Components/layout";

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
    </>
  );
};

export default Events;
