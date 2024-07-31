import React from "react";
import Image from "next/image";
import Heading from "../Components/Heading";
// Images
// import HeadBottomImg from "../public/Images/pink-head-underline.png";
import DigitalTransformationImg from "../public/Images/DigitalTransformationImg.png";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";

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

const DigitalTransformation = () => {
  const metaData = {
    title: "Little Aryan's Pre K",
        description:
          "Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.",
    keywords: "Music and Movement, Storytelling Sessions, Preschool Admissions",
  };

  // Fetch Images from Strapi
  const { data } = useFetch("/digital-transformation-galleries?populate=*");
  //   console.log(data);
  const ImageApi = "https://strapi.littlearyans.in";

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="digitalTransformationPage">
            {/* Heading */}
            <Heading
              headTitle="Digital Transformation"
              headBottomImg={PinkHeader}
            />

            {/* Digital Transformation Description */}
            <div className="lessPaddingInfoSection">
              <div className="infoSectionInner">
                <div className="coScholasticDescText">
                  <p>
                    Little Aryans is the only Microsoft Showcase Preschool in
                    India with teachers who are digitally adept. All our
                    teachers are MIEE (Microsoft Innovative Educator Experts).
                    During the pandemic the school quickly adapted to the online
                    mode of teaching and kept children engaged through activity-
                    based lessons using apps such as Flipgrid. Our teachers are
                    equipped with the latest Dell Laptops so that they conduct
                    their lessons effectively.
                  </p>
                </div>
                <div className="coscholasticDescImg">
                  <Image
                    src={DigitalTransformationImg}
                    alt="School Readiness Skills"
                  />
                </div>
              </div>
            </div>
            {/* End Co-scholastic description */}

            {/* Co-scholastic Gallery  */}
            <div className="numeracySkillsSection">
              <div className="numeracySkillsGal">
                {data.map((digitalImgs, index) => {
                  return (
                    <Swiper
                      key={index}
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                      }}
                      speed={5000}
                      pagination={{
                        clickable: true,
                      }}
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
                    >
                      {digitalImgs.attributes.Images.data.map((image, i) => {
                        const imageDescription =
                          digitalImgs.attributes.Image_description.Images[i]
                            ?.title || "";
                        return (
                          <SwiperSlide key={i}>
                            <div className="galleryImage">
                              <Image
                                src={`${ImageApi}${image.attributes.url}`}
                                alt="Parent-Teacher Communication"
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
                  );
                })}
              </div>
            </div>
            {/* End Co-scholastic Gallery */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default DigitalTransformation;
