import Heading from "@/Components/Heading";
import Image from "next/image";
// Images
import HeadUnderline from "../public/Images/head-bottom.png";
import YellowHeader from "../public/Images/SVG/yellowHeader.svg";
import busSky from "../public/Images/busSky.png";
import buswheel from "../public/Images/buswheel.png";
import ChakraLogo from "../public/Images/chakraview-logo.png";

const Transportation = () => {
  return (
    <div className="transportationPage">
      {/* Heading */}
      <Heading headTitle="Transportation" headBottomImg={YellowHeader} />

      <div className="transportationDesc">
        <h3>
          Every Little Aryan gets to commute to school with a safe, comfortable
          and reliable bus service. Parents can keep tabs on them with a bus
          tracking app.
        </h3>
      </div>

      {/* Transpost Details */}
      <div className="transportDetailsSection">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center flex-column">
            <div className="transportImgMain">
              <div className="transportDetailsImg">
                <Image className="busSkyImg" src={busSky} alt="" />
              </div>
              <div className="busWheels d-flex">
                <div className="wheelOne">
                  <Image src={buswheel} alt="" />
                </div>
                <div className="wheelTwo">
                  <Image src={buswheel} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tansportDetailText">
              <h4>
                For us, safety and punctuality are paramount. In addition to
                that, we also provide
              </h4>
              <ul>
                <li>
                  <h4> well-maintained buses </h4>
                </li>
                <li>
                  <h4> a professionally-trained driver </h4>
                </li>
                <li>
                  <h4> a conductor and lady attendant </h4>
                </li>
                <li>
                  <h4> mobile phone for communication </h4>
                </li>
                <li>
                  <h4>personalized pick-up points </h4>
                </li>
                <li>
                  <h4> limited seating (as per RTO norms)</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="chakraLogo">
          <Image src={ChakraLogo} />
        </div>
      </div>
      {/* -- End --  */}
    </div>
  );
};

export default Transportation;
