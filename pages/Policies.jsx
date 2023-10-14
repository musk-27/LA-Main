import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Heading from "@/Components/Heading";
// Images
import HeadUnderline from "../public/Images/blue-head-underline.png";
import PoliciesImg from "../public/Images/GIF/pol.gif";
import Underline from "../public/Images/footer-border.png";
import useFetch from "@/useFetch";
import PurpleHeader from "../public/Images/SVG/purpleHeader.svg";

const Policies = () => {
  // Data from Strapi
  const { data } = useFetch("/policies");

  return (
    <div>
      <div className="policiesPage">
        {/* Heading */}
        <Heading headTitle="Policies" headBottomImg={PurpleHeader} />

        {/* Policies Image */}
        <div className="policiesImgSection">
          <div className="policiesImage">
            <Image src={PoliciesImg} alt="" />
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
                  <Accordion.Header className={policyData.attributes.IconColor}>
                    <h3 className="policyName">
                      {policyData.attributes.PolicyName}
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="admissionAnswer">
                      <p>{policyData.attributes.Description}</p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <div className="headBottomLine">
                  <Image src={Underline} alt="" />
                </div>
              </Accordion>
            );
          })}
        </div>
        {/* End Policy List */}
      </div>
    </div>
  );
};

export default Policies;
