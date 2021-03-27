import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
} from "./Navbar.elements";
import { FaBars, FaTimes, FiInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "./logo1.png";
import { FaInstagram } from "react-icons/fa";
import "../Services/Services.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "#1C1C1C" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img className="img" src={Logo} />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Início</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/services">Serviços</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/products">Quem somos</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>Contate-nos</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button fontBig primary>
                    Contate-nos
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
            <FaInstagram className="iconMenu" />
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
