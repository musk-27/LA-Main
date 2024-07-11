import Image from "next/image";
import { useState } from "react";
import Heading from "../Components/Heading";
// Images
import RedHeadBottom from "../public/Images/red-head-underline.png";
import ParentsImg from "../public/Images/ParentsImg.png";
import ParentsDesc from "../public/Images/ParentsOurPartner/parentsDesc.png";

import MotherMeet1 from "../public/Images/ParentsOurPartner/Ptm/img1.png";
import MotherMeet2 from "../public/Images/ParentsOurPartner/Ptm/img2.png";
import MotherMeet3 from "../public/Images/ParentsOurPartner/Ptm/img3.png";
import MotherMeet4 from "../public/Images/ParentsOurPartner/Ptm/img4.png";

import PaOrient1 from "../public/Images/ParentsOurPartner/ParentsOrientation/PaOrient1.png";
import PaOrient2 from "../public/Images/ParentsOurPartner/ParentsOrientation/PaOrient2.png";
import PaOrient3 from "../public/Images/ParentsOurPartner/ParentsOrientation/PaOrient3.png";
import PaOrient4 from "../public/Images/ParentsOurPartner/ParentsOrientation/PaOrient4.png";
import PaOrient5 from "../public/Images/ParentsOurPartner/ParentsOrientation/PaOrient5.png";

import GrandparentsDay from "../public/Images/GrandparentsDay.png";
import GrandPa1 from "../public/Images/ParentsOurPartner/GrandParentsDay/Grandpa1.png";
import GrandPa2 from "../public/Images/ParentsOurPartner/GrandParentsDay/Grandpa2.png";
import GrandPa3 from "../public/Images/ParentsOurPartner/GrandParentsDay/Grandpa3.png";
import GrandPa4 from "../public/Images/ParentsOurPartner/GrandParentsDay/Grandpa4.png";

import AnnualDayImg from "../public/Images/annualDayImg.png";
import Annual1 from "../public/Images/ParentsOurPartner/AnnualDay/Annual1.png";
import Annual2 from "../public/Images/ParentsOurPartner/AnnualDay/Annual2.png";
import Annual3 from "../public/Images/ParentsOurPartner/AnnualDay/Annual3.png";
import Annual4 from "../public/Images/ParentsOurPartner/AnnualDay/Annual4.png";

import khelMelaImg from "../public/Images/khelMelaImg.png";
import KhelMela1 from "../public/Images/ParentsOurPartner/KhelMela/img1.png";
import KhelMela3 from "../public/Images/ParentsOurPartner/KhelMela/img2.png";
import KhelMela4 from "../public/Images/ParentsOurPartner/KhelMela/img3.png";

import Ptm1 from "../public/Images/ParentsOurPartner/Ptm/img1.png";
import Ptm2 from "../public/Images/ParentsOurPartner/Ptm/img2.png";
import Ptm3 from "../public/Images/ParentsOurPartner/Ptm/img3.png";
import Ptm4 from "../public/Images/ParentsOurPartner/Ptm/img4.png";

import Underline from "../public/Images/footer-border.png";
import ParentsPartnerImg from "../public/Images/news1.png";
import DarkBlueScribble from "../public/Images/DarkBlueScribble.png";
import ParentSupportImg from "../public/Images/parentSupportImg.png";
import ParentsOrientationImg from "../public/Images/ParentsOrientationImg.png";
import ptmImg from "../public/Images/ptmImg.png";
import RedHeader from "../public/Images/SVG/redHeader.svg";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Parents = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
    description:
      `Little Aryan's Pre K offers a nurturing and stimulating environment for early childhood education. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development.`,
    keywords: "Kalyan, thane , Kalyan west ",
  };

  const [motherMeetImg, setMotherMeetImg] = useState(MotherMeet1);

  const [parnetsOrientImg, setParnetsOrientImg] = useState(PaOrient1);

  const [grandparentsImg, setGrandparentsImg] = useState(GrandPa1);

  const [annualImage, setAnnualImage] = useState(Annual1);

  const [khelImage, setKhelImage] = useState(KhelMela1);

  const [parentMeetingImage, setParentMeetingImage] = useState(Ptm1);

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div>
          <div className="parentsPage">
            {/* Heading */}
            <Heading
              headTitle="Parents - Our Partner"
              headBottomImg={RedHeader}
            />
            {/* Parents Description */}
            <div className="lessPaddingInfoSection">
              <div className="infoSectionInner">
                <div className="parentsDescText">
                  <p>
                    Every Little Aryan’s parent does more than just drop off and
                    pick them up. They play an active role in their child’s
                    development.
                  </p>
                  <p>
                    Learning doesn’t stop at the end of school each day.
                    Students go home with their brains full of new ideas and
                    discoveries. It’s at home that they first apply these
                    learnings.
                  </p>
                </div>
                <div className="parentsDescImg">
                  <Image src={ParentsImg} alt="Parent-Teacher Communication" />
                </div>
              </div>
            </div>
            {/* End Parents Description */}

            {/* Parents Become our Partner */}
            <div className="parentsOurPartner">
              <div className="parentsPartnerHead">
                <h2>How do our parents become our partners? </h2>
              </div>
              <div className="headerUnderline">
                <Image src={Underline} alt="underline" />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="parentsPartnerText">
                    <ul>
                      <li>
                        <p>
                          {" "}
                          By understanding the school curriculum & philosophy.{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          By supporting students in school-specific activities
                          like colour parades, festivals special days and
                          events.
                        </p>
                      </li>
                      <li>
                        <p>
                          By documenting their photos and videos from school
                          projects that help students feel supported in their
                          daily rigour. Sharing these on our social media pages,
                          if comfortable.
                        </p>
                      </li>
                      <li>
                        <p>
                          By guiding with minimal intervention during Flipgrid
                          activities
                        </p>
                      </li>
                      <li>
                        <p>
                          By staying updated on the student’s weekly progress
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="parentsPartnerImg">
                    <Image src={ParentsDesc} alt="Preschool Enrollment" />
                  </div>
                </div>
              </div>
            </div>
            <div className="scribbleImg">
              <Image src={DarkBlueScribble} alt="scribble" />
            </div>
            {/* End Parents become our Partner */}

            {/* ============= How we support Parents Steps ================== */}

            <div className="supportParentsHead">
              <h2>
                How do we support parents in becoming meaningfully engaged in
                their child’s school experience?{" "}
              </h2>
              <div className="headerUnderline">
                <Image src={Underline} alt="underline" />
              </div>
            </div>

            {/* Mothers Meet */}
            <div className="mothersMeetSection">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column order-2 order-md-1">
                  <div className="mothersMeetImg">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      pagination={{ clickable: true, el: "" }}
                      autoplay={{ delay: 3000 }}
                      effect="slide"
                    >
                      <SwiperSlide>
                        <Image src={MotherMeet1} alt="Educational Games" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={MotherMeet2} alt="Holistic Development" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={MotherMeet3} alt="Pre-K Education" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={MotherMeet4} alt="Sensory Activities" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <div className="mothersMeetText">
                    <div className="mothersMeetHead">
                      <div className="meetHeadNumber supportStep1">
                        <h3>1</h3>
                      </div>
                      <div className="meetHeadDesc">
                        <h3>MOTHERS MEET</h3>
                      </div>
                    </div>
                    <div className="mothersMeetTextDesc">
                      <p>
                        Workshops, talks and sessions organised every quarter on
                        various topics related to child development. Meant to be
                        a refresher on parenting skills, giving them confidence
                        and the up-to-date learnings they need to nurture their
                        little one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Mother Meet */}

            {/* PARENT’S ORIENTATION */}
            <div className="mothersMeetSection">
              <div className="row">
                <div className="col-md-6">
                  <div className="mothersMeetText">
                    <div className="mothersMeetHead">
                      <div className="meetHeadNumber supportStep2">
                        <h3>2</h3>
                      </div>
                      <div className="meetHeadDesc">
                        <h3>PARENT&apos;S ORIENTATION</h3>
                      </div>
                    </div>
                    <div className="mothersMeetTextDesc">
                      <p>
                        Held at the beginning of the sessions for parents of
                        students who have newly taken admissions, this program
                        welcomes the parents into the family and introduces them
                        to class teachers and other staff members. They also get
                        a lowdown on all things Little Aryans.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                  <div className="mothersMeetImg">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      pagination={{ clickable: true, el: "" }}
                      autoplay={{ delay: 3000 }}
                      effect="slide"
                    >
                      <SwiperSlide>
                        <Image src={PaOrient1} alt="Social Skills" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={PaOrient2} alt="Emotional Growth" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={PaOrient3} alt="Preschool Events" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={PaOrient4} alt="Language Development" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={PaOrient5} alt="Motor Skills Development" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            {/* End PARENT’S ORIENTATION */}

            {/* GRAND PARENT DAY */}
            <div className="mothersMeetSection">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column order-2 order-md-1">
                  <div className="mothersMeetImg">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      pagination={{ clickable: true, el: "" }}
                      scrollbar={{ draggable: true }}
                      loop={true}
                      autoplay={{ delay: 3000 }}
                      effect="slide"
                    >
                      {/* <SwiperSlide>
                <Image src={grandparentsImg} alt="Grandparents Day" />
              </SwiperSlide> */}
                      <SwiperSlide>
                        <Image src={GrandPa1} alt="GrandPa1" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={GrandPa2} alt="GrandPa2" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={GrandPa3} alt="GrandPa3" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={GrandPa4} alt="GrandPa4" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <div className="mothersMeetText">
                    <div className="mothersMeetHead">
                      <div className="meetHeadNumber supportStep3">
                        <h3>3</h3>
                      </div>
                      <div className="meetHeadDesc">
                        <h3>GRAND PARENTS DAY</h3>
                      </div>
                    </div>
                    <div className="mothersMeetTextDesc">
                      <p>
                        A great bonding activity dedicated to the extended
                        family. By welcoming grandparents, we get to have them
                        share their immense wealth of knowledge, skills and life
                        lessons with their beloved grandchildren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End GRAND PARENT DAY */}

            {/* ANNUAL DAY */}
            <div className="mothersMeetSection">
              <div className="row">
                <div className="col-md-6">
                  <div className="mothersMeetText">
                    <div className="mothersMeetHead">
                      <div className="meetHeadNumber supportStep4">
                        <h3>4</h3>
                      </div>
                      <div className="meetHeadDesc">
                        <h3>ANNUAL DAY</h3>
                      </div>
                    </div>
                    <div className="mothersMeetTextDesc">
                      <p>
                        Little Aryans Annual Days go beyond traditional song and
                        dance performances. They are book-based and encourage
                        100% student participation to showcase their stage
                        presence, quick-thinking capacity, and confidence.
                      </p>
                      <p>
                        Children take on various roles. They also learn stage
                        techniques such as using space, expressions, body
                        language, movements, partnering with others, and voice
                        modulation.
                      </p>
                      <p>
                        Participating in these events helps them overcome their
                        fears. Parents play a crucial role in fostering feelings
                        of joy and encouraging active participation in their
                        children.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                  <div className="mothersMeetImg">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      pagination={{ clickable: true, el: "" }}
                      loop={true}
                      autoplay={{ delay: 3000 }}
                      effect="slide"
                    >
                      {/* <SwiperSlide>
                <Image src={annualImage} alt="Annual Day" />
              </SwiperSlide> */}
                      <SwiperSlide>
                        <Image src={Annual1} alt="Annual 1" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={Annual2} alt="Annual 2" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={Annual3} alt="Annual 3" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={Annual4} alt="Annual 4" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            {/* End ANNUAL DAY */}

            {/* KHEL MELA */}
            <div className="mothersMeetSection">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                  <div className="mothersMeetImg">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      pagination={{ clickable: true, el: "" }}
                      loop={true}
                      autoplay={{ delay: 3000 }}
                      effect="slide"
                    >
                      <SwiperSlide onClick={() => setKhelImage(KhelMela1)}>
                        <div className="centerImgBox">
                          <Image
                            src={KhelMela1}
                            alt="Best Preschool Programs"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide onClick={() => setKhelImage(KhelMela3)}>
                        <div className="centerImgBox">
                          <Image src={KhelMela3} alt="Child Development" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide onClick={() => setKhelImage(KhelMela4)}>
                        <div className="centerImgBox">
                          <Image src={KhelMela4} alt="Kindergarten Readiness" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mothersMeetText">
                    <div className="mothersMeetHead">
                      <div className="meetHeadNumber supportStep5">
                        <h3>5</h3>
                      </div>
                      <div className="meetHeadDesc">
                        <h3>KHEL MELA (SPORTS DAY)</h3>
                      </div>
                    </div>
                    <div className="mothersMeetTextDesc">
                      <p>
                        We harness a child&apos;s innate inclination for play by
                        involving them in diverse sports activities. A themed
                        sports day adds a unique touch. Children demonstrate
                        their gymnastics abilities, engaging in running,
                        jumping, and more.
                      </p>
                      <p>
                        During this event, many parents eagerly join in,
                        reliving their own childhood experiences. This newfound
                        connection between parents and children enhances their
                        bond, which is truly invaluable to us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End KHEL MELA */}

            {/* PARENT-TEACHER MEETINGS */}
            <div className="mothersMeetSection">
              <div className="row">
                <div className="col-md-6">
                  <div className="mothersMeetText">
                    <div className="mothersMeetHead">
                      <div className="meetHeadNumber supportStep6">
                        <h3>6</h3>
                      </div>
                      <div className="meetHeadDesc">
                        <h3>PARENT-TEACHER MEETINGS</h3>
                      </div>
                    </div>
                    <div className="mothersMeetTextDesc">
                      <p>
                        Scheduled parent-teacher meetings facilitate effective
                        communication, enabling parents and teachers to monitor
                        the child&apos;s progress, address concerns, and
                        overcome challenges together.
                      </p>
                      <p>
                        There are more opportunities for parents to actively
                        engage with the school from time to time throughout the
                        year.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                  <div className="mothersMeetImg">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      pagination={{ clickable: true, el: "" }}
                      loop={true}
                      autoplay={{ delay: 3000 }}
                      effect="slide"
                    >
                      <SwiperSlide onClick={() => setParentMeetingImage(Ptm1)}>
                        <div className="centerImgBox">
                          <Image src={Ptm1} alt="Learning through Play" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide onClick={() => setParentMeetingImage(Ptm2)}>
                        <div className="centerImgBox">
                          <Image src={Ptm2} alt="Daycare Services" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide onClick={() => setParentMeetingImage(Ptm3)}>
                        <div className="centerImgBox">
                          <Image src={Ptm3} alt="Nursery School" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide onClick={() => setParentMeetingImage(Ptm4)}>
                        <div className="centerImgBox">
                          <Image src={Ptm4} alt="Toddler Activities" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            {/* End PARENT-TEACHER MEETINGS*/}
            {/* ============== End How we support parenrts Steps ============= */}
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Parents;
