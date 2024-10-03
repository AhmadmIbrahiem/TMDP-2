// JoinButton.js
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const JoinButton = () => {
  return <Button>Join TMDB</Button>;
};

export default JoinButton;
