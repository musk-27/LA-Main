import Image from "next/image";
import HeadUnderline from "../public/Images/head-bottom.png";
import YellowHeader from "../public/Images/SVG/yellowHeader.svg";
import AboutDescSun from "../public/Images/aboutDescSun.png";
import AboutUsDesc from "../public/Images/GIF/about-us-new.gif";
import Puzzle1 from "../public/Images/Puzzle-1.png";
import Puzzle2 from "../public/Images/Puzzle-2.png";
import Puzzle3 from "../public/Images/Puzzle-3.png";
import Puzzle4 from "../public/Images/Puzzle-4.png";
import wheel from "../public/Images/1-wheel.png";
import BharatMalik from "../public/Images/OurStory/Bharat-Malik.jpg";
import NeelamMalik from "../public/Images/OurStory/Neelam-Malik.jpg";
import Underline from "../public/Images/team-line.png";
import HappyChildImg from "../public/Images/HappyChild.png";
import GenerakOutlineImg from "../public/Images/Science.gif";
import KhelMela from "../public/Images/Khel-Mela.gif";
import HappyChildText from "../public/Images/HappyChild-text.png";
import HappyChildGIF from "../public/Images/GIF/happy-child-happy-nation.gif";
import HappyChildSun from "../public/Images/HappyChild-sun.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStory = (metaTitle, description) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const { ref: wheelRef, inView: wheelInView } = useInView({ threshold: 1 });

  // ========= Aos Animation delay duration ===========
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="ourStoryPage">
      {/* Heading */}
      <div className="centersHead">
        <h1>Our Story</h1>
        <div className="centerHeadImg">
          <Image src={YellowHeader} alt="underline" />
        </div>
      </div>

      {/* Our story section  */}
      <div className="NewInfonfoSection">
        <div className="infoSectionInner">
          <div className="storyText">
            <h3 data-aos="fade-up">
              The Future of the world is in my classroom today.
            </h3>
            <h5 className="storyAuthorName">
              - Ivan Welton Fitzwater, <br />
              <span className="storyTextAuthorDes">Writer & Educator</span>{" "}
            </h5>
          </div>
          <div className="storyImg">
            <Image src={AboutUsDesc} alt="School Readiness Skills" />
          </div>
        </div>
      </div>

      {/* While kids are at Play */}
      <div className="kidsPlayHead">
        <h2>This is where it all begins</h2>
      </div>

      <div className="NewInfonfoSection" ref={ref}>
        <div className="infoSectionInner puzzleSectionInner">
          <div className="puzzleImg">
            <div className="puzzleSolveSection">
              <div className="row">
                <div className="col-6">
                  <div
                    className="puzzleItem puzzleItem1"
                    // ref={ref}
                    style={{
                      animation: inView
                        ? "puzzleSolve1 3s linear normal"
                        : "none",
                    }}
                  >
                    <Image src={Puzzle1} alt="Educational Games" />
                  </div>
                </div>
                <div className="col-6">
                  {/* react-scroll */}
                  <div
                    className="puzzleItem puzzleItem2"
                    // ref={ref}
                    style={{
                      animation: inView
                        ? "puzzleSolve2 3s linear normal"
                        : "none",
                    }}
                  >
                    <Image src={Puzzle2} alt="Holistic Development" />
                  </div>
                </div>
                <div className="col-6">
                  {/*  react-intersection-observer */}
                  <div
                    className="puzzleItem puzzleItem3"
                    // ref={ref}
                    style={{
                      animation: inView
                        ? "puzzleSolve3 3s linear normal"
                        : "none",
                    }}
                  >
                    <Image src={Puzzle3} alt="Pre-K Education" />
                  </div>
                </div>
                <div className="col-6">
                  {/* Normal React Hooks */}
                  <div
                    className="puzzleItem puzzleItem4"
                    //
                    style={{
                      animation: inView
                        ? "puzzlesolve4 3s linear normal"
                        : "none",
                    }}
                  >
                    <Image src={Puzzle4} alt="Sensory Activities" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kidsPlayText">
            <h4 data-aos="fade-up">
              It goes without saying. Every parent wants the best for their kid.
              They want to nurture lifelong curiosity in their young ones. Set
              them up for success. All this, in a place that aligns with their
              needs and values. Only then does a child unfurl their wings, and
              bloom into an upstanding young adult. All by themselves.
            </h4>
            <h4 data-aos="fade-up">
              Little Aryans Pre-K is that place. Many a path to success starts
              within our hallowed halls.
            </h4>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="visionMission">
        <div className="generalOutlineSection">
          <div className="row">
            <div className="col-lg-5">
              <div className="generalOutlineText">
                <h4>Vision</h4>
                <div className="generalOutlineUnderline">
                  <Image src={Underline} alt="underline" />
                </div>

                <h4>
                  To be a premier educational organization that provides
                  foundation for life in the global world to the next
                  generation.
                </h4>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="generalOutlineText">
                <h4>Mission</h4>
                <div className="generalOutlineUnderline">
                  <Image src={Underline} alt="underline" />
                </div>
                <h4>
                  To prepare the 21st-century learners, meeting the highest
                  educational and ethical standards in a caring and
                  collaborative environment that is supported by Motivated
                  Workforce, Technology and Research; while Partnering with
                  Higher Education, Family, Civic Organizations and Businesses.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Directors */}
      <div className="directorsHead">
        <div className="kidsPlayHead">
          <h2>Our Visionaries</h2>
        </div>
      </div>

      <div className="ourDirectorsSection">
        <div className="row">
          <div className="col-md-6">
            {/* Bharat Malik section */}
            <div className="directorBox">
              <div className="directorBoxImg">
                <Image src={BharatMalik} alt="BharatMalik" />
              </div>
              <div className="directorBoxText">
                <h3>MR. BHARAT MALIK</h3>
                <div className="UnderlineImg">
                  <Image src={Underline} alt="underline" />
                </div>
                <p data-aos="fade-up">
                  Moved to action by the lack of quality education in the
                  suburbs of Mumbai, Mr. Malik has been making a real difference
                  in children’s lives. The haven he created for them in Little
                  Aryans Pre-K is a celebration of the joy of learning. This is
                  where they get all the opportunities they need and more to
                  learn. To grow. To thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* Neelam Malik Section */}
            <div className="directorBox">
              <div className="directorBoxImg">
                <Image src={NeelamMalik} alt="NeelamMalik" />
              </div>
              <div className="directorBoxText">
                <h3>DR. NEELAM MALIK</h3>
                <div className="UnderlineImg">
                  <Image src={Underline} alt="underline" />
                </div>
                <p data-aos="fade-up">
                  A teacher through and through, Mrs. Malik doesn’t believe in
                  judging students by their academic performance. Or labelling
                  them in general. To her, no two young minds are alike. She
                  thoroughly enjoys engaging and building an emotional bond with
                  them. She is an integral part of what makes our students feel
                  at home, in school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Child Happy Nation Image */}
      <div className="happyChildImg">
        <div className="happyChildTextImg">
          <Image src={HappyChildImg} alt="Cognitive Development" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
