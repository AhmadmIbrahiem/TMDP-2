import React from "react";
import styled from "@emotion/styled";

/**
 * Styled button for the login action.
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
 * LoginButton component that renders a "Login" button.
 *
 * @component
 * @returns {JSX.Element} A button element for logging in.
 */
const LoginButton = () => {
  return <Button>Login</Button>;
};

export default LoginButton;
