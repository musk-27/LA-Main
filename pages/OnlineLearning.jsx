import Heading from "@/Components/Heading";
import Image from "next/image";
// Images
import HeadUnderline from "../public/Images/green-head-underline.png";
import OnlineLearningImg from "../public/Images/GIF/online-learning.gif";
import LearningLockdowm from "../public/Images/GIF/online-learning-2.gif";
import OnlineLearnKid from "../public/Images/onlineLearnKid.png";
import SunBorder from "../public/Images/GIF/newcircle.gif";
import lineBorder from "../public/Images/team-line.png";
import MicrosoftSchoolImg from "../public/Images/microsoftSchoolImg.png";
import OnlineLearningMix from "../public/Images/OnlineLearningMix.png";
import LearningLockdowmImg from "../public/Images/learningLockdowm.png";
import HeaderUnderline from "../public/Images/SVG/header.svg";

const OnlineLearning = () => {
  return (
    <div>
      <div className="onlineLeaningPage">
        {/* Heading */}
        <Heading headTitle="Online Learning" headBottomImg={HeaderUnderline} />

        {/* ============ Online Learning Description ================ */}
        <div className="lessPaddingInfoSection onlineLearningDescSec">
          <div className="row">
            <div className="col-lg-6">
              <div className="onlineLearningDescImg">
                <Image src={LearningLockdowmImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="onlineLearningDescTe">
                <h4>
                  The pandemic didn’t affect us. We experienced no “learning
                  loss” whatsoever. We kept up with the times, thanks to a team
                  of academicians who sprung into action to create
                  activity-based lesson plans that made online sessions as
                  engaging as they are educational.
                </h4>
                <h4>
                  We continue to provide dedicated online learning opportunities
                  even today, to students who are unable to attend regular
                  school for any reason.
                </h4>
                <h4>
                  Additionally, experiential hands-on learning kits are made
                  available to each child, right at their doorsteps. Home
                  learning kits along with worksheets are cleverly used for
                  online and offline activities.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="onlineLearningLockdown infoSection">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="learningLockdownText">
                <h2>
                  Little Aryans kept its students engaged throughout the
                  lockdown!{" "}
                </h2>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="learningLockdownImg">
                <Image src={LearningLockdowm} alt="" />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="learningTagline">
          <h3>
            It continues to provide dedicated Online learning opportunities even
            today, to students who are unable to attend regular schools due to
            several personal reasons.{" "}
          </h3>
        </div> */}
        {/* ============= End Online Learning Desc ===================== */}

        {/* =================== Microsoft Showcase ===================== */}
        <div className="microsoftBorder">
          <div className="microBirderImg">
            <Image src={lineBorder} alt="" />
          </div>
          <div className="mircosoftSunImg">
            <Image src={SunBorder} alt="" />
          </div>
          <div className="microBirderImg">
            <Image src={lineBorder} alt="" />
          </div>
        </div>

        <div className="microsoftTaglines">
          <h5>We are</h5>
          <h2>
            The first preschool in India to be a <br />  Microsoft Showcase
            School
          </h2>
        </div>

        <div className="microsoftBorder">
          <div className="microBirderImg">
            <Image src={lineBorder} alt="" />
          </div>
          <div className="mircosoftSunImg">
            <Image src={SunBorder} alt="" />
          </div>
          <div className="microBirderImg">
            <Image src={lineBorder} alt="" />
          </div>
        </div>
        {/* =================== End Microsoft Showcase ================== */}

        {/* ====================== Our Teachers ========================= */}
        {/* <div className="ourTeachersDesc">
          <h3>
            Our teachers are our biggest assets! The ones who breathe life into
            the classes. They are touching the lives of many early learners
            whose normal learning is hindered in every way possible. Thanks to
            our teachers their foundational learning continues at Little Aryans
            Pre- K.
          </h3>
        </div> */}

        <div className="microsoftTeachers ">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <div className="microsoftTeachersImg">
                <Image src={MicrosoftSchoolImg} alt="" />
              </div>
            </div>
            <div className="col-md-7 d-flex align-items-center">
              <div className="microsoftTeachersText">
                <h3>All our teachers are Microsoft Innovative Educators!</h3>
                <p>
                  They are technologically equipped to create engaging lessons
                  using 3D images, PowerPoint presentations, gamification and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ==================== End Our Teachers ======================== */}

        {/* ====================== Remote Learning ======================== */}
        <div className="remoteLearning lessPaddingInfoSection">
          <div className="row">
            <div className="col-lg-6">
              <div className="remoteLearningText">
                <h4>
                  A Little Aryan’s remote learning sessions are a mix of
                  synchronous and asynchronous activities. We ensure that online
                  screen time for our students is limited. It is supplemented
                  with offline activities via apps such as Flipgrid, which
                  children can perform with the help of their parents. This
                  ensures that our tiny tots or their parents are not
                  overburdened.
                </h4>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="remoteLearningImg">
                {/* <Image src={OnlineLearningMix} alt="" /> */}
                <Image src={OnlineLearnKid} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* ======================== School Info ======================= */}

        <div className="lessPaddingInfoSection">
          <div className="infoSectionInner infoSectionInnerDiff">
            <div className="infoSectionLeft">
              {/* Studetn teacher Ration  */}
              <div className="studentTeacherRation">
                <div className="studentTeacherHead">
                  <h3>Student - teacher ratio</h3>
                </div>
                <div className="studentTeacherLine">
                  <Image src={lineBorder} alt="" />
                </div>
                <div className="studentTeacherText">
                  <p>
                    We ensure a 12:2 student-teacher ratio during our remote
                    learning classes. This is to make sure that each child
                    participates and is engaged positively.
                  </p>
                </div>
              </div>
              {/* End Student TEacher Ratio */}

              {/* Assessments and activities */}
              <div className="studentTeacherRation">
                <div className="studentTeacherHead">
                  <h3>Integration of assessments and hands-on activities</h3>
                </div>
                <div className="studentTeacherLine">
                  <Image src={lineBorder} alt="" />
                </div>
                <div className="studentTeacherText">
                  <p>
                    Each remote learning session is a carefully planned,
                    experiential, activity-based session that removes the
                    monotony and one-sidedness associated with remote learning.
                    Clubbed with ongoing, day-to-day assessments, these become
                    an enriching experience not just for children but also for
                    their parents.
                  </p>
                </div>
              </div>
              {/* End Assessments and activities */}
            </div>
            <div className="infoSectionRight">
              {/* Digital Safety */}
              <div className="studentTeacherRation">
                <div className="studentTeacherHead">
                  <h3>Digital Safety </h3>
                </div>
                <div className="studentTeacherLine">
                  <Image src={lineBorder} alt="" />
                </div>
                <div className="studentTeacherText">
                  <p>
                    Every class is monitored and recorded, to comply with
                    digital safety protocols.
                  </p>
                  {/* <p>
                    Our curriculum is a mix of scholastic and co-scholastic
                    sessions that are beautifully integrated to create joyful
                    learning experiences.
                  </p>
                  <p>
                    The humane touch and the joy of celebration are kept alive.
                    Cultural events and special days are celebrated with a
                    renewed fervour.
                  </p>
                  <p>
                    Experiential hands-on learning kits are made available to
                    each child, right at their doorsteps. Home learning kits
                    along with worksheets are cleverly used for online and
                    offline activities.
                  </p> */}
                </div>
              </div>
              {/* End Digital safety */}
            </div>
          </div>
        </div>
        {/* ===================== End School Info ====================== */}
      </div>
    </div>
  );
};

export default OnlineLearning;
