import LogoImg from "../../public/Images/little-aryans-logo.png";
import Image from "next/image";
import Link from "next/link";

const logo = () => {
  return (
    <>
      <div className="navbarLogoHead">
        <div className="navbarLogoImg">
          <Link href="/">
            <div className="logoPage">
              <Image
                style={{ width: "100%", height: "100%" }}
                src={LogoImg}
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default logo;
