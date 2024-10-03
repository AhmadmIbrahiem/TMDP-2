//importing the secondary Logo from the assets folder
import React from "react";
import styled from "@emotion/styled";
import logo from "../../assets/Logo2.svg";
const LogoImage = styled.img`
  height: 200px;
  width: 154px;
`;

const Logo = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
