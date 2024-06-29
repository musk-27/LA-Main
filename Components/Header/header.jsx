import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import EnrolButton from "../EnrolButton";
// import { PiSquaresFour } from "react-icons/pi";
// Images
import Logo from "./logo";
// JSON
import MenuItems from "../../Data/MenuItems";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleImageClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="desktopnavbar">
        {/* Enrol Button */}
        <EnrolButton />

        <div className="navbarResClass">
          {/* Logo */}
          <Logo />

          {/* Navbar  */}
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {/* =============== Nav Items ================= */}
                  {MenuItems.map((menuItem, index) => {
                    return (
                      <NavDropdown
                        // as={Link}
                        // href={menuItem.linkto}
                        key={index}
                        className={menuItem.navClass}
                        title={menuItem.title}
                        id="basic-nav-dropdown"
                        // show={menuOpen}
                        // onMouseEnter={() => setMenuOpen(true)}
                        // onMouseLeave={() => setMenuOpen(false)}
                      >
                        <div className="row">
                          <div className="col-4 d-flex justify-content-center align-items-center">
                            <Link href={menuItem.leftImgLink}>
                              <div
                                className="navbarDropdownLeft"
                                onClick={handleImageClick}
                              >
                                <div className="leftImg">
                                  <Image src={menuItem.leftImage} alt="Holistic Development" />
                                </div>
                                <p>{menuItem.leftText}</p>
                              </div>
                            </Link>
                          </div>
                          <div className="col-4 d-flex justify-content-center align-items-center">
                            <div className="dropdownLinks">
                              {menuItem.subItems?.map((navItem, subIndex) => {
                                return (
                                  <NavDropdown.Item
                                    href={navItem.path}
                                    key={subIndex}
                                    className={menuItem.navItemClass}
                                  >
                                    {navItem.title}
                                  </NavDropdown.Item>
                                );
                              })}
                            </div>
                          </div>
                          <div className="col-4 d-flex justify-content-center align-items-center">
                            <Link href={menuItem.rightImgLink}>
                              <div className="navbarDropdownRight">
                                <div
                                  className="rightImg"
                                  onClick={handleImageClick}
                                >
                                  <Image src={menuItem.rightImg} alt="Pre-K Education" />
                                </div>
                                <p>{menuItem.rightText}</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </NavDropdown>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;



// components/Header.js
// import Link from "next/link";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Image from "next/image";
// import EnrolButton from "../EnrolButton";
// import Logo from "./logo";
// import MenuItems from "../../Data/MenuItems";
// import React, { useState } from "react";
// import SEO from "../SEO"; // Import the SEO component

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleImageClick = () => {
//     setMenuOpen(false);
//   };

//   const seo = {
//     title: "Arya Sports Academy – Welcome To Your Classroom",
//     description: "Arya Sports Academy is your classroom outside your classroom.",
//   };

//   return (
//     <>
//       <SEO title={seo.title} description={seo.description} />
//       <div className="desktopnavbar">
//         {/* Enrol Button */}
//         <EnrolButton />

//         <div className="navbarResClass">
//           {/* Logo */}
//           <Logo />

//           {/* Navbar */}
//           <Navbar collapseOnSelect expand="lg">
//             <Container>
//               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//               <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="me-auto">
//                   {MenuItems.map((menuItem, index) => (
//                     <NavDropdown
//                       key={index}
//                       className={menuItem.navClass}
//                       title={menuItem.title}
//                       id="basic-nav-dropdown"
//                     >
//                       <div className="row">
//                         <div className="col-4 d-flex justify-content-center align-items-center">
//                           <Link href={menuItem.leftImgLink}>
//                             <div className="navbarDropdownLeft" onClick={handleImageClick}>
//                               <div className="leftImg">
//                                 <Image src={menuItem.leftImage} alt="Holistic Development" />
//                               </div>
//                               <p>{menuItem.leftText}</p>
//                             </div>
//                           </Link>
//                         </div>
//                         <div className="col-4 d-flex justify-content-center align-items-center">
//                           <div className="dropdownLinks">
//                             {menuItem.subItems?.map((navItem, subIndex) => (
//                               <NavDropdown.Item
//                                 href={navItem.path}
//                                 key={subIndex}
//                                 className={menuItem.navItemClass}
//                               >
//                                 {navItem.title}
//                               </NavDropdown.Item>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="col-4 d-flex justify-content-center align-items-center">
//                           <Link href={menuItem.rightImgLink}>
//                             <div className="navbarDropdownRight">
//                               <div className="rightImg" onClick={handleImageClick}>
//                                 <Image src={menuItem.rightImg} alt="Pre-K Education" />
//                               </div>
//                               <p>{menuItem.rightText}</p>
//                             </div>
//                           </Link>
//                         </div>
//                       </div>
//                     </NavDropdown>
//                   ))}
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
