// LoginButton.js
import React from "react";
import styled from "@emotion/styled";

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

const LoginButton = () => {
  return <Button>Login</Button>;
};

export default LoginButton;
