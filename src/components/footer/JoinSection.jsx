import React from "react";
import { JoinWrapper } from "./JoinSection.styles";
import Logo from "./Logo";

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
