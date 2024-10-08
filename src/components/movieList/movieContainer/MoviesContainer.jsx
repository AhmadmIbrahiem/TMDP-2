import React from "react";
import { Container } from "./MoviesContainer.styles";

/**
 * MoviesContainer component for wrapping movie-related content.
 *
 * @param {Object}      props          - Component props.
 * @param {JSX.Element} props.children - Child elements to display inside the container.
 *
 * @returns {JSX.Element} Container component.
 */
const MoviesContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MoviesContainer;
