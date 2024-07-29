import Image from "next/image";
import Heading from "../Components/Heading";
import HeadUnderline from "../public/Images/green-head-underline.png";
import PedagogyImg from "../public/Images/pedagogyImg.png";
import GenerakOutlineImg from "../public/Images/Science.gif";
import KhelMela from "../public/Images/Khel-Mela.gif";
import learnA from "../public/Images/learn-a.png";
import BearSong from "../public/Images/bear-song.png";
// import GreenScribble from "../public/Images/GreenScribble.png";
import GreenScribble from "../public/Images/SVG/scribbleDarkGreen.svg";
import VerticalLine from "../public/Images/VerticalLine.png";
import OurVission from "../public/Images/GIF/our-vission.gif";
import Underline from "../public/Images/team-line.png";
import HeaderUnderline from "../public/Images/SVG/header.svg";

import Layout from "../Components/layout";
// import Header from "../Components/Header/header";
// import MobileNavbar from "../Components/Header/mobileNavbar";
// import Footer from "../Components/Footer/footer";

const Pedagogy = () => {
  const metaData = {
    title: `Little Aryan's Pre K`,
        description:
          `Little Aryan's Pre-K offers a nurturing and stimulating environment for early childhood education in the vibrant community of Kalyan. Enroll your child in our top-rated pre-kindergarten program to foster their growth and development in a setting that encourages exploration and learning.`,
    keywords: "Social Skills, Emotional Growth, Preschool Events",
  };

  return (
    <>
      {/* <Header />
      <MobileNavbar /> */}
      <Layout metaData={metaData} includeHeaderFooter={false}>
        <div className="pedagogyPage">
          {/* Heading */}
          <Heading headTitle="Pedagogy" headBottomImg={HeaderUnderline} />

          {/* =========== Pedagogy Description ================== */}

          <div className="pedagogyDescSection">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="pedagogyDescText">
                  <h4>
                    Our approach isn’t unidimensional. We’ve taken our learnings
                    with renowned early childhood pedagogies like Montessori and
                    Kindergarten, and incorporated them into our methods. Not
                    before making them relevant for our children today.
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pedadogyImg">
                  <Image src={OurVission} alt="Social Skills" />
                </div>
              </div>
            </div>
          </div>

          <div className="essenceChinmaya">
            <h3>
              Everything we do is built on the four pillars of the Chinmaya
              Vision Program.
            </h3>
          </div>
          {/* =========== End Pedagogy Description ================= */}

          {/* =============== Start General Outline ================= */}

          {/* General Outline Head */}
          <div className="generalOutlineHead">
            <h3>GENERAL OUTLINE</h3>
            <div className="scribbleBottom">
              <Image src={GreenScribble} alt="scribble" />
            </div>
          </div>
          {/* End GEneral Outline Head */}

          {/* New General Outline */}
          <div className="generalOutlineSection">
            <div className="row">
              <div className="col-lg-5">
                <div className="generalOutlineText">
                  <h4>PLAYGROUP & NURSERY</h4>
                  <div className="generalOutlineUnderline">
                    <Image src={Underline} alt="underline" />
                  </div>
                  <ul>
                    <li>
                      <h4> Theme-based learning </h4>
                    </li>
                    <li>
                      <h4>
                        Curriculum built on familiar and relatable themes for
                        holistic learning
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="generalOutlineImg">
                  <Image src={GenerakOutlineImg} alt="Kalyan" />
                </div>
              </div>
            </div>
          </div>

          <div className="generalOutlineSection">
            <div className="row">
              <div className="col-lg-5">
                <div className="generalOutlineImg">
                  <Image
                    className="p-2"
                    src={KhelMela}
                    alt="Art and Craft Activities"
                  />
                </div>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-5">
                <div className="generalOutlineText">
                  <h4>KINDERGARTEN</h4>
                  <div className="generalOutlineUnderline">
                    <Image src={Underline} alt="underline" />
                  </div>
                  <ul>
                    <li>
                      <h4> Centre-based learning</h4>
                    </li>
                    <li>
                      <h4>
                        Active learning, going through the different learning
                        centres: Alpha Centre, Math Centre, Theme Centre &
                        Language Development Program (LDP) Centre, Hindi and
                        Marathi Centre.
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ============= End General Outline ==================== */}

          {/* ============== Start Integrated Learning ================= */}
          <div className="entegratedHead">
            <h2>
              The pedagogy of Integrated learning is incorporated for holistic
              learning.{" "}
            </h2>
          </div>

          <div className="entegratedLearningSection ">
            <div className="row">
              <div className="col-lg-5 d-flex align-items-center">
                <div className="entegratedPara1">
                  <h4>
                    When we teach a child about a plant’s life cycle, we also
                    get them to collect data. We teach them about sequences and
                    progression by counting the number of leaves they see each
                    day. We level up their vocabulary by getting them to name
                    the parts of the plant.  
                  </h4>
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-center">
                <div className="entegratedLine">
                  <Image src={VerticalLine} alt="Music and Movement" />
                </div>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <div className="entegratedPara2">
                  <h2>
                    Many skills. One activity. <br />
                    Truly holistic learning.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="learnBookSection">
            <div className="learnBookInner">
              <div className="learnBookA">
                <Image
                  className="rotate-image-learn"
                  src={learnA}
                  alt="Sensory Activities"
                />
              </div>
            </div>
          </div>

          <div className="entegratedLearningSection">
            <div className="row">
              <div className="col-lg-5 d-flex align-items-center">
                <div className="entegratedPara1">
                  <h2>
                    The Bear Hunt Song. <br /> A classic example of this
                    approach.
                  </h2>
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-center">
                <div className="entegratedLine">
                  <Image src={VerticalLine} alt="After-School Care" />
                </div>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <div className="entegratedPara2">
                  <h5>What it does</h5>
                  <h4>
                    <ul>
                      <li>Encourages imaginative play and creativity</li>
                      <li>Gets them moving through dance and rhythm</li>
                      <li>Develops auditory memory skills </li>
                      <li>Creates phonetic awareness</li>
                      <li>Teaches prepositions</li>
                      <li>Teaches directions and basic geography</li>
                      <li>Teaches sequencing and order</li>
                      <li>Teaches them to face their fears</li>
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="bearImg">
            {/* <Image src={BearSong} alt="" /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JZDMwDCJAcE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>

          <div className="reggioMethodHead">
            <h3>
              The Reggio Emilia method, with its emphasis on self-learning and
              self-discovery, is at the very foundation of our curriculum.
            </h3>
          </div>

          <div className="infoSection">
            <div className="infoSectionInner">
              <div className="reggioPara2">
                <p>
                  Children express themselves in a hundred different languages.
                  Painting, drawing, sculpting, dancing, singing, pretend play.
                  Each of these languages is equally important. Just as play is
                  in the learning process.
                </p>
                <p>
                  We give a lot of importance to observation and documentation.
                  And focus on building responsibility and ownership.
                </p>
                <p>
                  It starts with our Integrated Settling Plan, developed to help
                  pre-schoolers adjust to the new environment and overcome
                  separation anxiety. From their first day, Little Aryans are
                  taught differently. Science is taught through music.
                  Mathematics with history. English with art and craft.
                </p>
              </div>
            </div>
          </div>

          <div className="reggioMethodHead">
            <h3>
              A holistic approach without subject barriers.Exactly what children
              need today.
            </h3>
          </div>
          {/* ============ End Integrated Learning =============== */}

          {/* == */}
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default Pedagogy;
