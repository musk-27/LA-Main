import Image from "next/image";
import Heading from "../Components/Heading";
// import HeadBottomImg from "../public/Images/pink-head-underline.png";
import ScholasticImg from "../public/Images/GIF/scholastic.gif";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";
import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
// JSON
import useFetch from "useFetch.js";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const Scholastic = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
        description:
          `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
    keywords: "Kindergarten Readiness, Play-Based Learning, Nursery School",
  };

  const ImageApi = "https://strapi.littlearyans.in";
  const { data } = useFetch("/scholastic-galleries?populate=*");

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="scholasticPage">
            {/* Header */}
            <Heading headTitle="Scholastic" headBottomImg={PinkHeader} />

            {/* Scholastic Description */}
            <div className="lessPaddingInfoSection">
              <div className="infoSectionInner">
                <div className="scholasticDescText">
                  <p>
                    We aim towards integrated learning through experiential,
                    hands- on methods of teaching that provides a strong
                    foundation for our children for their future learning. Our
                    teachers are experts in making learning enjoyable and
                    meaningful through class activities and play so that
                    children play an active role in learning.{" "}
                  </p>
                </div>
                <div className="scholasticDescImg">
                  <Image src={ScholasticImg} alt="Kindergarten Readiness" />
                </div>
              </div>
            </div>
            {/* End Scholastic Description  */}

            {/* NUMERACY SKILLS */}
            {data.map((db, i) => {
              return (
                <div key={i} className="numeracySkillsSection">
                  <div className="numeracySkillsHead">
                    <h3>{db.attributes.Title}</h3>
                  </div>

                  <div className="numeracySkillsGal">
                    <Swiper
                      key={i}
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                      }}
                      speed={5000}
                      grabCursor={true}
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
                      slidesPerView={1}
                      navigation={false}
                      modules={[Autoplay, Navigation]}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                      className="ScholasticSwiper"
                    >
                      {" "}
                      {db.attributes.Images.data.map((image, index) => {
                        const imageDescription =
                          db.attributes.Image_description.Images[index]
                            ?.title || "";

                        return (
                          <SwiperSlide key={index}>
                            <div className="galleryImage">
                              <Image
                                src={`${ImageApi}${image.attributes.url}`}
                                alt="scholastic Images"
                                width={400}
                                height={400}
                              />
                            </div>
                            <p className="gallerySwiperDesc">
                              {imageDescription}
                            </p>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              );
            })}

            {/* END NUMERACY SKILLS */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Scholastic;
