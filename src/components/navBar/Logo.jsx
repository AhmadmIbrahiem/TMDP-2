import React from "react";
import { LogoImage } from "./Logo.styles";
import logo from "../assets/Logo.svg";

/**
 * Logo component that displays the site's logo.
 *
 *
 * @returns {JSX.Element} The logo element.
 */
const Logo = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
