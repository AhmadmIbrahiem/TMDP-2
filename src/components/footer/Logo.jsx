import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/Logo2.svg";

/**
 * Styled component for the secondary logo image.
 */
const LogoImage = styled.img`
  height: 200px;
  width: 154px;
`;

/**
 * Logo component for rendering a secondary logo image.
 *
 * @returns {JSX.Element} JSX for the logo.
 */
const Logo = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
