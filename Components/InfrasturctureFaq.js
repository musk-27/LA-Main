import React from "react";
import Image from "next/image";
import useFetch from "../useFetch";
import Accordion from "react-bootstrap/Accordion";
import Underline from "../public/Images/footer-border.png";

const InfrasturctureFaq = () => {
  const { data } = useFetch(
    "/faqs?populate=*&filters[Category][$eq]=Infrastructure"
  );

  return (
    <div>
      <div className="InfrasturctureFaq">
        <div className="admissionQuestionSection InfrastructureQuestionSection">
          <div className="admissionQuestionHead">
            <h3>Infrastructure:</h3>
            <div className="headBottomLine">
              <Image src={Underline} alt="Preschool Curriculum" />
            </div>
          </div>
          {data.map((faqData, index) => {
            return (
              <Accordion key={index} defaultActiveKey="0" flush>
                <Accordion.Item eventKey={faqData.id}>
                  <Accordion.Header className={faqData.attributes.Icon}>
                    <h4>{faqData.attributes.Question}</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="admissionAnswer">
                      <p>{faqData.attributes.Answer}</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <div className="headBottomLine">
                  <Image src={Underline} alt="Montessori Method" />
                </div>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfrasturctureFaq;
