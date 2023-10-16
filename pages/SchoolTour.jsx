import Image from "next/image";
import Heading from "@/Components/Heading";
// Image
import HeadBottomImg from "../public/Images/pink-head-underline.png";
import SchoolTourImg from "../public/Images/SchoolTourImg.png";
import Underline from "../public/Images/team-line.png";
import PinkHeader from "../public/Images/SVG/pinkHeader.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
// JSON
import SchoolTourImages from "../Data/SchoolTourImages";
import useFetch from "@/useFetch";

const SchoolTour = () => {
  const ImageApi = "https://strapi.littlearyans.in";
  const { data } = useFetch("/school-tour-galleries?populate=*");

  return (
    <div>
      <div className="schoolTourPage">
        {/* Heading */}
        <Heading headTitle="School Tour" headBottomImg={PinkHeader} />

        {/* School Tour Description */}
        <div className="lessPaddingInfoSection">
          <div className="infoSectionInner">
            <div className="schoolTourDescText">
              <p>
                A Little Aryans classroom has kids’ rooms, discovery centres, AV
                room, open spaces, play areas, gardens, and lots more. We give
                utmost importance to the safety of our children. All the
                recreational areas have shock absorbent flooring and the
                children are supervised at all times.{" "}
              </p>
            </div>
            <div className="schoolTourDescImage">
              <Image src={SchoolTourImg} alt="" />
            </div>
          </div>
        </div>
        {/* End School Tour Description */}

        {/* School Tour Description 2  */}
        <div className="schoolTourDescSection">
          <div className="schoolTourDescInner">
            <p>
              Children here explore with beautiful and appealing play
              equipment’s (Non toxic, child-friendly, and scientifically
              designed) that is equipped with learning material,
              state-of-the-art technology, and an extensive library which
              comprises of books, magazines, periodicals and educational DVDs.
              We have introduced Interactive Boards which enhance visual
              imagination, creativity, and concept clarity. We also have
              designed a medical area equipped with a first aid kit in case of
              any emergency.{" "}
            </p>
          </div>
        </div>
        {/* End School Tour Description 2 */}

        {/* School Tour List  */}
        <div className="schoolTourListSection">
          <div className="row">
            <div className="col-md-6">
              <div className="schoolTourList">
                <ul>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>WELL VENTILATED CLASSROOMS</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>DISCOVERY CENTERS</h5>
                  </li>

                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>NATURE’S LAB - ‘LEARNING AMIDST NATURE’</h5>{" "}
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>ART ROOM WITH ABUNDANT ACTIVITY MATERIAL </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    {" "}
                    <h5>MUSIC AND DANCE ROOM </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    {" "}
                    <h5>NON TOXIC, SAFE TOYS & CREATIVE TEACHING AIDS </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    {" "}
                    <h5> WATER PLAY STATION </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>SAND PIT </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    {" "}
                    <h5> AUDIO VISUAL ROOM (AIR CONDITIONED) </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    {" "}
                    <h5>INTERACTIVE BOARD </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="schoolTourList">
                <ul>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>LIBRARY</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>PUPPET THEATRE</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>UNINTERRUPTED POWER SUPPLY</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>500 CAPACITY AUDITORIUM</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>CCTV IN CLASSROOMS</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>TRANSPORTATION WITH APP TRACKING</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>CHILD PROOF DOORS WITH SAFETY LOCKS</h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                  <li>
                    <h5>
                      PLAYGROUND & SPORTS FACILITIES FOR INDOORS AND OUTDOORS
                    </h5>
                  </li>
                  <li>
                    <div className="underlineImg">
                      <Image src={Underline} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End School Tour List */}

        {/* ========== Hybrid Learning ============= */}
        <div className="hybridLearningHead">
          <div className="underLineImg">
            <Image src={Underline} alt="" />
          </div>
          <h3>Currently our classrooms are equipped for Hybrid Learning. </h3>
          <div className="underLineImg">
            <Image src={Underline} alt="" />
          </div>
        </div>

        {/* LA Ambernath */}
        {data.map((db, i) => {
          return (
            <div className="numeracySkillsSection" key={i}>
              <div className="numeracySkillsHead">
                {/* <h3>LA AMBERNATH </h3> */}
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
                >
                  {db.attributes.Images.data.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="galleryImage">
                        <Image
                          src={`${ImageApi}${image.attributes.url}`}
                          alt=""
                          width={400}
                          height={400}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          );
        })}

        {/* LA Chakkinaka */}
        {/* <div className="numeracySkillsSection">
          <div className="numeracySkillsHead">
            <h3>LA CHAKKINAKA</h3>
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
            >
              {SchoolTourImages.ChakkinakaImages.map((challinakaImg, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="galleryImage">
                      <Image src={challinakaImg.Image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div> */}

        {/* LA Nandivali */}
        {/* <div className="numeracySkillsSection">
          <div className="numeracySkillsHead">
            <h3>LA NANDIVALI</h3>
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
              {SchoolTourImages.NandivaliImages.map((nandivaliImgs, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="galleryImage">
                      <Image src={nandivaliImgs.Image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div> */}

        {/* ========== End Hybrid Learning =========== */}
      </div>
    </div>
  );
};

export default SchoolTour;
