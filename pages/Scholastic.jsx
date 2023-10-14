import Image from "next/image";
import Heading from "@/Components/Heading";
import HeadBottomImg from "../public/Images/pink-head-underline.png";
import ScholasticImg from "../public/Images/GIF/scholastic.gif";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
// JSON
import useFetch from "@/useFetch";

const Scholastic = () => {
  const ImageApi = "https://meet.littlearyans.in";
  const { data } = useFetch("/scholastic-galleries?populate=*");

  return (
    <div>
      <div className="scholasticPage">
        {/* Header */}
        <Heading headTitle="Scholastic" headBottomImg={PinkHeader} />

        {/* Scholastic Description */}
        <div className="lessPaddingInfoSection">
          <div className="infoSectionInner">
            <div className="scholasticDescText">
              <p>
                We aim towards integrated learning through experiential, hands-
                on methods of teaching that provides a strong foundation for our
                children for their future learning. Our teachers are experts in
                making learning enjoyable and meaningful through class
                activities and play so that children play an active role in
                learning.{" "}
              </p>
            </div>
            <div className="scholasticDescImg">
              <Image src={ScholasticImg} alt="" />
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
                  slidesPerView={1}
                  navigation={true}
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
                  // className="ScholasticSwiper"
                >
                  {" "}
                  {db.attributes.Images.data.map((image, index) => {
                    const imageDescription =
                      db.attributes.Image_description.Images[index]?.title ||
                      "";

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
                        <p className="gallerySwiperDesc">{imageDescription}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          );
        })}

        {/* END NUMERACY SKILLS */}

        {/* Language Skills */}
        {/* <div className="numeracySkillsSection">
          <div className="numeracySkillsHead">
            <h3>LANGUAGE SKILLS</h3>
          </div>
          <div className="numeracySkillsGal">
            <Swiper
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
              navigation={true}
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
              // className="ScholasticSwiper"
            >
              {ScholasticImages.LanguageImages.map((languageImgs, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="galleryImage">
                      <Image src={languageImgs.Image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div> */}
        {/* End Language Skills */}

        {/* INQUIRY SKILLS */}
        {/* <div className="numeracySkillsSection">
          <div className="numeracySkillsHead">
            <h3>INQUIRY SKILLS</h3>
          </div>
          <div className="numeracySkillsGal">
            <Swiper
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
              navigation={true}
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
              // className="ScholasticSwiper"
            >
              {ScholasticImages.InquiryImages.map((inquiryImgs, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="galleryImage">
                      <Image src={inquiryImgs.Image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div> */}
        {/* END INQUIRY SKILLS */}

        {/* COMMUNICATION SKILLS */}
        {/* <div className="numeracySkillsSection">
          <div className="numeracySkillsHead">
            <h3>COMMUNICATION SKILLS </h3>
          </div>
          <div className="numeracySkillsGal">
            <Swiper
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
              navigation={true}
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
              // className="ScholasticSwiper"
            >
              {ScholasticImages.CommunicationImages.map(
                (communicationImgs, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="galleryImage">
                        <Image src={communicationImgs.Image} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </div> */}
        {/* END COMMUNICATION SKILLS */}

        {/* SOCIO EMOTIONAL SKILLS */}
        {/* <div className="numeracySkillsSection">
          <div className="numeracySkillsHead">
            <h3>SOCIO EMOTIONAL SKILLS </h3>
          </div>
          <div className="numeracySkillsGal">
            <Swiper
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
              navigation={true}
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
              // className="ScholasticSwiper"
            >
              {ScholasticImages.SocioEmotionalImages.map(
                (socioEmotionalImgs, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="galleryImage">
                        <Image src={socioEmotionalImgs.Image} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </div> */}
        {/* END SOCIO EMOTIONAL SKILLS  */}

        {/* PSYCHOMOTOR SKILLS */}
        {/* <div className="numeracySkillsSection">
          <div className="numeracySkillsHead">
            <h3>PSYCHOMOTOR SKILLS </h3>
          </div>
          <div className="numeracySkillsGal">
            <Swiper
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
              navigation={true}
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
              // className="ScholasticSwiper"
            >
              {ScholasticImages.PsychomotorImages.map(
                (psychomotorImgs, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="galleryImage">
                        <Image src={psychomotorImgs.Image} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </div> */}
        {/* END PSYCHOMOTOR SKILLS */}
      </div>
    </div>
  );
};

export default Scholastic;
