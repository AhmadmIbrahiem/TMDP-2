import React from "react";
import styled from "@emotion/styled";
import MovieCard from "./MovieCard";

/**
 * Styled grid layout for displaying movies.
 */
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

/**
 * MoviesGrid component to display a grid of movies.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.movies - Array of movie objects to display.
 * @returns {JSX.Element} Grid component displaying MovieCards.
 */
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
