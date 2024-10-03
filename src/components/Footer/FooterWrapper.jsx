import React from "react";
import styled from "@emotion/styled";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

// Wrapper for footer
const FooterWrapper = styled.footer`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 40px 20px;
  text-align: left;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav />
      <FooterBottom />
    </FooterWrapper>
  );
};

export default Footer;
