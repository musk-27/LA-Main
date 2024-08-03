import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import EnrolButton from "../EnrolButton";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import MenuItems from "../../Data/MenuItems";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import WhatsappInterakt from "../WhatsappInterakt";
import ManthanButton from "../ManthanButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleImageClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="desktopnavbar">
        {/* Interakt Integration */}
        <WhatsappInterakt />
        <div
          id="interakt-widget"
          style={{ position: "absolute", top: 0, right: 0, zIndex: 9999 }}
        ></div>

        <ManthanButton />
        <EnrolButton />

        <div className="navbarResClass">
          {/* Logo */}
          <Logo />

          {/* Navbar */}
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {/* =============== Nav Items ================= */}
                  {MenuItems.map((menuItem, index) => (
                    <NavDropdown
                      key={index}
                      className={menuItem.navClass}
                      title={menuItem.title}
                      id="basic-nav-dropdown"
                    >
                      <div className="row">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                          <Link href={menuItem.leftImgLink}>
                            <div
                              className="navbarDropdownLeft"
                              onClick={handleImageClick}
                            >
                              <div className="leftImg">
                                <Image
                                  src={menuItem.leftImage}
                                  alt="Holistic Development"
                                />
                              </div>
                              <p>{menuItem.leftText}</p>
                            </div>
                          </Link>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                          <div className="dropdownLinks">
                            {menuItem.subItems?.map((navItem, subIndex) => (
                              <NavDropdown.Item
                                href={navItem.path}
                                key={subIndex}
                                className={menuItem.navItemClass}
                              >
                                {navItem.title}
                              </NavDropdown.Item>
                            ))}
                          </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                          <Link href={menuItem.rightImgLink}>
                            <div className="navbarDropdownRight">
                              <div
                                className="rightImg"
                                onClick={handleImageClick}
                              >
                                <Image
                                  src={menuItem.rightImg}
                                  alt="Pre-K Education"
                                />
                              </div>
                              <p>{menuItem.rightText}</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </NavDropdown>
                  ))}
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
