import React from "react";
import Image from "next/image";
import useFetch from "../useFetch";
import Accordion from "react-bootstrap/Accordion";
import Underline from "../public/Images/footer-border.png";

const OperationalFaq = () => {
  const { data } = useFetch(
    "/faqs?populate=*&filters[Category][$eq]=Operational_Information"
  );

  return (
    <div>
      <div className="OperationalFaq">
        <div className="admissionQuestionSection OperationalQuestionSection">
          <div className="admissionQuestionHead">
            <h3>Operational Information:</h3>
            <div className="headBottomLine">
              <Image src={Underline} alt="Daycare Services" />
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
                  <Image src={Underline} alt="After-School Care" />
                </div>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OperationalFaq;
