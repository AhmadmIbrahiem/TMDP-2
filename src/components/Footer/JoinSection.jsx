import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

// Join the community section
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

const JoinSection = () => {
  return (
    <JoinWrapper>
      <Logo />
      <a href="/signup">Join the Community</a>
    </JoinWrapper>
  );
};

export default JoinSection;
