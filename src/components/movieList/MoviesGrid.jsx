import React from "react";
import { Grid } from "./MoviesGrid.styles";
import MovieCard from "./MovieCard";

/**
 * MoviesGrid component to display a grid of movies.
 *
 *
 * @param   {Object}        props - Component props.
 * @param   {Array<Object>} props.movies - Array of movie objects to display.
 *
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
