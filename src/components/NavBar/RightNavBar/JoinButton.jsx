import React from "react";
import styled from "@emotion/styled";

/**
 * Styled button for joining TMDB.
 */
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

/**
 * JoinButton component that renders a "Join TMDB" button.
 *
 * @component
 * @returns {JSX.Element} A button element for joining TMDB.
 */
const JoinButton = () => {
  return <Button>Join TMDB</Button>;
};

export default JoinButton;
