import React from "react";
import styled from "@emotion/styled";

/**
 * Bottom section of the footer displaying the build version.
 *
 * @component
 */
const BottomWrapper = styled.section`
  color: var(--text-color);
  font-size: var(--footer-font-size);
  margin-top: 40px;
  text-align: center;
`;

/**
 * Footer bottom component showing build information.
 *
 * @returns {JSX.Element} JSX for the footer's bottom section.
 */
const FooterBottom = () => {
  return <BottomWrapper>Build 13f37d1 (7903)</BottomWrapper>;
};

export default FooterBottom;
