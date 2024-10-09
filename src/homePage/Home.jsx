import React from "react";
import logo from "../assets/Logo.svg";
import { HomeWrapper, LogoImage, WelcomeText } from "./Home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <LogoImage src={logo} alt="TMDB Logo" />
      <WelcomeText>Welcome to TMDB!</WelcomeText>
    </HomeWrapper>
  );
};

export default Home;
