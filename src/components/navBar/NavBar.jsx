import React, { useState, useEffect } from "react";
import {
  Header,
  NavbarContainer,
  MobileMenuIcon,
  LeftWrapper,
  NavbarContent,
} from "./NavBar.styles";
import LeftComponents from "./LeftComponents";
import RightActions from "./RightActions";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * Navbar component that includes the logo, dropdowns, and right actions.
 * It supports mobile navigation and hides itself when scrolling down.
 *
 *
 * @returns {JSX.Element} The navigation bar.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Header isHidden={isHidden}>
      <NavbarContainer>
        <LeftWrapper>
          <Logo />
        </LeftWrapper>

        <MobileMenuIcon onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>

        <NavbarContent isOpen={menuOpen}>
          <LeftComponents />
          <RightActions />
        </NavbarContent>
      </NavbarContainer>
    </Header>
  );
};

export default Navbar;
