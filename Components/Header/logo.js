import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/Images/little-aryans-logo.png";

const logo = () => {
  return (
    <>
      <div className="navbarLogoHead">
        <div className="navbarLogoImg">
          <Link href="/" aria-label="Little Aryans Logo">
            <div className="logoPage">
              <Image
                style={{ width: "100%", height: "100%" }}
                src={LogoImg}
                alt="little-aryans-logo"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default logo;
