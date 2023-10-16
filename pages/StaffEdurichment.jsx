import Image from "next/image";
import Heading from "@/Components/Heading";
// Images
import HeadUnderline from "../public/Images/green-head-underline.png";
import StaffEdurichmentImg from "../public/Images/staffEduImgA.png";
import HeaderUnderline from "../public/Images/SVG/header.svg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import useFetch from "@/useFetch";

const StaffEdurichment = () => {
  // Images from Database
  const ImageApi = "https://strapi.littlearyans.in";
  const { data } = useFetch("/staff-edurichments?populate=*");

  return (
    <div>
      <div className="staffEdurichmentPage">
        {/* Heading */}
        <Heading
          headTitle="Staff Edurichment"
          headBottomImg={HeaderUnderline}
        />
        {/* Staff Edurichment Decription  */}
        <div className="lessPaddingInfoSection">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="staffDescText">
                <p>
                  Our teachers are also always learning. Our edurichment
                  programs give them the opportunity to go from being just a
                  teacher to an exceptional one. 
                </p>{" "}
                <p>
                  It helps them identify their areas of growth, expand their
                  skills and knowledge and add new tools to their repertoire.
                </p>{" "}
                <p>How they do that</p>
                <ul>
                  <li>
                    <p>Courses, workshops and training sessions</p>
                  </li>
                  <li>
                    <p>Demo lessons</p>
                  </li>
                  <li>
                    <p>Lesson planning</p>
                  </li>
                  <li>
                    <p>Exploring digital tools</p>
                  </li>
                  <li>
                    <p>Working closely with parents</p>
                  </li>
                </ul>{" "}
                <p>The topics keep evolving with the times. </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="staffDescImg">
                <Image src={StaffEdurichmentImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* End Staff Edurichment Decription */}

        {/* =============== Staff Gallary =========== */}
        <div className="staffGallerySection">
          {data.map((staffImg, i) => (
            <Swiper
              key={i}
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
              loop={true}
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
              className="clientsSwiper"
            >
              {staffImg.attributes.Image.data.map((staffGal, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="galleryImage">
                      <Image
                        src={`${ImageApi}${staffGal.attributes.url}`}
                        alt="Staff Edurichment Little Aryans"
                        width={400}
                        height={400}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ))}
        </div>
        {/* ================ End Staff Gallary ========  */}
      </div>
    </div>
  );
};

export default StaffEdurichment;
