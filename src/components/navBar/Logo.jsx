import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/Logo.svg";

/**
 * Styled image component for the logo.
 */
const LogoImage = styled.img`
  height: 40px;
  width: 154px;
`;

/**
 * Logo component that displays the site's logo.
 *
 * @component
 * @returns {JSX.Element} The logo element.
 */
const Logo = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
