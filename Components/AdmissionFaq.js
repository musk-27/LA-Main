import useFetch from "../useFetch";
import Underline from "../public/Images/footer-border.png";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";

const AdmissionFaq = () => {
    // Database
    const { data } = useFetch(
        "/faqs?populate=*&filters[Category][$eq]=Admission"
    );
    return (
        <div>
            <div className="AdmissionFaq">
                <div className="admissionQuestionSection">
                    <div className="admissionQuestionHead">
                        <h3>Admissions:</h3>
                        <div className="headBottomLine">
                            <Image src={Underline} alt="Kindergarten Readiness" />
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
                                    <Image src={Underline} alt="Play-Based Learning" />
                                </div>
                            </Accordion>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdmissionFaq;