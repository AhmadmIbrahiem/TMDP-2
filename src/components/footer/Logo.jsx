import React from "react";
import { LogoImage } from "./Logo.styles";
import logo from "../assets/Logo2.svg";

/**
 * Logo component for rendering a secondary logo image.
 *
 * @returns {JSX.Element} JSX for the logo.
 */
const Logo = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
