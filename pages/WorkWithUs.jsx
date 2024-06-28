import Image from "next/image";
import Heading from "../Components/Heading";
import Accordion from "react-bootstrap/Accordion";
// Images
import HeadUnderline from "../public/Images/head-bottom.png";
import YellowHeader from "../public/Images/SVG/yellowHeader.svg";
import WorkDetailImg from "../public/Images/work-with-us.png";
import Train from "../public/Images/GIF/train.gif";
import WorkDetailGif from "../public/Images/GIF/work-with-us.gif";
import Line from "../public/Images/team-line.png";
import VerticalLine from "../public/Images/VerticalLine.png";
import PoliciesImg from "../public/Images/GIF/pol.gif";
import Underline from "../public/Images/footer-border.png";
import useFetch from "useFetch.js";
import PurpleHeader from "../public/Images/SVG/purpleHeader.svg";

const WorkWithUs = () => {
  // Data from Strapi
  const { data } = useFetch("/job-openings");
  return (
    <div>
      <div className="workWithUsPage">
        {/* Heading */}
        <Heading headTitle="Work With Us" headBottomImg={YellowHeader} />

        {/* Work Details */}
        <div className="workDetailSection">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center order-2 order-md-1">
              <div className="workDetailsText">
                <h4>
                  Everyone wants to leave their mark on the future. But the best
                  way to do that is to educate today’s children. When you
                  nurture their curiosity and make meaningful connections with
                  them, wonderful things happen.
                </h4>
                <h4>
                  If this excites you; if you truly believe this is your
                  calling, we are looking for you.
                </h4>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-md-2">
              <div className="workDetailImg">
                <Image src={WorkDetailGif} alt="Art and Craft Activities" />
              </div>
            </div>
          </div>
        </div>
        {/* End work details */}

        {/* Big Description */}
        {/* <div className="worlBigDesc">
          <h4>
            We, at Little Aryans believe in transparency and a commitment to
            identify career goals of prospective employees to build a network of
            individuals, who find working with us is not merely as a ‘job’ but a
            fulfilment of aspirations.{" "}
          </h4>
        </div> */}
        {/* End Big Description */}

        {/* More Details */}
        <div className="workMoreDetails">
          <div className="moreDetailHead">
            <h3>Make a difference while making a living.</h3>
          </div>

          {/* ============= Train Image =========== */}
          <div className="moreDetailsTrain">
            <div className="trainImg">
              <Image src={Train} alt="Music and Movement" />
              {/* <div className="trainDetailMain">
                <div className="row">
                  <div className="col-md-3">
                    <div className="trainDetailText"></div>
                  </div>
                  <div className="col-md-3">
                    <div className="trainDetailText">
                      <h5>
                        Innovative Pre School according to Education World
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="trainDetailText">
                      <h5>
                        India’s No.2 Most respected Pre School Brand according
                        to Education World{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="trainDetailText">
                      <h5>
                        Future Proof Learning Infrastructure according to
                        Education Today{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* End more details */}

        {/* Recent Openings */}
        <div className="recentOpenings">
          <div className="admissionQuestionSection">
            <div className="workContactHead">
              <h2>
                Join the exciting world of Little Aryans. <br /> Explore our
                current openings-
              </h2>
            </div>
            {data.map((jobData, index) => {
              return (
                <Accordion key={index} defaultActiveKey="0" flush>
                  {/* ======== Fee Policy ========= */}
                  <Accordion.Item
                    className="policySection"
                    eventKey={jobData.id}
                  >
                    <Accordion.Header className={jobData.attributes.IconColor}>
                      <h3 className="policyName">
                        {jobData.attributes.JobTitle}
                      </h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="admissionAnswer">
                        <p>{jobData.attributes.JobDescription}</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <div className="headBottomLine">
                    <Image src={Underline} alt="underline" />
                  </div>
                </Accordion>
              );
            })}
          </div>
        </div>
        {/* End Recent Opening */}

        {/* Work with us contant  */}
        <div className="workContantSection">
          <div className="workContactHead">
            <h2>REACH OUT TO US ?</h2>
          </div>
          <div className="workContactDetails">
            <div className="row">
              <div className="col-lg-5">
                <div className="workContactBox">
                  <h4>Mail your updated resume to</h4>
                  <div className="workContactLine">
                    <Image src={Line} alt="line" />
                  </div>
                  <a href="mailto:hr@littlearyans.in">
                    <h3>hr@littlearyans.in</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center d-none d-lg-block">
                <div className="verticalLine">
                  <Image src={VerticalLine} alt="vertical line" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="workContactBox">
                  <h4>Contact</h4>
                  <div className="workContactLine">
                    <Image src={Line} alt="line" />
                  </div>
                  <a href="tel:+917400404691">
                    <h3>+91 74004 04691</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
