import React, { useState } from "react";
import {
  MovieCardWrapper,
  BlurWrapper,
  MovieImageWrapper,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieReleaseDate,
} from "./MovieCard.styles";
import EllipsisMenuWrapper from "../EllipseButton/EllipsisMenuWrapper";
import CircularRating from "../circularRating/CircularRating";

/**
 * Formats the release date string to a more readable format.
 *
 * @param {string} release_date- The release date of the movie.
 *
 * @returns {string} Formatted release date.
 */
const formatReleaseDate = (release_date) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Date(release_date).toLocaleDateString("en-GB", options);
};

/**
 * MovieCard component that displays movie information including title, poster, rating, and release date.
 *
 * @param {Object} props       - Component props.
 * @param {Object} props.movie - Movie object containing details such as title, poster path, release date, and rating.
 *
 * @returns {JSX.Element} The MovieCard component.
 */
const MovieCard = ({ movie }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleBlur = (state) => {
    setIsBlurred(state);
  };

  const { title, poster_path, release_date, vote_average } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const formattedDate = formatReleaseDate(release_date);

  return (
    <MovieCardWrapper>
      <BlurWrapper isBlurred={isBlurred}>
        <MovieImageWrapper>
          <MovieImage src={posterUrl} alt={title} />
          <CircularRating rating={vote_average * 10} />
        </MovieImageWrapper>

        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieReleaseDate>{formattedDate}</MovieReleaseDate>
        </MovieInfo>
      </BlurWrapper>

      <EllipsisMenuWrapper toggleBlur={toggleBlur} />
    </MovieCardWrapper>
  );
};

export default MovieCard;
