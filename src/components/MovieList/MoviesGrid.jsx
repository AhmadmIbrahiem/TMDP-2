import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";

// Controlling the grid of the movies apppearing at each row depending on the screen size
const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;

  @media (max-width: 1235px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MoviesGrid = ({ movies }) => {
  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};

export default MoviesGrid;
