import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import LeftComponents from "./LeftComponents";
import RightActions from "./RightActions";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * Styled header component with dynamic visibility based on scroll.
 */
const Header = styled.header`
  align-items: center;
  background-color: var(--bg-color);
  border-bottom: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: fixed;
  top: ${({ isHidden }) => (isHidden ? "-80px" : "0")};
  transition: top 0.3s;
  width: 100%;
  z-index: 100;
`;

/**
 * Navbar container that holds the left and right sections of the navigation bar.
 */
const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
`;

/**
 * Icon for toggling the mobile menu.
 */
const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 770px) {
    color: var(--text-color);
    cursor: pointer;
    display: block;
    font-size: var(--hamburger-icon);
    margin-right: 10px;
    margin-top: -5px;
    position: absolute;
    right: 40px;
    top: 15px;
  }
`;

/**
 * Wrapper for the left side of the navbar.
 */
const LeftWrapper = styled.div`
  align-items: center;
  display: flex;
`;

/**
 * Main navbar content, dynamically shown/hidden for mobile screens.
 */
const NavbarContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 770px) {
    background-color: #001f3f;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    left: 0;
    padding: 20px;
    position: absolute;
    top: 60px;
    width: 100%;
    z-index: 1000;
  }
`;

/**
 * Navbar component that includes the logo, dropdowns, and right actions.
 * It supports mobile navigation and hides itself when scrolling down.
 *
 * @component
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
