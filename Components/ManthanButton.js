import React from "react";
import Link from "next/link";
import Image from "next/image";
import ManthanLogo from "../public/Images/Manthan/ManthanLogo.png";

const ManthanButton = () => {
  return (
    // <button className="manthan-button">
    // <button className="descBtn">
    //   Manthan 2024 Coming Soon
    // </button>

    // <Link href="/Manthan" target="_blank">
    //   <button className="manthan-button">
    //     Manthan 2024 Coming Soon
    //   </button>
    // </Link>

    // <div>
    //   <div className="manthanButton">
    //     <Image src={ManthanLogo} alt="" height={100} width={100} />
    //     {/* <p>Manthan</p> */}
    //     <Link
    //       target="blank"
    //       href="/manthan"
    //       // href="/Admission"
    //     >
    //       {/* <div className="newEnrolBg"></div> */}
    //       <div className="newEnrolText">
    //         {/* <h4>
    //           ENROL <br /> NOW
    //         </h4> */}
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <div className="manthanButton">
      <Link href="/Manthan" target="_blank">
        <Image src={ManthanLogo} alt="Manthan Logo" height={100} width={100} />
      </Link>
    </div>
  );
};

export default ManthanButton;
