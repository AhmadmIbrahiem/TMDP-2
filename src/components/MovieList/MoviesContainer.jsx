import React from "react";
import styled from "@emotion/styled";
// Displaying the Movie List as a whole in the center of the screen
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const MoviesContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MoviesContainer;
