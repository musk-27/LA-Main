// import Link from "next/link";
// import Image from "next/image";
// import { useEffect } from "react";
// import {
//   RiYoutubeFill,
//   RiTwitterFill,
//   RiFacebookFill,
//   RiWhatsappFill,
//   RiInstagramLine,
//   RiLinkedinBoxFill,
// } from "react-icons/ri";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import MyLee from "../../public/Images/MyLee.png";
// import IsoImg from "../../public/Images/valid-iso.png";
// import AppStore from "../../public/Images/AppStore.png";
// import GooglePlay from "../../public/Images/googlePlay.png";
// import Logo from "../../public/Images/little-aryans-logo.png";
// import FooterBorder from "../../public/Images/footer-border.png";

// const Footer = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);
//   return (
//     <div>
//       <div className="footerComp">
//         <div className="footerSection">
//           <div className="footerTopBorder">
//             <Image src={FooterBorder} alt="School Readiness Skills" />
//           </div>

//           {/* --  Footer Main -- */}
//           <div className="footerMain">
//             <div className="row">
//               {/*  Contact Links  */}
//               <div className="col-md-4">
//                 <div className="footerContact">
//                   <div className="contactHead">
//                     <h5>Contact Us</h5>
//                   </div>
//                   <div className="contactLinks">
//                     <Link href="/OurCenters">
//                       <p>Our Centers</p>
//                     </Link>
//                     <Link href="/OurBlogs">
//                       <p>Our Blogs</p>
//                     </Link>
//                     <Link href="/BookTrial">
//                       <p>Book an Online Trial Class</p>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               {/* Logo  */}
//               <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
//                 <div className="footerLogo">
//                   <Image src={Logo} alt="Educational Games" />
//                 </div>
//                 <div className="logoTagline">
//                   <h6>Happy Child, Happy Nation </h6>
//                 </div>
//               </div>
//               {/* Social Links */}
//               <div className="col-md-4 d-flex align-items-center align-items-md-end  flex-column">
//                 <div className="footerSocialLinks">
//                   <div className="socialLinksHead">
//                     <h5>Stay Connected</h5>
//                   </div>
//                   <div className="socialLinksIcons d-flex align-items-center align-items-md-end justify-content-center justify-content-md-end">
//                     <a
//                       rel="noreferrer"
//                       target="_blank"
//                       href="https://www.facebook.com/littlearyansjbn/"
//                       aria-label="Little Aryans Facebook Page"
//                     >
//                       <div className="socialLinkIcon">
//                         <RiFacebookFill />
//                       </div>
//                     </a>
//                     <a
//                       target="_blank"
//                       rel="noreferrer"
//                       href="https://www.instagram.com/little_aryans/"
//                       aria-label="Little Aryans Instagram Page"
//                     >
//                       <div className="socialLinkIcon">
//                         <RiInstagramLine />
//                       </div>
//                     </a>
//                     <a
//                       target="_blank"
//                       rel="noreferrer"
//                       href="https://www.youtube.com/littlearyans"
//                       aria-label="Little Aryans Youtube Channel"
//                     >
//                       <div className="socialLinkIcon">
//                         <RiYoutubeFill />
//                       </div>
//                     </a>
//                     <a
//                       rel="noreferrer"
//                       target="_blank"
//                       href="https://twitter.com/LittleAryans"
//                       aria-label="Little Aryans Twitter Page"
//                     >
//                       <div className="socialLinkIcon">
//                         <RiTwitterFill />
//                       </div>
//                     </a>
//                     <a
//                       rel="noreferrer"
//                       target="_blank"
//                       href="https://www.linkedin.com/company/littlearyans/"
//                       aria-label="Little Aryans LinkedIn Page"
//                     >
//                       <div className="socialLinkIcon">
//                         <RiLinkedinBoxFill />
//                       </div>
//                     </a>
//                     <a
//                       target="_blank"
//                       rel="noreferrer"
//                       href="https://wa.me/+917498139829/"
//                       aria-label="Little Aryans Whatsapp Number"
//                     >
//                       <div className="socialLinkIcon">
//                         <RiWhatsappFill />
//                       </div>
//                     </a>
//                   </div>
//                   <div className="socialPressRoom">
//                     <div className="pressRoomHead">
//                       <Link href="/PressRoom">
//                         <p>Press Room</p>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* footer main end */}
//           <div className="footerBottom">
//             <div className="row d-flex align-items-end">
//               <div className="col-md-5 d-flex align-items-end justify-content-center justify-content-md-start">
//                 <div className="footerRights">
//                   <p>All Rights Reserved - Little Aryans Pvt. Ltd</p>
//                 </div>
//               </div>
//               <div className="col-md-2 d-flex justify-content-center ">
//                 <div className="IsoImg">
//                   {/* <Image src={IsoImg} alt="" /> */}
//                 </div>
//               </div>
//               <div className="col-md-5 d-flex align-items-end justify-content-md-end justify-content-center">
//                 <div className="footerTermsLink">
//                   <Link href="/Policies">
//                     <p>Terms and Conditions & Privacy Policy</p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react"; // Add this import
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import {
  RiYoutubeFill,
  RiTwitterFill,
  RiFacebookFill,
  RiWhatsappFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../../public/Images/little-aryans-logo.png";
import FooterBorder from "../../public/Images/footer-border.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="footerComp">
        <div className="footerSection">
          <div className="footerTopBorder">
            <Image src={FooterBorder} alt="Footer Border" />
          </div>

          {/* --  Footer Main -- */}
          <div className="footerMain">
            <div className="row">
              {/*  Contact Links  */}
              <div className="col-md-4">
                <div className="footerContact">
                  <div className="contactHead">
                    <h5>Contact Us</h5>
                  </div>
                  <div className="contactLinks">
                    <Link href="/OurCenters">
                      <p>Our Centers</p>
                    </Link>
                    <Link href="/OurBlogs">
                      <p>Our Blogs</p>
                    </Link>
                    <Link href="/BookTrial">
                      <p>Book an Online Trial Class</p>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Logo  */}
              <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                <div className="footerLogo">
                  <Image src={Logo} alt="Logo" />
                </div>
                <div className="logoTagline">
                  <h6>Happy Child, Happy Nation</h6>
                </div>
              </div>
              {/* Social Links */}
              <div className="col-md-4 d-flex align-items-center align-items-md-end flex-column">
                <div className="footerSocialLinks">
                  <div className="socialLinksHead">
                    <h5>Stay Connected</h5>
                  </div>
                  <div className="socialLinksIcons d-flex align-items-center align-items-md-end justify-content-center justify-content-md-end">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/littlearyansjbn/"
                      aria-label="Little Aryans Facebook Page"
                    >
                      <div className="socialLinkIcon">
                        <RiFacebookFill />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/little_aryans/"
                      aria-label="Little Aryans Instagram Page"
                    >
                      <div className="socialLinkIcon">
                        <RiInstagramLine />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/littlearyans"
                      aria-label="Little Aryans Youtube Channel"
                    >
                      <div className="socialLinkIcon">
                        <RiYoutubeFill />
                      </div>
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/LittleAryans"
                      aria-label="Little Aryans Twitter Page"
                    >
                      <div className="socialLinkIcon">
                        <RiTwitterFill />
                      </div>
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/company/littlearyans/"
                      aria-label="Little Aryans LinkedIn Page"
                    >
                      <div className="socialLinkIcon">
                        <RiLinkedinBoxFill />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://wa.me/+917498139829/"
                      aria-label="Little Aryans Whatsapp Number"
                    >
                      <div className="socialLinkIcon">
                        <RiWhatsappFill />
                      </div>
                    </a>
                  </div>
                  <div className="socialPressRoom">
                    <div className="pressRoomHead">
                      <Link href="/PressRoom">
                        <p>Press Room</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer main end */}
          <div className="footerBottom">
            <div className="row d-flex align-items-end">
              <div className="col-md-5 d-flex align-items-end justify-content-center justify-content-md-start">
                <div className="footerRights">
                  <p>All Rights Reserved - Little Aryans Pvt. Ltd</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div className="IsoImg">
                  {/* <Image src={IsoImg} alt="ISO Image" /> */}
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-end justify-content-md-end justify-content-center">
                <div className="footerTermsLink">
                  <Link href="/Policies">
                    <p>Terms and Conditions & Privacy Policy</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
