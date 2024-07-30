// import useFetch from "../useFetch";
// import Underline from "../public/Images/footer-border.png";
// import Image from "next/image";
// import Accordion from "react-bootstrap/Accordion";

// const CurriculumFaq = () => {
//   const { data } = useFetch(
//     "/faqs?populate=*&filters[Category][$eq]=Curriculum"
//   );

//   return (
//     <div>
//       <div className="CurriculumFaq">
//         <div className="admissionQuestionSection CurriculumQuestionSection">
//           <div className="admissionQuestionHead">
//             <h3>Curriculum & Teaching:</h3>
//             <div className="headBottomLine">
//               <Image src={Underline} alt="Early Childhood Education" />
//             </div>
//           </div>
//           {data.map((faqData, index) => {
//             return (
//               <Accordion key={index} defaultActiveKey="0" flush>
//                 <Accordion.Item eventKey={faqData.id}>
//                   <Accordion.Header className={faqData.attributes.Icon}>
//                     <h4>{faqData.attributes.Question}</h4>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="admissionAnswer">
//                       <p>{faqData.attributes.Answer}</p>
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <div className="headBottomLine">
//                   <Image src={Underline} alt="Best Preschool Programs" />
//                 </div>
//               </Accordion>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CurriculumFaq;

import Image from "next/image";
import useFetch from "../useFetch";
import React from "react"; // Import React
import Accordion from "react-bootstrap/Accordion";
import Underline from "../public/Images/footer-border.png";

const CurriculumFaq = () => {
  const { data } = useFetch(
    "/faqs?populate=*&filters[Category][$eq]=Curriculum"
  );

  return (
    <div>
      <div className="CurriculumFaq">
        <div className="admissionQuestionSection CurriculumQuestionSection">
          <div className="admissionQuestionHead">
            <h3>Curriculum & Teaching:</h3>
            <div className="headBottomLine">
              <Image src={Underline} alt="Early Childhood Education" />
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
                  <Image src={Underline} alt="Best Preschool Programs" />
                </div>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurriculumFaq;
