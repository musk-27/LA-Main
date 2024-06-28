import Heading from "../Components/Heading";
import Image from "next/image";
import useFetch from "useFetch.js";
// Images
import HeadUnderline from "../public/Images/head-bottom.png";
import YellowHeader from "../public/Images/SVG/yellowHeader.svg";
import ArrowIcon from "../public/Images/Arrow-right.png";
import BorderLine from "../public/Images/team-line.png";
import ComtactImg from "../public/Images/ContactImg.png";
import Houses from "../public/Images/GIF/houses.gif";

const ContactUs = () => {
  const { data } = useFetch("/centers?populate=*");
  console.log(data);
  return (
    <div className="contactUsPage">
      {/* Heading */}
      <Heading headTitle="Contact Us" headBottomImg={YellowHeader} />

      {/* Contact Details */}
      <div className="contactDetailsSection">
        <div className="row">
          <div className="col-md-6">
            <div className="contactDetailImg">
              <Image src={Houses} alt="Preschool Admissions" />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div className="contactDetailText">
              <div className="contactDetailHead">
                <h4>
                  Looking to discuss how your child can get off to a great start
                  on their path to success as a Little Aryan? <br /> Reach out
                  to us.
                </h4>
              </div>
              <div className="contactDetailLine">
                <Image src={BorderLine} alt="Border Line" />
              </div>


              <h5>
                <span>call:</span>
                <a href="tel: +022 4943 5575"> +022 4943 5575</a>
              </h5>

              <div className="contactDetailLine">
                <Image src={BorderLine} alt="Border Line" />
              </div>

              <h5>
                <span>email:</span>
                <a href="mailto : info@littlearyans.in"> info@littlearyans.in
                </a>
              </h5>

              <div className="contactDetailLine">
                <Image src={BorderLine} alt="Border Line" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End contact detail */}

      {/* Contact Branches */}
      <div className="contactBranchesSection">
        <div className="row">
          {data.map((branchData, index) => {
            return (
              <div key={index} className="col-md-4">
                <div className="contantBranchBox">
                  <div className="branchBoxHead">
                    <div className="branchBoxHeadText">
                      <h6>Little Aryans Pre K</h6>
                      {/* <h5>Chakkinaka</h5> */}
                      <h5>{branchData.attributes.title}</h5>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      // href="https://goo.gl/maps/A2uGZyh2eYvgX9Vs6"
                      href={branchData.attributes.map_location}
                    >
                      <div className="branchBoxHeadIcon">
                        <Image src={ArrowIcon} alt="Arrow" />
                      </div>
                    </a>
                  </div>
                  <div className="borderLine">
                    <Image src={BorderLine} alt="Border Line" />
                  </div>
                  <div className="branchBoxText">
                    <p>{branchData.attributes.address}</p>
                    <p>
                    <span>tel: </span>
                      <a
                        href={`tel:+91${branchData.attributes.contact_number}`}
                      >
                        {branchData.attributes.contact_number}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End contact branches */}
    </div>
  );
};

export default ContactUs;
