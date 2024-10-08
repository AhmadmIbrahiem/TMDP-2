import styled from "@emotion/styled";

/**
 * Styled image component for the logo.
 */
export const LogoImage = styled.img`
  height: 2rem;
  width: 7rem;
`;

/**
 * Styled header component with dynamic visibility based on scroll.
 */
export const Header = styled.header`
  align-items: center;
  background-color: var(--bg-color);
  border-bottom: 0.125rem solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
  position: fixed;
  top: ${({ isHidden }) => (isHidden ? "-80px" : "0")};
  transition: top 0.3s;
  width: 100%;
  z-index: 100;
`;

/**
 * Navbar container that holds the left and right sections of the navigation bar.
 */
export const NavbarContainer = styled.div`
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
export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 770px) {
    color: var(--text-color);
    cursor: pointer;
    display: block;
    font-size: var(--hamburger-icon);
    margin-right: 0.625rem;
    margin-top: -0.3125rem;
    position: absolute;
    right: 2.5rem;
    top: 0.9375rem;
  }
`;

/**
 * Wrapper for the left side of the navbar.
 */
export const LeftWrapper = styled.div`
  align-items: center;
  display: flex;
`;

/**
 * Main navbar content, dynamically shown/hidden for mobile screens.
 */
export const NavbarContent = styled.div`
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
    top: 3.75rem;
    width: 100%;
    z-index: 1000;
  }
`;
