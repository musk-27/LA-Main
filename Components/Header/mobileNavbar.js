import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "./logo";
import PiSquareFour from "../../public/Images/SVG/PiSquareFour.svg";
import LittleAryansLogo from "../../public/Images/little-aryans-logo.png";
// JSON
import MenuItems from "../../Data/MenuItems";
import EnrolButton from "../EnrolButton";

const MobileNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleDropdownClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <div>
      <div className="mobileNavbar">
        <Navbar expand="lg" className="pb-md-3">
          {/* Enrol Button */}
          <EnrolButton />

          <Container>
            <Navbar.Brand as="span">
              <Logo />
            </Navbar.Brand>
            <button
              className="navbar-toggler d-flex justify-content-center align-items-center mt-3"
              aria-controls="offcanvasNavbar"
              onClick={() => setShowOffcanvas((prev) => !prev)}
            >
              {/* Replace with your custom toggler image component */}
              <Image src={PiSquareFour} alt="little-aryans-menu-button" />
            </button>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  {/* <h3>Little Aryans</h3> */}
                  <Image src={LittleAryansLogo} alt="little-aryans-logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 ">
                  {MenuItems.map((menuItems, index) => {
                    return (
                      <NavDropdown
                        key={index}
                        className={menuItems.navClass}
                        title={menuItems.title}
                        id="basic-nav-dropdown"
                      >
                        <div className="dropdownLinks">
                          {menuItems.subItems?.map((navItem, index) => {
                            return (
                              <NavDropdown.Item
                                as="span"
                                key={index}
                                className={menuItems.navItemClass}
                                onClick={handleDropdownClick}
                              >
                                <Link href={navItem.path}>{navItem.title}</Link>
                              </NavDropdown.Item>
                            );
                          })}
                        </div>
                      </NavDropdown>
                    );
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default MobileNavbar;
