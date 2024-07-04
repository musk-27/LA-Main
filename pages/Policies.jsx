import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Heading from "../Components/Heading";
// Images
import HeadUnderline from "../public/Images/blue-head-underline.png";
import PoliciesImg from "../public/Images/GIF/pol.gif";
import Underline from "../public/Images/footer-border.png";
import useFetch from "useFetch.js";
import PurpleHeader from "../public/Images/SVG/purpleHeader.svg";
import ReactMarkdown from "react-markdown";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const Policies = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
    description:
      `Little Aryan's Pre K offers a nurturing and stimulating environment for early childhood education. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development.`,
    keywords: "Toddler Activities, Preschool Curriculum, Montessori Method",
  };

  // Data from Strapi
  const { data } = useFetch("/policies");

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="policiesPage">
            {/* Heading */}
            <Heading headTitle="Policies" headBottomImg={PurpleHeader} />

            {/* Policies Image */}
            <div className="policiesImgSection">
              <div className="policiesImage">
                <Image src={PoliciesImg} alt="Early Childhood Education" />
              </div>
            </div>
            {/* End Policies Image */}

            {/* Policy List */}
            <div className="admissionQuestionSection">
              {data.map((policyData, index) => {
                return (
                  <Accordion key={index} defaultActiveKey="0" flush>
                    {/* ======== Fee Policy ========= */}
                    <Accordion.Item
                      className="policySection"
                      eventKey={policyData.id}
                    >
                      <Accordion.Header
                        className={policyData.attributes.IconColor}
                      >
                        <h3 className="policyName">
                          {policyData.attributes.PolicyName}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="admissionAnswer">
                          <p>
                            <ReactMarkdown>
                              {policyData.attributes.Description}
                            </ReactMarkdown>
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <div className="headBottomLine">
                      <Image src={Underline} alt="Best Preschool Programs" />
                    </div>
                  </Accordion>
                );
              })}
            </div>
            {/* End Policy List */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Policies;
