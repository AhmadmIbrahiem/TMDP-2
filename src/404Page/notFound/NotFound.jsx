// src/404Page/NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NotFoundWrapper,
  NotFoundTitle,
  NotFoundMessage,
  HomeButton,
} from "./NotFound.styles";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Page not found</NotFoundMessage>
      <HomeButton onClick={() => navigate("/")}>
        Go Back to the Movie List
      </HomeButton>
    </NotFoundWrapper>
  );
};

export default NotFound;
