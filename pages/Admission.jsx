import Image from "next/image";
import React from "react";
import AdsmissionOpen from "../public/Images/AdsmissionOpen.png";

const Admission = () => {
  return (
    <div>
      <div className="AdmissionImg">
        <Image src={AdsmissionOpen} />
      </div>
    </div>
  );
};

export default Admission;
