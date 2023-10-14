import Image from "next/image";
import Heading from "@/Components/Heading";
import { motion } from "framer-motion";
// Images
import HeadUnderline from "../public/Images/blue-head-underline.png";
import HomeLearningImg from "../public/Images//GIF/home-learning-kit.gif";
import DarkBlueScribble from "../public/Images/DarkBlueScribble.png";
import BorderLine from "../public/Images/footer-border.png";
import ManipulativeImg1 from "../public/Images/manipulativeImg-1.png";
import ManipulativeImg2 from "../public/Images/manipulativeImg-2.png";
import Dice1 from "../public/Images/dice-1.png";
import Dice2 from "../public/Images/dice-2.png";
import CardImg from "../public/Images/flashCards.png";
import Crayon from "../public/Images/crayon.png";
import TiffinImg from "../public/Images/tiffinImg.png";
import PurpleHeader from "../public/Images/SVG/purpleHeader.svg";

const HomeLearningKit = () => {
  return (
    <div>
      <div className="homeLearningKitPage">
        {/* Heading */}
        <Heading headTitle="Home Learning Kit" headBottomImg={PurpleHeader} />

        {/* Home Learning Tagline */}
        <div className="homeLearningTagline infoSection">
          <div className="homeLearTaglineInner">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="homeLearnTaglineText ">
                  <h2>We believe that learning should be made easy. </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="homeLearnTaglineImg">
                  <Image src={HomeLearningImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Home Learning Tagline */}

        {/* Home kit description */}
        <div className="homeKitDesc">
          <h3>
            We provide a special learning kit put together to contain all
            stationary, manipulatives, art material and worksheets to avoid
            parents that last minute trip to the stationary shop.{" "}
          </h3>
        </div>

        <div className="Bottomunderline">
          <Image src={DarkBlueScribble} alt="" />
        </div>
        {/* End Home Kit Description */}

        {/* Kit Contains Head */}
        <div className="kitContainesHead">
          <div className="kitContainesHeadInner">
            <h2>THE KIT CONTAINS</h2>
          </div>
        </div>
        {/* End Kit Contains Head */}

        {/* Stationanry Material */}
        <div className="stationaryMaterialSection">
          <div className="stationaryMaterialHead">
            <h3>STATIONERY MATERIAL</h3>
          </div>
          <div className="bottomBorderLine">
            <Image src={BorderLine} alt="" />
          </div>
          <div className="stationaryMaterialText">
            <div className="stationaryMaterialList">
              <p>Crayons</p>
              <p>Sketch pens</p>
              <p>Mount board paper</p>
              <p>Colourful paper</p>
              <p>Crepe paper</p>
              <p>A3 drawing paper</p>
            </div>
            <div className="stationaryMaterialList">
              {/* <p>A3 drawing paper</p> */}
              <p>Chart paper</p>
              <p>Black marker </p>
              <p>Googly eyes</p>
              <p>Paint brush </p>
              <p>Gelatin paper</p>
            </div>
            <div className="stationaryMaterialImg">
              {/* <Image src={StationaryMaterialImg} alt="" /> */}
              <div className="crayonAnimate">
                <motion.div
                  animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <div className="crayonImg">
                    <Image src={Crayon} alt="" />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="stationaryMaterialVertical">
              <h5> These materials</h5>
            </div>
            <div className="stationaryMaterialList stationaryMaterialList2">
              <ul>
                <li>
                  {" "}
                  <p> Boost creativity </p>
                </li>
                <li>
                  {" "}
                  <p> Enhance fine motor skills </p>
                </li>
                <li>
                  {" "}
                  <p> Generate interest in art </p>
                </li>
                <li>
                  {" "}
                  <p> Enhance communication as well as expression </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Stationary Materials */}

        {/* Manipulatives */}
        <div className="stationaryMaterialSection">
          <div className="stationaryMaterialHead">
            <h3>MANIPULATIVES</h3>
          </div>
          <div className="bottomBorderLine">
            <Image src={BorderLine} alt="" />
          </div>
          <div className="stationaryMaterialText">
            <div className="stationaryMaterialList">
              <p>Cotton roll</p>
              <p>Pipe cleaners</p>
              <p> Wool </p>
              <p> Pom-poms</p>
              <p>Sponge </p>
              <p>Tooth pick</p>
            </div>
            <div className="stationaryMaterialList">
              <p>Icecream stick</p>
              <p>Pebbles</p>
              <p> Ear buds </p>
            </div>
            <div className="stationaryMaterialImg">
              <div className="matericalImgInner">
                {/* <Image src={ManipulativeImg1} alt="" /> */}
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <div className="crayonImg">
                    <Image src={ManipulativeImg1} alt="" />
                  </div>
                </motion.div>
                {/*<Image src={ManipulativeImg2} alt="" />*/}
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <div className="crayonImg">
                    <Image src={ManipulativeImg2} alt="" />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="stationaryMaterialVertical">
              <h5> These materials </h5>
            </div>
            <div className="stationaryMaterialList stationaryMaterialList2">
              <ul>
                <li>
                  <p>
                    Help in building creativity, problem solving skills and
                    decision-making{" "}
                  </p>
                </li>
                <li>
                  <p> Early construction skills. </p>
                </li>
                <li>
                  <p> Visual discrimination </p>
                </li>
                <li>
                  <p>2 D & 3 D space </p>
                </li>
                <li>
                  <p> Spatial skills and symmetry </p>
                </li>
                <li>
                  <p> Recognition of colours and shapes </p>
                </li>
                <li>
                  <p> Sorting and patterning </p>
                </li>
                <li>
                  <p> Early arithmetic skills</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Manipulatives */}

        {/* Additional Material */}
        <div className="stationaryMaterialSection">
          <div className="stationaryMaterialHead">
            <h3>ADDITIONAL ITEMS</h3>
          </div>
          <div className="bottomBorderLine">
            <Image src={BorderLine} alt="" />
          </div>
          <div className="stationaryMaterialText">
            <div className="stationaryMaterialList">
              <p>Such as Dice</p>
            </div>
            <div className="stationaryMaterialImg">
              <div className="matericalImgInner">
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image src={Dice1} alt="" />
                </motion.div>

                <Image src={Dice2} alt="" />
              </div>
            </div>
            <div className="stationaryMaterialVertical">
              <h5> These materials</h5>
            </div>
            <div className="stationaryMaterialList stationaryMaterialList2">
              <ul>
                <li>
                  <p>Early arithmetic skills</p>
                </li>
                <li>
                  <p> Addition, subtraction and simple equations </p>
                </li>
                <li>
                  <p> Learn number value and number names</p>
                </li>
                <li>
                  <p>Learn greater than / less than </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Additional Materical */}

        {/* Worksheets and Flash cards */}
        <div className="stationaryMaterialSection">
          <div className="stationaryMaterialHead">
            <h3>ADDITIONAL ITEMS</h3>
          </div>
          <div className="bottomBorderLine">
            <Image src={BorderLine} alt="" />
          </div>
          <div className="stationaryMaterialText">
            <div className="stationaryMaterialList emptyMaterialList"></div>
            <div className="stationaryMaterialImg">
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Image src={CardImg} alt="" />
              </motion.div>
            </div>
            <div className="stationaryMaterialVertical">
              <h5> These materials </h5>
            </div>
            <div className="stationaryMaterialList">
              <ul>
                <li>
                  <p>Practice </p>
                </li>
                <li>
                  <p> Concept clarity</p>
                </li>
                <li>
                  <p> Keeping children engaged</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Worksheets and Flash cards  */}

        {/* Other Essentials */}
        <div className="stationaryMaterialSection">
          <div className="stationaryMaterialHead">
            <h3>OTHER ESSENTIALS</h3>
          </div>
          <div className="bottomBorderLine">
            <Image src={BorderLine} alt="" />
          </div>
          <div className="stationaryMaterialText">
            <div className="stationaryMaterialList otherEssentialsList">
              <h4>
                The kit will also contain other essentials such as tiffin, water
                bottle and uniform.{" "}
              </h4>
            </div>
            <div className="stationaryMaterialImg">
              {/* <Image src={TiffinImg} alt="" /> */}
              <div className="TiffinBox">
                <motion.div
                  animate={{ x: [0, 40, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image src={TiffinImg} alt="" />
                </motion.div>
              </div>
            </div>
            <div className="stationaryMaterialList emptyMaterialList"></div>
          </div>
        </div>

        <div className="Bottomunderline">
          <Image src={DarkBlueScribble} alt="" />
        </div>
        {/* End other essentials */}

        {/* Home Learning Kit Video  */}

        <div className="homeLearningKitVideo">
          <div className="kitVideoHead">
            <h2>LITTLE ARYANS HOME LEARNING KIT</h2>
          </div>
          <div className="kitVideoFrame">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/raJ4StQ_gQ0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* End Home learning kit video  */}
      </div>
    </div>
  );
};

export default HomeLearningKit;
