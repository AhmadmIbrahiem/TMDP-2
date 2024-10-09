// src/moviesPage/components/navBar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  NavbarContainer,
  MobileMenuIcon,
  LeftWrapper,
  NavbarContent,
  LogoImage,
} from "./NavBar.styles";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/Logo.svg";
import LeftComponents from "./leftComponents/LeftComponents";
import RightActions from "./rightComponents/RightActions";
/**
 * Logo component that displays the site's logo and navigates to the Home page.
 *
 * @returns {JSX.Element} The logo element.
 */
const Logo = () => {
  return (
    <Link to="/Home">
      <LogoImage src={logo} alt="Logo" />
    </Link>
  );
};

/**
 * Navbar component that includes the logo, dropdowns, and right actions.
 * It supports mobile navigation and hides itself when scrolling down.
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
