import Heading from "../Components/Heading";
import Image from "next/image";
import { useState, useEffect } from "react";
// Images
import CurriculumImg from "../public/Images/GIF/Curriculum.gif";
import ArtImg from "../public/Images/Art.gif";

import MathA from "../public/Images/MathA.png";
import LanguageA from "../public/Images/LanguageA.png";

import InquiryA from "../public/Images/InquiryA.png";
import ArtAbstractA from "../public/Images/ArtAbstractA.png";
import SocioEmotionalA from "../public/Images/SocioEmotionalA.png";
import GymnasticsYoga from "../public/Images/GymnasticsYoga.png";
import ISP from "../public/Images/ISP.png";
import PinkScribble from "../public/Images/pink-scribble.png";

// New Skill Boxes Images
import NumSk1 from "../public/Images/Curriculum/NumeracySkills/numtest.png";
import NumSk2 from "../public/Images/Curriculum/NumeracySkills/NBuildingBlocks.png";
import NumSk3 from "../public/Images/Curriculum/NumeracySkills/numsk3New.png";
import NumSk4 from "../public/Images/Curriculum/NumeracySkills/NFingerCounting.png";
import NumSk5 from "../public/Images/Curriculum/NumeracySkills/numtesttwoNew.png";

import ComSk1 from "../public/Images/Curriculum/CommunicationSkills/NDramaticPlay.png";
import ComSk2 from "../public/Images/Curriculum/CommunicationSkills/comTwo.jpg";
import ComSk3 from "../public/Images/Curriculum/CommunicationSkills/ComThree.jpg";
import ComSk4 from "../public/Images/Curriculum/CommunicationSkills/NInteractionWithConfidence.png";
import ComSk5 from "../public/Images/Curriculum/CommunicationSkills/ComFive.jpg";
import ComSk6 from "../public/Images/Curriculum/CommunicationSkills/NRolePlay.png";

import InqSk1 from "../public/Images/Curriculum/InquirySkills/InqOne.jpg";
import InqSk2 from "../public/Images/Curriculum/InquirySkills/InqTwo.jpg";
import InqSk3 from "../public/Images/Curriculum/InquirySkills/InqThree.jpg";
import InqSk4 from "../public/Images/Curriculum/InquirySkills/InqFour.jpg";
import InqSk5 from "../public/Images/Curriculum/InquirySkills/InqFive.jpg";

import LangSk1 from "../public/Images/Curriculum/LanguageSkills/langOne.jpg";
import LangSk2 from "../public/Images/Curriculum/LanguageSkills/NReadingSkills.png";
import LangSk3 from "../public/Images/Curriculum/LanguageSkills/NStoryTelling.png";
import LangSk4 from "../public/Images/Curriculum/LanguageSkills/langFour.jpg";
import LangSk5 from "../public/Images/Curriculum/LanguageSkills/langFive.png";

import SeSk1 from "../public/Images/Curriculum/SocioEconomicSkills/SeOne.jpg";
import SeSk2 from "../public/Images/Curriculum/SocioEconomicSkills/NBuildingFriendships.png";
import SeSk3 from "../public/Images/Curriculum/SocioEconomicSkills/NDevelopingEmpathy.png";
import SeSk4 from "../public/Images/Curriculum/SocioEconomicSkills/NExpressingTheirFeelings.png";
import SeSk5 from "../public/Images/Curriculum/SocioEconomicSkills/NPromotingDecisionMaking.png";
import seSk6 from "../public/Images/Curriculum/SocioEconomicSkills/NDevelopingEmpathy.png";
import seSk7 from "../public/Images/Curriculum/SocioEconomicSkills/NSharing.png";

import GymSk1 from "../public/Images/Curriculum/GYMNASTICS/GymSk1.png";
import GymSk2 from "../public/Images/Curriculum/GYMNASTICS/GymSk2.png";
import GymSk3 from "../public/Images/Curriculum/GYMNASTICS/GymSk3.png";
import GymSk4 from "../public/Images/Curriculum/GYMNASTICS/GymSk4.png";
import GymSk5 from "../public/Images/Curriculum/GYMNASTICS/GymSk6.png";

import HeaderUnderline from "../public/Images/SVG/header.svg";

// Sliders
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

// Curriculum Slider Images
const numericImages = [NumSk1, NumSk2, NumSk3, NumSk4, NumSk5];
const languageImages = [LangSk1, LangSk2, LangSk3, LangSk4, LangSk5];
const inquiryImages = [InqSk1, InqSk2, InqSk3, InqSk4, InqSk5];
const communicationImages = [ComSk1, ComSk2, ComSk3, ComSk4, ComSk5, ComSk6];
const socioEcoImages = [SeSk1, SeSk2, SeSk3, SeSk4, SeSk5, seSk6, seSk7];
const gymnasticImages = [GymSk1, GymSk2, GymSk3, GymSk4, GymSk5];

const Curriculum = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
        description:
          `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
    keywords: "Music and Movement, Storytelling Sessions, Preschool Admissions",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === numericImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [selectedOption, setSelectedOption] = useState("playgroup");

  // New Skill Boxes Images
  const [image, setImage] = useState(NumSk1);
  const [commImage, setCommImage] = useState(ComSk6);
  const [inquiryImage, setInquiryImage] = useState(InqSk5);
  const [langImage, setLangImage] = useState(LangSk4);
  const [socioEcoImage, setSocioEcoImage] = useState(SeSk2);
  const [gymImage, setGymImage] = useState(GymSk1);

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="curriculumPage">
            {/* Heading */}
            <Heading headTitle="Curriculum" headBottomImg={HeaderUnderline} />

            {/* Curriculum Description */}
            <div className="curriculumDesc">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="curriculumText">
                    <h2>Holistic learning to build a strong foundation.</h2>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <div className="curriculumImg">
                    <Image
                      src={CurriculumImg}
                      alt="Early Childhood Education"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Curriculum short Desc */}
            <div className="row">
              <div className="col-lg-6">
                <div className="currShortDesc">
                  <h4>
                    The Little Aryan &apos;s school life is carefully curated to
                    develop children equally in all three domains of learning,
                    integrated seamlessly into children&apos;s learning
                    environments.
                  </h4>
                </div>
              </div>
            </div>

            <div className="dayinLifeSec">
              <div className="row">
                <div className="col-lg-6">
                  <h4>
                    Through the course of their day, they are busy learning,
                    talking, painting, scribbling, splashing and jumping. We
                    make learning a joyous experience for them every step of the
                    way with specially curated activities and lesson plans.
                  </h4>
                </div>
                <div className="col-lg-1"> </div>
                <div className="col-lg-5">
                  <div className="dayInLifeImg">
                    <Image src={ArtImg} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            {/* ========== End Dayin life ================ */}

            {/*=================  New Skill Section ================= */}

            {/* Numeric Skills */}
            <div className="newSkillSection">
              <div className="curriculumSubjectHead">
                <h3>NUMERACY SKILLS</h3>
              </div>
              <div className="newSkillSectionBox numeracySkillSection">
                <div className="row">
                  <div className="col-md-4">
                    <div className="newSkillText">
                      <div className="newSkillTextImg">
                        <Image src={MathA} alt="Best Preschool Programs" />
                      </div>
                      <div className="newSkillTextTxt">
                        <p>
                          We nurture a child’s cognitive skills and logical
                          thinking by actively encouraging them to be curious.
                          They play with blocks and experiment with objects in
                          water to explore spatial relations, patterns, shapes
                          and reasoning abilities. Our objective here is to have
                          them view the world around them from a mathematical
                          lens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 newSkillSectionGap">
                    <div className="newSkillSectionVerticalText">
                      <h5> Nurturing cognitive abilities</h5>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="newSkillImages">
                      <div className="centersDescImg">
                        {/* Main Image */}
                        <div className="slider">
                          <div
                            className="slider-images"
                            style={{
                              transform: `translateX(${-currentIndex * 100}%)`,
                            }}
                          >
                            {numericImages?.map((image, index) => (
                              <div className="slider-image" key={index}>
                                <Image
                                  src={image}
                                  alt={`Slide ${index}`}
                                  className="newSkillBoxMainImg"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LANGUAGE SKILLS */}
            <div className="newSkillSection">
              <div className="curriculumSubjectHead">
                <h3>LANGUAGE SKILLS</h3>
              </div>
              <div className="newSkillSectionBox languageSkillSection">
                <div className="row">
                  <div className="col-md-4">
                    <div className="newSkillText">
                      <div className="newSkillTextImg">
                        <Image src={LanguageA} alt="Child Development" />
                      </div>
                      <div className="newSkillTextTxt">
                        <p>
                          We believe in having children become active
                          participants in their own learning process. For the
                          most part, they’ve been dependent on the adults in
                          their lives to communicate. The first step for us is
                          to make them more independent. We get them to seek out
                          answers by themselves while teaching them words,
                          letters and other elements of a language.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 newSkillSectionGap">
                    <div className="newSkillSectionVerticalText">
                      <h5>Exploring the world of words</h5>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="newSkillImages">
                      <div className="centersDescImg">
                        {/* Main Image */}
                        <div className="slider">
                          <div
                            className="slider-images"
                            style={{
                              transform: `translateX(${-currentIndex * 100}%)`,
                            }}
                          >
                            {languageImages?.map((langImage, index) => (
                              <div className="slider-image" key={index}>
                                <Image
                                  src={langImage}
                                  alt={`Slide ${index}`}
                                  className="newSkillBoxMainImg"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INQUIRY SKILLS */}
            <div className="newSkillSection">
              <div className="curriculumSubjectHead">
                <h3>INQUIRY SKILLS</h3>
              </div>
              <div className="newSkillSectionBox inquirySkillSection">
                <div className="row">
                  <div className="col-md-4">
                    <div className="newSkillText">
                      <div className="newSkillTextImg">
                        <Image src={InquiryA} alt="Kindergarten Readiness" />
                      </div>
                      <div className="newSkillTextTxt">
                        <p>
                          We provide a diverse learning environment that is
                          designed to foster scientific aptitude by engaging all
                          of a student’s senses. Our learning program is based
                          on the STEAM framework and recognises their natural
                          inclination to explore and question. All for
                          cultivating a scientific temper in them.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 newSkillSectionGap">
                    <div className="newSkillSectionVerticalText">
                      <h5>STEAM for our budding scientists - </h5>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="newSkillImages">
                      <div className="centersDescImg">
                        {/* Main Image */}
                        <div className="slider">
                          <div
                            className="slider-images"
                            style={{
                              transform: `translateX(${-currentIndex * 100}%)`,
                            }}
                          >
                            {inquiryImages?.map((inquiryImage, index) => (
                              <div className="slider-image" key={index}>
                                <Image
                                  src={inquiryImage}
                                  alt={`Slide ${index}`}
                                  className="newSkillBoxMainImg"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COMMUNICATION SKILLS */}
            <div className="newSkillSection">
              <div className="curriculumSubjectHead">
                <h3>COMMUNICATION SKILLS</h3>
              </div>
              <div className="newSkillSectionBox communicatoinSkillSection">
                <div className="row">
                  <div className="col-md-4">
                    <div className="newSkillText">
                      <div className="newSkillTextImg">
                        <Image src={ArtAbstractA} alt="Play-Based Learning" />
                      </div>
                      <div className="newSkillTextTxt">
                        <p>
                          We never stop exploring new perspectives on
                          understanding child development through art. The same
                          goes for the depth of their individuality. We observe
                          their wonder, dreams and doubts as they’re mixing
                          colours, creating patterns or even scribbling. We
                          understand the profound impact that art, irrespective
                          of medium, has on their emotions and self-expression.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 newSkillSectionGap">
                    <div className="newSkillSectionVerticalText">
                      <h5>Art as a medium of expression - </h5>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="newSkillImages">
                      <div className="centersDescImg">
                        {/* Main Image */}
                        <div className="slider">
                          <div
                            className="slider-images"
                            style={{
                              transform: `translateX(${-currentIndex * 100}%)`,
                            }}
                          >
                            {communicationImages?.map((commImage, index) => (
                              <div className="slider-image" key={index}>
                                <Image
                                  src={commImage}
                                  alt={`Slide ${index}`}
                                  className="newSkillBoxMainImg"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIO-EMOTIONAL SKILLS */}
            <div className="newSkillSection">
              <div className="curriculumSubjectHead">
                <h3>SOCIO-EMOTIONAL SKILLS</h3>
              </div>
              <div className="newSkillSectionBox socioEcoSkillSection">
                <div className="row">
                  <div className="col-md-4">
                    <div className="newSkillText">
                      <div className="newSkillTextImg">
                        <Image src={SocioEmotionalA} alt="Nursery School" />
                      </div>
                      <div className="newSkillTextTxt">
                        <p>
                          Learning, in some ways, is a journey of
                          self-discovery. One that is crucial to a child’s
                          overall growth. We engage them in activities that help
                          develop essential life skills. Our classrooms and
                          lesson plans are designed to fulfil their yearning for
                          autonomy. All while teaching them the interdependence
                          between individuals and society.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 newSkillSectionGap">
                    <div className="newSkillSectionVerticalText">
                      <h5>Orienting towards inter-personal skills - </h5>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="newSkillImages">
                      <div className="centersDescImg">
                        {/* Main Image */}
                        <div className="slider">
                          <div
                            className="slider-images"
                            style={{
                              transform: `translateX(${-currentIndex * 100}%)`,
                            }}
                          >
                            {socioEcoImages?.map((socioEcoImage, index) => (
                              <div className="slider-image" key={index}>
                                <Image
                                  src={socioEcoImage}
                                  alt={`Slide ${index}`}
                                  className="newSkillBoxMainImg"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GYMNASTICS */}
            <div className="newSkillSection">
              <div className="curriculumSubjectHead">
                <h3>GYMNASTICS</h3>
              </div>
              <div className="newSkillSectionBox GymnasticSkillSection">
                <div className="row">
                  <div className="col-md-4">
                    <div className="newSkillText">
                      <div className="newSkillTextImg">
                        <Image src={GymnasticsYoga} alt="Toddler Activities" />
                      </div>
                      <div className="newSkillTextTxt">
                        <p>
                          We focus on instilling healthy habits in children with
                          gymnastics. Activities like cartwheels, jumping and
                          stretching go beyond physical exercise. They empower
                          them with a sense of control, balance, spatial
                          relationships and a deeper understanding of their
                          body&apos;s capabilities. It boosts their
                          self-confidence and cognitive skills like nothing
                          else.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 newSkillSectionGap">
                    <div className="newSkillSectionVerticalText">
                      <h5>Promoting stronger personalities</h5>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="newSkillImages">
                      <div className="centersDescImg">
                        {/* Main Image */}
                        <div className="slider">
                          <div
                            className="slider-images"
                            style={{
                              transform: `translateX(${-currentIndex * 100}%)`,
                            }}
                          >
                            {gymnasticImages?.map((gymImage, index) => (
                              <div className="slider-image" key={index}>
                                <Image
                                  src={gymImage}
                                  alt={`Slide ${index}`}
                                  className="newSkillBoxMainImg"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Pagination Boxes */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================ Integrated settling Plan ==================== */}
            <div className="integratedSettlingSection">
              <div className="integartedSetllintgHead">
                <h3>INTERGRATED SETTLING PLAN</h3>
                <div className="pinkScribble">
                  <Image src={PinkScribble} alt="scribble" />
                </div>
              </div>
              <div className="integratedNewSec">
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="integratedSettlingText">
                      <h4>
                        We get it. The first day of preschool is a major
                        milestone for children and their parents. Our Integrated
                        Settling Plan helps children adjust easily to their new
                        environment and overcome their separation anxiety. Our
                        approach to learning is such that science is taught
                        through music. Mathematics with history. English with
                        art and craft. This gives the physical environment, art
                        installations and such, a bigger place in the learning
                        process. Our curriculum removes the hard separation of
                        subjects as suggested by the National Education Policy
                        (NEP).
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="integratedSettlingImage">
                      <Image src={ISP} alt="Preschool Curriculum" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Curriculum;
