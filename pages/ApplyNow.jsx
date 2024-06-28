import Image from "next/image";
import Heading from "../Components/Heading";
import HeadUnderline from "../public/Images/blue-head-underline.png";
import StepsBreakLineImg from "../public/Images/team-line.png";
import DarkBlueScribble from "../public/Images/DarkBlueScribble.png";
import PurpleHeader from "../public/Images/SVG/purpleHeader.svg";
import Link from "next/link";

const ApplyNow = () => {
  return (
    <div>
      <div className="applyNowPage">
        {/* Heading */}
        <Heading headTitle="Apply Now" headBottomImg={PurpleHeader} />

        {/* Apply Header */}
        <div className="applyHead">
          <h3>
            To launch your child’s incredible learning journey, read the details
            herewith.
          </h3>
        </div>
        {/* End Apply Header */}

        {/* Apply Steps  */}
        <div className="applyNowStepsSection">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="applyNowStepImg">
                <h5>ENROLMENT IS A 3 STEP PROCESS:</h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="applyNowStepsText">
                <div className="applyNowStep">
                  <ol>
                    <li>
                      Application -{" "}
                      <Link target="blank"
                        href="https://online.littlearyans.in/"
                      // href="/Admission"
                      >
                        Apply online via the Little Aryans application portal
                      </Link>
                    </li>
                    <div className="stepsBreakLine">
                      <Image src={StepsBreakLineImg} alt="Parent-Teacher Communication" />
                    </div>
                    <li>Meet and Greet Procedure</li>
                    <div className="stepsBreakLine">
                      <Image src={StepsBreakLineImg} alt="Parent-Teacher Communication" />
                    </div>
                    <li>Fee Payment and Confirmation of Admission</li>
                    <div className="stepsBreakLine">
                      <Image src={StepsBreakLineImg} alt="Parent-Teacher Communication" />
                    </div>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Bottomunderline">
          <Image src={DarkBlueScribble} alt="Sensory Activities" />
        </div>
        {/* End Apply Steps */}

        {/* Important Notice */}
        <div className="applyNowStepsSection">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="impNoticeImg">
                <h5>IMPORTANT NOTICE</h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="applyNowStepsText">
                <div className="applyNowStep">
                  <div className="impNoticeText">
                    <ul>
                      <li>
                        The admission for academic year 24-25 begins online from
                        24th Oct 2023.{" "}
                      </li>
                      <li>
                        <div className="stepsBreakLine">
                          <Image src={StepsBreakLineImg} alt="Educational Games" />
                        </div>
                      </li>

                      <li>
                        {" "}
                        All admission details are available after the submission
                        of the inquiry form.{" "}
                      </li>
                      <li>
                        {" "}
                        <div className="stepsBreakLine">
                          <Image src={StepsBreakLineImg} alt="Educational Games" />
                        </div>
                      </li>

                      <li>
                        Admissions are available on a first-come-first-serve
                        basis.
                      </li>
                      <li>
                        <div className="stepsBreakLine">
                          <Image src={StepsBreakLineImg} alt="Educational Games" />
                        </div>
                      </li>

                      <li>
                        All those seeking admission must produce satisfactory
                        evidence of his/her date of birth such as a certificate
                        from Municipal or village records.
                      </li>
                      <li>
                        <div className="stepsBreakLine">
                          <Image src={StepsBreakLineImg} alt="Educational Games" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Bottomunderline">
          <Image src={DarkBlueScribble} alt="scribble" />
        </div>
        {/* End IMportant Notice */}

        {/* Age Criteria */}
        <div className="applyNowStepsSection">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="ageCriteriaImg">
                <h5>AGE CRITERIA</h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ageCriteriaText">
                <h4>
                  Age Eligibility criteria for admission to Little Aryans is
                  detailed in the table given below for the academic year
                  2024-2025.
                </h4>

                <div className="ageCriteriaList">
                  <div className="ageCriteriaListElem">
                    <div className="row">
                      <div className="col-6">
                        <h5>GRADE</h5>
                      </div>
                      <div className="col-6">
                        <h5>BORN BETWEEN</h5>
                      </div>
                    </div>
                  </div>
                  <div className="stepsBreakLine">
                    <Image src={StepsBreakLineImg} alt="Educational Games" />
                  </div>
                  <div className="ageCriteriaListElem">
                    <div className="row">
                      <div className="col-6">
                        <h5> Play Group</h5>
                      </div>
                      <div className="col-6">
                        <h5>1st July 2021 to 31st dec 2022</h5>
                      </div>
                    </div>
                  </div>
                  <div className="stepsBreakLine">
                    <Image src={StepsBreakLineImg} alt="Educational Games" />
                  </div>
                  <div className="ageCriteriaListElem">
                    <div className="row">
                      <div className="col-6">
                        <h5> Nursery</h5>
                      </div>
                      <div className="col-6">
                        <h5> 1st July 2020 to 31st dec 2021</h5>
                      </div>
                    </div>
                  </div>
                  <div className="stepsBreakLine">
                    <Image src={StepsBreakLineImg} alt="Educational Games" />
                  </div>
                  <div className="ageCriteriaListElem">
                    <div className="row">
                      <div className="col-6">
                        <h5>Junior Kindergarten</h5>
                      </div>
                      <div className="col-6">
                        <h5> 1st July 2019 to 31st dec 2020</h5>
                      </div>
                    </div>
                  </div>
                  <div className="stepsBreakLine">
                    <Image src={StepsBreakLineImg} alt="Educational Games" />
                  </div>
                  <div className="ageCriteriaListElem">
                    <div className="row">
                      <div className="col-6">
                        <h5> Senior Kindergarten</h5>
                      </div>
                      <div className="col-6">
                        <h5> 1st July 2018 to 31st dec 2019</h5>
                      </div>
                    </div>
                  </div>
                  <div className="stepsBreakLine">
                    <Image src={StepsBreakLineImg} alt="Educational Games" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Bottomunderline">
          <Image src={DarkBlueScribble} alt="scribble" />
        </div>
        {/* End Age Criteria */}

        {/* Any Question */}
        <div className="anyQuestionsLine">
          <h3>
            If you have any questions, please contact the Admissions Office at
            info@littlearyans.in
          </h3>
        </div>
        {/* End Any Question */}

        {/* Enrol Now Circle */}
        <div className="applyEnrolBox d-flex justify-content-center">
          {/* <div className="enrolCircleImg">
            <Image src={EnrolNowImg} alt="" />
          </div> */}

          <div className="newEnrolBg"></div>
          <Link target="blank"
          href="https://online.littlearyans.in/"
        // href="/Admission"
        >
          
          <div className="newEnrolText">
            <h4>
              ENROL <br /> NOW
            </h4>
          </div>
        </Link>
        </div>

        <div className="Bottomunderline">
          <Image src={DarkBlueScribble} alt="scribble " />
        </div>
        {/* End enrol now circle */}
      </div>
    </div>
  );
};

export default ApplyNow;
