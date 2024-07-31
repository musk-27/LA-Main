// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectFade,
// } from "swiper";

// // Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

// // Images
// // import HeadUnderline from "../public/Images/head-bottom.png";
// import YellowHeader from "../public/Images/SVG/yellowHeader.svg";
// import Center1 from "../public/Images/center1.png";
// import NandivaliBottom from "../public/Images/SVG/scribbleDarkGreen.svg";
// // import NandivaliImg from "../public/Images/nandivali.png";
// // import ChakkinakaBottom from "../public/Images/chakkinaka-bottom.png";
// // import ChakkinakaImg from "../public/Images/chakkinaka.png";
// // import AmbernathBottom from "../public/Images/ambernath-bottom.png";
// // import AmbernathImg from "../public/Images/ambernath.png";
// import KhelMela from "../public/Images/Khel-Mela.gif";
// import ArtImg from "../public/Images/Art.gif";
// import ScienceImg from "../public/Images/Science.gif";
// import useFetch from "useFetch.js";
// import BorderImg from "../public/Images/footer-border.png";
// import Layout from "../Components/layout";
// // import Header from '../Components/Header/header';
// // import MobileNavbar from '../Components/Header/mobileNavbar';
// // import Footer from "../Components/Footer/footer";

// const OurCenters = () => {
//   const metaData = {
//     title: `Little Aryan's Pre K`,
//     description:
//       `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
//     keywords: `Toddler Activities, Preschool Curriculum, Montessori Method`,
//   };

//   const { data } = useFetch("/centers?populate=*");
//   const ImageUrl = "https://strapi.littlearyans.in";

//   return (
//     <>
//       {/* <Header />
//    <MobileNavbar /> */}
//       <Layout metaData={metaData} includeHeaderFooter={false}>
//         <div className="ourCentersPage">
//           {/* Heading */}
//           <div className="centersHead">
//             <h1>Our Centers</h1>
//             <div className="centerHeadImg">
//               <Image src={YellowHeader} alt="underline" />
//             </div>
//           </div>

//           {/* Centers Description */}
//           <div className="centersDesc">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="centerDescText">
//                   <h4>
//                     We set out to be a haven for joy. A safe space that fosters
//                     creativity, curiosity and independence. And to do that, we
//                     had to get the basics right. Well-ventilated classrooms.
//                     Non-toxic playthings designed to aid in learning.
//                     Interactive boards and other digital teaching tools. An
//                     extensive library of books, magazines, periodicals and
//                     educational DVDs. A medical area for any emergency. We’ve
//                     considered every little thing a Little Aryan needs to get
//                     creative and learn better.
//                   </h4>
//                 </div>
//               </div>
//               <div className="col-lg-1"></div>
//               <div className="col-lg-5 d-flex justify-content-end align-items-center">
//                 <div className="centersDescImg centersDescImg1">
//                   <Image src={Center1} alt="center" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Center Experience */}
//           <div className="centersExperience">
//             <div className="centerExpHead">
//               <h3>
//                 The best of technology meets inventive teaching methods for a
//                 truly <br />
//                 joyous learning experience.
//               </h3>
//             </div>
//             <div className="centerExpImages">
//               <div className="row">
//                 <div className="col-md-12 d-flex justify-content-center">
//                   <div className="centerExpImg mb-5">
//                     <Image src={KhelMela} alt="Khel Mela" />
//                   </div>
//                 </div>
//                 <div className="col-md-6 d-flex justify-content-center">
//                   <div className="centerExpImg">
//                     <Image src={ArtImg} alt="Art" />
//                   </div>
//                 </div>
//                 <div className="col-md-6 d-flex justify-content-center">
//                   <div className="centerExpImg">
//                     <Image src={ScienceImg} alt="Science" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Centers */}
//           {data.map((center, index) => {
//             const centerId = center.id;
//             const centerMainImage =
//               center.attributes.Images?.data[0]?.attributes.url;

//             return (
//               <div key={index}>
//                 <div className="sectionHead">
//                   <h3>Little Aryans {center.attributes.title}</h3>
//                   <div className="centerHeadImg">
//                     <Image src={NandivaliBottom} alt="Social Skills" />
//                   </div>
//                 </div>
//                 <div className="centersDesc">
//                   <div className="row">
//                     <div className="col-lg-5 d-flex flex-column justify-content-start align-items-center">
//                       {centerMainImage && (
//                         <div className="centersDescImg relative pb-8">
//                           <Swiper
//                             spaceBetween={10}
//                             pagination={{ clickable: true, el: "" }}
//                             autoplay={{
//                               delay: 3000,
//                               disableOnInteraction: false,
//                             }}
//                             effect="fade"
//                             className="mySwiper"
//                           >
//                             {center.attributes.Images?.data.map((image, i) => (
//                               <SwiperSlide key={i}>
//                                 <Image
//                                   src={`${ImageUrl}${image.attributes.url}`}
//                                   alt={`Center image ${i + 1}`}
//                                   width={500}
//                                   height={500}
//                                 />
//                               </SwiperSlide>
//                             ))}
//                           </Swiper>
//                         </div>
//                       )}
//                     </div>
//                     <div className="col-lg-1"></div>
//                     <div className="col-lg-6">
//                       <div className="centerDescText topMarginDescText">
//                         <p>{center.attributes.Description1}</p>
//                         <p>{center.attributes.Description2}</p>
//                         <p>{center.attributes.Description3}</p>
//                         <div className="descButtons">
//                           <Link
//                             target="_blank"
//                             href={center.attributes.map_location}
//                           >
//                             <div className="descBtn">
//                               <button>Our Location</button>
//                             </div>
//                           </Link>
//                           <Link
//                             target="_blank"
//                             href="https://online.littlearyans.in/"
//                           >
//                             <div className="descBtn">
//                               <button>Our Fee Structure</button>
//                             </div>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           {/* Hybrid Learning */}
//           <div className="hybridLearningSec">
//             <div className="lineImg">
//               <Image src={BorderImg} alt="border" />
//             </div>
//             <h3>Currently our classrooms are equipped for Hybrid Learning. </h3>
//             <div className="lineImg">
//               <Image src={BorderImg} alt="border" />
//             </div>
//           </div>
//         </div>
//       </Layout>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default OurCenters;



import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

// Images
import YellowHeader from "../public/Images/SVG/yellowHeader.svg";
import Center1 from "../public/Images/center1.png";
import NandivaliBottom from "../public/Images/SVG/scribbleDarkGreen.svg";
import KhelMela from "../public/Images/Khel-Mela.gif";
import ArtImg from "../public/Images/Art.gif";
import ScienceImg from "../public/Images/Science.gif";
import useFetch from "useFetch.js";
import BorderImg from "../public/Images/footer-border.png";
import Layout from "../Components/layout";

const OurCenters = () => {
  const metaData = {
    title: "Little Aryan's Pre K",
    description:
      "Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.",
    keywords: "Toddler Activities, Preschool Curriculum, Montessori Method",
  };

  const { data } = useFetch("/centers?populate=*");
  const ImageUrl = "https://strapi.littlearyans.in";

  return (
    <>
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div className="ourCentersPage">
          {/* Heading */}
          <div className="centersHead">
            <h1>Our Centers</h1>
            <div className="centerHeadImg">
              <Image src={YellowHeader} alt="underline" />
            </div>
          </div>

          {/* Centers Description */}
          <div className="centersDesc">
            <div className="row">
              <div className="col-lg-6">
                <div className="centerDescText">
                  <h4>
                    We set out to be a haven for joy. A safe space that fosters
                    creativity, curiosity and independence. And to do that, we
                    had to get the basics right. Well-ventilated classrooms.
                    Non-toxic playthings designed to aid in learning.
                    Interactive boards and other digital teaching tools. An
                    extensive library of books, magazines, periodicals and
                    educational DVDs. A medical area for any emergency. We’ve
                    considered every little thing a Little Aryan needs to get
                    creative and learn better.
                  </h4>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 d-flex justify-content-end align-items-center">
                <div className="centersDescImg centersDescImg1">
                  <Image src={Center1} alt="center" />
                </div>
              </div>
            </div>
          </div>

          {/* Center Experience */}
          <div className="centersExperience">
            <div className="centerExpHead">
              <h3>
                The best of technology meets inventive teaching methods for a
                truly <br />
                joyous learning experience.
              </h3>
            </div>
            <div className="centerExpImages">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="centerExpImg mb-5">
                    <Image src={KhelMela} alt="Khel Mela" />
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="centerExpImg">
                    <Image src={ArtImg} alt="Art" />
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="centerExpImg">
                    <Image src={ScienceImg} alt="Science" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centers */}
          {data.map((center, index) => {
            // const centerId = center.id;
            // const centerId = center.id;
            const centerMainImage =
              center.attributes.Images?.data[0]?.attributes.url;

            return (
              <div key={index}>
                <div className="sectionHead">
                  <h3>Little Aryans {center.attributes.title}</h3>
                  <div className="centerHeadImg">
                    <Image src={NandivaliBottom} alt="Social Skills" />
                  </div>
                </div>
                <div className="centersDesc">
                  <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-start align-items-center">
                      {centerMainImage && (
                        <div className="centersDescImg relative pb-8">
                          <Swiper
                            spaceBetween={10}
                            pagination={{ clickable: true, el: "" }}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            effect="fade"
                            className="mySwiper"
                          >
                            {center.attributes.Images?.data.map((image, i) => (
                              <SwiperSlide key={i}>
                                <Image
                                  src={`${ImageUrl}${image.attributes.url}`}
                                  alt={`Center image ${i + 1}`}
                                  width={500}
                                  height={500}
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                      <div className="centerDescText topMarginDescText">
                        <p>{center.attributes.Description1}</p>
                        <p>{center.attributes.Description2}</p>
                        <p>{center.attributes.Description3}</p>
                        <div className="descButtons">
                          <Link
                            target="_blank"
                            href={center.attributes.map_location}
                          >
                            <div className="descBtn">
                              <button>Our Location</button>
                            </div>
                          </Link>
                          <Link
                            target="_blank"
                            href="https://online.littlearyans.in/"
                          >
                            <div className="descBtn">
                              <button>Our Fee Structure</button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Hybrid Learning */}
          <div className="hybridLearningSec">
            <div className="lineImg">
              <Image src={BorderImg} alt="border" />
            </div>
            <h3>Currently our classrooms are equipped for Hybrid Learning. </h3>
            <div className="lineImg">
              <Image src={BorderImg} alt="border" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OurCenters;
