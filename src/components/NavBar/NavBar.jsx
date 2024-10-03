import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import LeftComponents from "./LeftComponents";
import RightActions from "./RightActions";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

// Styled header component, with hidden state based on scroll
const Header = styled.header`
  align-items: center;
  background-color: var(--bg-color);
  border-bottom: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: fixed;
  top: ${({ isHidden }) =>
    isHidden ? "-80px" : "0"}; // Hide header when scrolling down
  transition: top 0.3s;
  width: 100%;
  z-index: 100;
`;

// Container for the navbar content
const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
`;

// Icon for the mobile menu, visible only on small screens
const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 770px) {
    color: var(--text-color);
    cursor: pointer;
    display: block; // Visible on screens less than 770px
    font-size: var(--hamburger-icon);
    margin-right: 10px;
    margin-top: -5px;
    position: absolute;
    right: 40px;
    top: 15px;
  }
`;

// Wrapper for the left side of the navbar (logo, links, etc.)
const LeftWrapper = styled.div`
  align-items: center;
  display: flex;
`;

// Navbar content container, with mobile responsiveness
const NavbarContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 770px) {
    background-color: #001f3f;
    display: ${({ isOpen }) =>
      isOpen ? "block" : "none"}; // Show/hide mobile menu
    left: 0;
    padding: 20px;
    position: absolute;
    top: 60px;
    width: 100%;
    z-index: 1000;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isHidden, setIsHidden] = useState(false); // State to hide/show navbar on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Toggle the mobile menu (open/close)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll to hide/show navbar based on scroll direction
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(true); // Hide navbar when scrolling down
    } else {
      setIsHidden(false); // Show navbar when scrolling up
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  // Effect to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener on unmount
    };
  }, [lastScrollY]);

  return (
    <Header isHidden={isHidden}>
      {" "}
      {/* Pass isHidden prop to control navbar visibility */}
      <NavbarContainer>
        <LeftWrapper>
          <Logo /> {/* Display logo */}
        </LeftWrapper>

        <MobileMenuIcon onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}{" "}
          {/* Toggle between open/close icons */}
        </MobileMenuIcon>

        <NavbarContent isOpen={menuOpen}>
          {" "}
          {/* Conditionally render mobile menu */}
          <LeftComponents /> {/* Left-side navbar content */}
          <RightActions /> {/* Right-side navbar actions */}
        </NavbarContent>
      </NavbarContainer>
    </Header>
  );
};

export default Navbar;
