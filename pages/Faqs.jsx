import Image from "next/image";
import { useState } from "react";
import Heading from "../Components/Heading";
import AdmissionFaq from "../Components/AdmissionFaq";
import OperationalFaq from "../Components/OperationalFaq";
import InfrasturctureFaq from "../Components/InfrasturctureFaq";
import CurriculumFaq from "../Components/CurriculumFaq";

// Images
import HeadUnderline from "../public/Images/blue-head-underline.png";
import FAQ1 from "../public/Images//GIF/faq.gif";
import GreenHeadUnderline from "../public/Images/green-head-underline.png";
import RedHeadUnderline from "../public/Images/red-head-underline.png";
import PinkHeadUnderline from "../public/Images/pink-head-underline.png";
import YellowHeadUnderline from "../public/Images/yellow-head-underline.png";
import PurpleHeader from "../public/Images/SVG/purpleHeader.svg";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const Faqs = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
    description:
      `Little Aryan's Pre K offers a nurturing and stimulating environment for early childhood education. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development.`,
    keywords: "Daycare Services, After-School Care, Child Safety",
  };

  // ======== Hover effect for underline ==========
  const [isAdmissionsHovered, setIsAdmissionsHovered] = useState(false);
  const [isOperationalHovered, setIsOperationalHovered] = useState(false);
  const [isInfrastructureHovered, setIsInfrastructureHovered] = useState(false);
  const [isCurriculumHovered, setIsCurriculumHovered] = useState(false);

  const handleAdmissionsMouseEnter = () => {
    setIsAdmissionsHovered(true);
  };

  const handleAdmissionsMouseLeave = () => {
    setIsAdmissionsHovered(false);
  };

  const handleOperationalMouseEnter = () => {
    setIsOperationalHovered(true);
  };

  const handleOperationalMouseLeave = () => {
    setIsOperationalHovered(false);
  };

  const handleInfrastructureMouseEnter = () => {
    setIsInfrastructureHovered(true);
  };

  const handleInfrastructureMouseLeave = () => {
    setIsInfrastructureHovered(false);
  };

  const handleCurriculumMouseEnter = () => {
    setIsCurriculumHovered(true);
  };

  const handleCurriculumMouseLeave = () => {
    setIsCurriculumHovered(false);
  };

  // Scroll to section on Click
  function scrollToAdmissionSection() {
    const admissionSection = document.querySelector(
      ".admissionQuestionSection"
    );
    admissionSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToOperationalSection() {
    const infrastructureSection = document.querySelector(
      ".OperationalQuestionSection"
    );
    infrastructureSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToInfrastructureSection() {
    const infrastructureSection = document.querySelector(
      ".InfrastructureQuestionSection"
    );
    infrastructureSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToCurriculumSection() {
    const infrastructureSection = document.querySelector(
      ".CurriculumQuestionSection"
    );
    infrastructureSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="faqsPage">
            {/* Heading */}
            <Heading headTitle="FAQs" headBottomImg={PurpleHeader} />
            {/* FAQ Description */}
            <div className="faqDescription infoSection">
              <div className="infoSectionInner">
                <div className="faqDescText">
                  <h2>We encourage all your questions....?</h2>
                </div>
                <div className="faqDescImg">
                  <Image src={FAQ1} alt="Kalyan" />
                </div>
              </div>
            </div>
            {/* End FAQ Description */}

            {/*  FAQ Main List */}
            <div className="faqMainList">
              <div className="mainListInner">
                <div
                  className="listElement"
                  onMouseEnter={handleAdmissionsMouseEnter}
                  onMouseLeave={handleAdmissionsMouseLeave}
                >
                  <div
                    onClick={scrollToAdmissionSection}
                    className="elementText"
                  >
                    <h4>admissions</h4>
                  </div>
                  <div
                    className="elementImg"
                    style={{
                      visibility: isAdmissionsHovered ? "visible" : "hidden",
                    }}
                  >
                    <Image src={GreenHeadUnderline} alt="underline" />
                  </div>
                </div>

                <div className="betweenLine"></div>

                <div
                  className="listElement"
                  onMouseEnter={handleOperationalMouseEnter}
                  onMouseLeave={handleOperationalMouseLeave}
                >
                  <div
                    onClick={scrollToOperationalSection}
                    className="elementText"
                  >
                    <h4>operational information</h4>
                  </div>
                  <div
                    className="elementImg"
                    style={{
                      visibility: isOperationalHovered ? "visible" : "hidden",
                    }}
                  >
                    <Image src={PinkHeadUnderline} alt="underline" />
                  </div>
                </div>

                <div className="betweenLine"></div>

                <div
                  className="listElement"
                  onMouseEnter={handleInfrastructureMouseEnter}
                  onMouseLeave={handleInfrastructureMouseLeave}
                >
                  <div
                    onClick={scrollToInfrastructureSection}
                    className="elementText"
                  >
                    <h4>infrastructure</h4>
                  </div>
                  <div
                    className="elementImg"
                    style={{
                      visibility: isInfrastructureHovered
                        ? "visible"
                        : "hidden",
                    }}
                  >
                    <Image src={RedHeadUnderline} alt="underline" />
                  </div>
                </div>

                <div className="betweenLine"></div>

                <div
                  className="listElement"
                  onMouseEnter={handleCurriculumMouseEnter}
                  onMouseLeave={handleCurriculumMouseLeave}
                >
                  <div
                    onClick={scrollToCurriculumSection}
                    className="elementText"
                  >
                    <h4>curriculum & teaching</h4>
                  </div>
                  <div
                    className="elementImg"
                    style={{
                      visibility: isCurriculumHovered ? "visible" : "hidden",
                    }}
                  >
                    <Image src={YellowHeadUnderline} alt="underline" />
                  </div>
                </div>
              </div>
            </div>
            {/* End FAQ Main List */}

            {/* Admission Questions */}
            <AdmissionFaq />

            {/* Operational Information */}
            <OperationalFaq />

            {/* End Operational Information */}

            {/* Infrastructure */}
            <InfrasturctureFaq />
            {/* End Infrastructure */}

            {/* Curriculum & Teaching */}
            <CurriculumFaq />
            {/* End Curriculum & Teaching */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Faqs;
