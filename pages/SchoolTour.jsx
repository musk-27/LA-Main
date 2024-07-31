import React from "react";
import Image from "next/image";
import Heading from "../Components/Heading";
// Image
// import HeadBottomImg from "../public/Images/pink-head-underline.png";
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
// import SchoolTourImages from "../Data/SchoolTourImages";
import useFetch from "useFetch.js";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const SchoolTour = () => {
  const metaData = {
    title: "Little Aryan's Pre K",
        description:
          "Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.",
    keywords: "Kalyan , thane , Kalyan west ",
  };

  const ImageApi = "https://strapi.littlearyans.in";
  const { data } = useFetch("/school-tour-galleries?populate=*");

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="schoolTourPage">
            {/* Heading */}
            <Heading headTitle="School Tour" headBottomImg={PinkHeader} />

            {/* School Tour Description */}
            <div className="lessPaddingInfoSection">
              <div className="infoSectionInner">
                <div className="schoolTourDescText">
                  <p>
                    A Little Aryans classroom has kids’ rooms, discovery
                    centres, AV room, open spaces, play areas, gardens, and lots
                    more. We give utmost importance to the safety of our
                    children. All the recreational areas have shock absorbent
                    flooring and the children are supervised at all times.{" "}
                  </p>
                </div>
                <div className="schoolTourDescImage">
                  <Image src={SchoolTourImg} alt="Toddler Activities" />
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
                  comprises of books, magazines, periodicals and educational
                  DVDs. We have introduced Interactive Boards which enhance
                  visual imagination, creativity, and concept clarity. We also
                  have designed a medical area equipped with a first aid kit in
                  case of any emergency.{" "}
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
                          <Image src={Underline} alt="Ambernath" />
                        </div>
                      </li>
                      <li>
                        <h5>WELL VENTILATED CLASSROOMS</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="chakkinaka" />
                        </div>
                      </li>
                      <li>
                        <h5>DISCOVERY CENTERS</h5>
                      </li>

                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Kalyan west" />
                        </div>
                      </li>
                      <li>
                        <h5>NATURE’S LAB - ‘LEARNING AMIDST NATURE’</h5>{" "}
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Happy child" />
                        </div>
                      </li>
                      <li>
                        <h5>ART ROOM WITH ABUNDANT ACTIVITY MATERIAL </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="thane" />
                        </div>
                      </li>
                      <li>
                        {" "}
                        <h5>MUSIC AND DANCE ROOM </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Kalyan" />
                        </div>
                      </li>
                      <li>
                        {" "}
                        <h5>NON TOXIC, SAFE TOYS & CREATIVE TEACHING AIDS </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Preschool Admissions" />
                        </div>
                      </li>
                      <li>
                        {" "}
                        <h5> WATER PLAY STATION </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Storytelling Sessions" />
                        </div>
                      </li>
                      <li>
                        <h5>SAND PIT </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Music and Movement" />
                        </div>
                      </li>
                      <li>
                        {" "}
                        <h5> AUDIO VISUAL ROOM (AIR CONDITIONED) </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image
                            src={Underline}
                            alt="Art and Craft Activities"
                          />
                        </div>
                      </li>
                      <li>
                        {" "}
                        <h5>INTERACTIVE BOARD </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image
                            src={Underline}
                            alt="Motor Skills Development"
                          />
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
                          <Image src={Underline} alt="Language Development" />
                        </div>
                      </li>
                      <li>
                        <h5>LIBRARY</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Preschool Events" />
                        </div>
                      </li>
                      <li>
                        <h5>PUPPET THEATRE</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Emotional Growth" />
                        </div>
                      </li>
                      <li>
                        <h5>UNINTERRUPTED POWER SUPPLY</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Social Skills" />
                        </div>
                      </li>
                      <li>
                        <h5>500 CAPACITY AUDITORIUM</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Cognitive Development" />
                        </div>
                      </li>
                      <li>
                        <h5>CCTV IN CLASSROOMS</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Sensory Activities" />
                        </div>
                      </li>
                      <li>
                        <h5>TRANSPORTATION WITH APP TRACKING</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Pre-K Education" />
                        </div>
                      </li>
                      <li>
                        <h5>CHILD PROOF DOORS WITH SAFETY LOCKS</h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Holistic Development" />
                        </div>
                      </li>
                      <li>
                        <h5>
                          PLAYGROUND & SPORTS FACILITIES FOR INDOORS AND
                          OUTDOORS
                        </h5>
                      </li>
                      <li>
                        <div className="underlineImg">
                          <Image src={Underline} alt="Educational Games" />
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
                <Image src={Underline} alt="School Readiness Skills" />
              </div>
              <h3>
                Currently our classrooms are equipped for Hybrid Learning.{" "}
              </h3>
              <div className="underLineImg">
                <Image src={Underline} alt="Parent-Teacher Communication" />
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
                              alt="Parent-Teacher Communication"
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

            {/* ========== End Hybrid Learning =========== */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default SchoolTour;




