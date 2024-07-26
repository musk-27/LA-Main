import React from "react";
import Link from "next/link";
import Image from "next/image";
import ManthanLogo from "../public/Images/Manthan/ManthanLogo.png";

const ManthanButton = () => {
  return (
    <div className="manthanButton">
      <Link href="/Manthan" target="_blank">
        <Image
          className="manthanLogo"
          src={ManthanLogo}
          alt="Manthan Logo"
          height={100}
          width={100}
        />
      </Link>
    </div>
  );
};

export default ManthanButton;
