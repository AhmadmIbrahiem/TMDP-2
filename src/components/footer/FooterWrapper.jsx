import React from "react";
import { FooterWrapper } from "./FooterWrapper.styles";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

/**
 * Footer component containing navigation and bottom build info.
 *
 * @returns {JSX.Element} JSX for the full footer.
 */
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav />
      <FooterBottom />
    </FooterWrapper>
  );
};

export default Footer;
