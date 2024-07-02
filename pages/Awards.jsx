import Image from "next/image";
import Heading from "../Components/Heading";
// Image
import HeadBottomImg from "../public/Images/pink-head-underline.png";
import Awards1 from "../public/Images/Awards1.png";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import useFetch from "useFetch.js";

const Awards = () => {
  const { data } = useFetch("/awards-galleries?populate=*");
  const ImageApi = "https://strapi.littlearyans.in";

  return (
    <div>
      <div className="awardsPage">
        {/* Header */}
        <Heading headTitle="Awards" headBottomImg={PinkHeader} />

        {/* Co-Scholastic Description */}
        <div className="lessPaddingInfoSection">
          <div className="infoSectionInner">
            <div className="coScholasticDescText">
              <p>
                Our accomplishments speak volumes about our commitment to
                provide a strong foundational education to our children. We
                consistently receive awards from various prestigious educational
                bodies and institutions that acknowledge our dedication and
                passion in quality early childhood education.
              </p>
            </div>
            <div className="coscholasticDescImg">
              <Image src={Awards1} alt="Early Childhood Education" />
            </div>
          </div>
        </div>
        {/* End Co-scholastic description */}

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
                  // className="ScholasticSwiper"
                >
                  {" "}
                  {db.attributes.Images.data.map((image, index) => {
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
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          );
        })}
        {/* End  Gallery */}
      </div>
    </div>
  );
};

export default Awards;
