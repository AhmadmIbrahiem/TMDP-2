import React from "react";
import styled from "@emotion/styled";
import logo from "../../assets/Logo.svg";

const LogoImage = styled.img`
  height: 40px;
  width: 154px;
`;

const Logo = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
