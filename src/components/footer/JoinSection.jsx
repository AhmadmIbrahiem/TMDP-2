import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

/**
 * Section for allowing users to join the community.
 * Includes a logo and a call-to-action link.
 */
const JoinWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    margin-bottom: 20px;
  }

  a {
    background-color: var(--accent-color);
    border-radius: 30px;
    color: var(--text-color);
    font-weight: var(--font-weight);
    padding: 10px 20px;
    text-decoration: none;
  }
`;

/**
 * Component rendering a "Join the Community" section with a logo and link.
 *
 * @returns {JSX.Element} JSX for the join section.
 */
const JoinSection = () => {
  return (
    <JoinWrapper>
      <Logo />
      <a href="/signup">Join the Community</a>
    </JoinWrapper>
  );
};

export default JoinSection;
