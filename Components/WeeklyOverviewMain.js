import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";
import Arrow from "../public/Images/Arrow-right.png";
import RedHeader from "../public/Images/SVG/redHeader.svg";

const WeeklyOverviewMain = () => {
  return (
    <div>
      {/* ================= Weekly overview =============== */}
      <Heading headTitle="Weekly Overview " headBottomImg={RedHeader} />

      <div className="weeklyOverview">
        <div className="row">
          <div className="col-md-4">
            <div className="sectionHead">
              <h3>Little Aryans Nandivali</h3>
              <Link href="/WeeklyOverview">
                <div className="knowMoreBtn">
                  <h6>See Overview</h6>
                  <div className="arrowImg">
                    <Image src={Arrow} alt="Learning through Play" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sectionHead">
              <h3>Little Aryans Chakkinaka</h3>
              {/* <div className="centerHeadImg">
          <Image src={NandivaliBottom} alt="" />
        </div> */}
              <Link href="/WeeklyOverview">
                <div className="knowMoreBtn">
                  <h6>See Overview</h6>
                  <div className="arrowImg">
                    <Image src={Arrow} alt="Preschool Enrollment" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sectionHead">
              <h3>Little Aryans Ambernath</h3>
              {/* <div className="centerHeadImg">
          <Image src={NandivaliBottom} alt="" />
        </div> */}
              <Link href="/WeeklyOverview">
                <div className="knowMoreBtn">
                  <h6>See Overview</h6>
                  <div className="arrowImg">
                    <Image src={Arrow} alt="Parent-Teacher Communication" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyOverviewMain;
