import React from "react";
import styled from "@emotion/styled";

/**
 * Styled component for the language switcher.
 */
const StyledSwitcher = styled.span`
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  color: white;

  &:hover {
    color: #4ba9c8;
    background-color: white;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 3px 8px;
  }
`;

/**
 * LanguageSwitcher component to display and toggle the current language.
 *
 * @component
 * @returns {JSX.Element} A span element that acts as a language switcher.
 */
const LanguageSwitcher = () => {
  return <StyledSwitcher>EN</StyledSwitcher>;
};

export default LanguageSwitcher;
