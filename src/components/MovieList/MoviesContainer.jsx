import React from "react";
import styled from "@emotion/styled";

/**
 * Styled container to align and center movie content.
 */
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

/**
 * MoviesContainer component for wrapping movie-related content.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {JSX.Element} props.children - Child elements to display inside the container.
 * @returns {JSX.Element} Container component.
 */
const MoviesContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MoviesContainer;
