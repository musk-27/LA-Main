import Heading from "@/Components/Heading";
import Image from "next/image";
import { useState } from "react";
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
// import NumSk2 from "../public/Images/Curriculum/NumeracySkills/numSk2.jpg";
import NumSk2 from "../public/Images/Curriculum/NumeracySkills/NBuildingBlocks.png";
// import NumSk3 from "../public/Images/Curriculum/NumeracySkills/numSk3.jpg";
import NumSk3 from "../public/Images/Curriculum/NumeracySkills/numsk3New.png";
// import NumSk4 from "../public/Images/Curriculum/NumeracySkills/numSk4.jpg";
import NumSk4 from "../public/Images/Curriculum/NumeracySkills/NFingerCounting.png";
// import NumSk5 from "../public/Images/Curriculum/NumeracySkills/numtesttwo.jpg";
import NumSk5 from "../public/Images/Curriculum/NumeracySkills/numtesttwoNew.png";

// import ComSk1 from "@/public/Images/Curriculum/CommunicationSkills/comOne.jpg";
import ComSk1 from "@/public/Images/Curriculum/CommunicationSkills/NDramaticPlay.png";
import ComSk2 from "@/public/Images/Curriculum/CommunicationSkills/comTwo.jpg";
import ComSk3 from "@/public/Images/Curriculum/CommunicationSkills/ComThree.jpg";
// import ComSk4 from "@/public/Images/Curriculum/CommunicationSkills/comFour.jpg";
import ComSk4 from "@/public/Images/Curriculum/CommunicationSkills/NInteractionWithConfidence.png";
import ComSk5 from "@/public/Images/Curriculum/CommunicationSkills/ComFive.jpg";
import ComSk6 from "../public/Images/Curriculum/CommunicationSkills/NRolePlay.png";

import InqSk1 from "../public/Images/Curriculum/InquirySkills/InqOne.jpg";
import InqSk2 from "../public/Images/Curriculum/InquirySkills/InqTwo.jpg";
import InqSk3 from "../public/Images/Curriculum/InquirySkills/InqThree.jpg";
import InqSk4 from "../public/Images/Curriculum/InquirySkills/InqFour.jpg";
import InqSk5 from "../public/Images/Curriculum/InquirySkills/InqFive.jpg";

import LangSk1 from "../public/Images/Curriculum/LanguageSkills/langOne.jpg";
// import LangSk2 from "../public/Images/Curriculum/LanguageSkills/langTwo.jpg";
import LangSk2 from "../public/Images/Curriculum/LanguageSkills/NReadingSkills.png";
// import LangSk3 from "../public/Images/Curriculum/LanguageSkills/langThree.jpg";
import LangSk3 from "../public/Images/Curriculum/LanguageSkills/NStoryTelling.png";
import LangSk4 from "../public/Images/Curriculum/LanguageSkills/langFour.jpg";
import LangSk5 from "../public/Images/Curriculum/LanguageSkills/langFive.png";

import SeSk1 from "../public/Images/Curriculum/SocioEconomicSkills/SeOne.jpg";
// import SeSk2 from "../public/Images/Curriculum/SocioEconomicSkills/SeTwo.jpg";
// import SeSk3 from "../public/Images/Curriculum/SocioEconomicSkills/SeThree.jpg";
// import SeSk4 from "../public/Images/Curriculum/SocioEconomicSkills/SeFour.jpg";
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

const Curriculum = () => {
  const [selectedOption, setSelectedOption] = useState("playgroup");

  // New Skill Boxes Images
  const [image, setImage] = useState(NumSk1);
  const [commImage, setCommImage] = useState(ComSk6);
  const [inquiryImage, setInquiryImage] = useState(InqSk5);
  const [langImage, setLangImage] = useState(LangSk4);
  const [socioEcoImage, setSocioEcoImage] = useState(SeSk2);
  const [gymImage, setGymImage] = useState(GymSk1);

  return (
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
                <Image src={CurriculumImg} alt="" />
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
                talking, painting, scribbling, splashing and jumping. We make
                learning a joyous experience for them every step of the way with
                specially curated activities and lesson plans.
              </h4>
            </div>
            <div className="col-lg-1"> </div>
            <div className="col-lg-5">
              <div className="dayInLifeImg">
                <Image src={ArtImg} alt="" />
              </div>
              {/* <h4>
                Our Little Aryans are busy learning, talking, painting,
                scribbling, splashing and pounding through the day.{" "}
              </h4> */}
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
                    <Image src={MathA} alt="" />
                  </div>
                  <div className="newSkillTextTxt">
                    <p>
                      We nurture a child’s cognitive skills and logical thinking
                      by actively encouraging them to be curious. They play with
                      blocks and experiment with objects in water to explore
                      spatial relations, patterns, shapes and reasoning
                      abilities. Our objective here is to have them view the
                      world around them from a mathematical lens.
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
                    <Image className="newSkillBoxMainImg" src={image} alt="" />
                    {/* Pagination Boxes */}
                    <div className="centerImgBoxes">
                      <div
                        className="centerImgBox"
                        onClick={() => setImage(NumSk1)}
                      >
                        <Image src={NumSk1} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setImage(NumSk2)}
                      >
                        <Image src={NumSk2} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setImage(NumSk3)}
                      >
                        <Image src={NumSk3} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setImage(NumSk4)}
                      >
                        <Image src={NumSk4} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setImage(NumSk5)}
                      >
                        <Image src={NumSk5} alt="" />
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
                    <Image src={LanguageA} alt="" />
                  </div>
                  <div className="newSkillTextTxt">
                    <p>
                      We believe in having children become active participants
                      in their own learning process. For the most part, they’ve
                      been dependent on the adults in their lives to
                      communicate. The first step for us is to make them more
                      independent. We get them to seek out answers by themselves
                      while teaching them words, letters and other elements of a
                      language.
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
                    <Image
                      className="newSkillBoxMainImg"
                      src={langImage}
                      alt=""
                    />
                    {/* Pagination Boxes */}
                    <div className="centerImgBoxes">
                      <div
                        className="centerImgBox"
                        onClick={() => setLangImage(LangSk4)}
                      >
                        <Image src={LangSk4} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setLangImage(LangSk3)}
                      >
                        <Image src={LangSk3} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setLangImage(LangSk2)}
                      >
                        <Image src={LangSk2} alt="" />
                      </div>

                      <div
                        className="centerImgBox"
                        onClick={() => setLangImage(LangSk1)}
                      >
                        <Image src={LangSk1} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setLangImage(LangSk5)}
                      >
                        <Image src={LangSk5} alt="" />
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
                    <Image src={InquiryA} alt="" />
                  </div>
                  <div className="newSkillTextTxt">
                    <p>
                      We provide a diverse learning environment that is designed
                      to foster scientific aptitude by engaging all of a
                      student’s senses. Our learning program is based on the
                      STEAM framework and recognises their natural inclination
                      to explore and question. All for cultivating a scientific
                      temper in them.
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
                    <Image
                      className="newSkillBoxMainImg"
                      src={inquiryImage}
                      alt=""
                    />
                    {/* Pagination Boxes */}
                    <div className="centerImgBoxes">
                      <div
                        className="centerImgBox"
                        onClick={() => setInquiryImage(InqSk5)}
                      >
                        <Image src={InqSk5} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setInquiryImage(InqSk3)}
                      >
                        <Image src={InqSk3} alt="" />
                      </div>

                      <div
                        className="centerImgBox"
                        onClick={() => setInquiryImage(InqSk1)}
                      >
                        <Image src={InqSk1} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setInquiryImage(InqSk2)}
                      >
                        <Image src={InqSk2} alt="" />
                      </div>

                      <div
                        className="centerImgBox"
                        onClick={() => setInquiryImage(InqSk4)}
                      >
                        <Image src={InqSk4} alt="" />
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
                    <Image src={ArtAbstractA} alt="" />
                  </div>
                  <div className="newSkillTextTxt">
                    <p>
                      We never stop exploring new perspectives on understanding
                      child development through art. The same goes for the depth
                      of their individuality. We observe their wonder, dreams
                      and doubts as they’re mixing colours, creating patterns or
                      even scribbling. We understand the profound impact that
                      art, irrespective of medium, has on their emotions and
                      self-expression.
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
                    <Image
                      className="newSkillBoxMainImg"
                      src={commImage}
                      alt=""
                    />
                    {/* Pagination Boxes */}
                    <div className="centerImgBoxes">
                      <div
                        className="centerImgBox"
                        onClick={() => setCommImage(ComSk6)}
                      >
                        <Image src={ComSk6} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setCommImage(ComSk1)}
                      >
                        <Image src={ComSk1} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setCommImage(ComSk2)}
                      >
                        <Image src={ComSk2} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setCommImage(ComSk3)}
                      >
                        <Image src={ComSk3} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setCommImage(ComSk4)}
                      >
                        <Image src={ComSk4} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setCommImage(ComSk5)}
                      >
                        <Image src={ComSk5} alt="" />
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
                    <Image src={SocioEmotionalA} alt="" />
                  </div>
                  <div className="newSkillTextTxt">
                    <p>
                      Learning, in some ways, is a journey of self-discovery.
                      One that is crucial to a child’s overall growth. We engage
                      them in activities that help develop essential life
                      skills. Our classrooms and lesson plans are designed to
                      fulfil their yearning for autonomy. All while teaching
                      them the interdependence between individuals and society.
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
                    <Image
                      className="newSkillBoxMainImg"
                      src={socioEcoImage}
                      alt=""
                    />
                    {/* Pagination Boxes */}
                    <div className="centerImgBoxes">
                      {/* <div
                        className="centerImgBox"
                        onClick={() => setSocioEcoImage(SeSk1)}
                      >
                        <Image src={SeSk1} alt="" />
                      </div> */}
                      <div
                        className="centerImgBox"
                        onClick={() => setSocioEcoImage(SeSk2)}
                      >
                        <Image src={SeSk2} alt="" />
                      </div>
                      {/* <div
                        className="centerImgBox"
                        onClick={() => setSocioEcoImage(SeSk3)}
                      >
                        <Image src={SeSk3} alt="" />
                      </div> */}
                      <div
                        className="centerImgBox"
                        onClick={() => setSocioEcoImage(SeSk4)}
                      >
                        <Image src={SeSk4} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setSocioEcoImage(SeSk5)}
                      >
                        <Image src={SeSk5} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setSocioEcoImage(seSk6)}
                      >
                        <Image src={seSk6} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setSocioEcoImage(seSk7)}
                      >
                        <Image src={seSk7} alt="" />
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
                    <Image src={GymnasticsYoga} alt="" />
                  </div>
                  <div className="newSkillTextTxt">
                    <p>
                      We focus on instilling healthy habits in children with
                      gymnastics. Activities like cartwheels, jumping and
                      stretching go beyond physical exercise. They empower them
                      with a sense of control, balance, spatial relationships
                      and a deeper understanding of their body&apos;s
                      capabilities. It boosts their self-confidence and
                      cognitive skills like nothing else.
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
                    <Image
                      className="newSkillBoxMainImg"
                      src={gymImage}
                      alt=""
                    />
                    {/* Pagination Boxes */}
                    <div className="centerImgBoxes">
                      <div
                        className="centerImgBox"
                        onClick={() => setGymImage(GymSk1)}
                      >
                        <Image src={GymSk1} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setGymImage(GymSk2)}
                      >
                        <Image src={GymSk2} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setGymImage(GymSk3)}
                      >
                        <Image src={GymSk3} alt="" />
                      </div>
                      <div
                        className="centerImgBox"
                        onClick={() => setGymImage(GymSk4)}
                      >
                        <Image src={GymSk4} alt="" />
                      </div>
                      {/* <div
                        className="centerImgBox"
                        onClick={() => setGymImage(GymSk5)}
                      >
                        <Image src={GymSk5} alt="" />
                      </div> */}
                    </div>
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
              <Image src={PinkScribble} alt="" />
            </div>
          </div>
          <div className="integratedNewSec">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div className="integratedSettlingText">
                  <h4>
                    We get it. The first day of preschool is a major milestone
                    for children and their parents. Our Integrated Settling Plan
                    helps children adjust easily to their new environment and
                    overcome their separation anxiety. Our approach to learning
                    is such that science is taught through music. Mathematics
                    with history. English with art and craft. This gives the
                    physical environment, art installations and such, a bigger
                    place in the learning process. Our curriculum removes the
                    hard separation of subjects as suggested by the National
                    Education Policy (NEP).
                  </h4>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div className="integratedSettlingImage">
                  <Image src={ISP} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
