import React, { useState } from "react";
import styled from "styled-components";
import EllipsisMenuWrapper from "./EllipsisMenuWrapper";
import CircularRating from "./CircularRating";

// Card wrapper for each movie
const MovieCardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 200px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;

  @media (max-width: 770px) {
    max-width: 80%;
  }
`;

// Wrapper to apply blur effect when menu is open
const BlurWrapper = styled.div`
  transition: filter 0.3s ease;
  filter: ${(props) => (props.isBlurred ? "blur(4px)" : "none")};
`;

// Wrapper for movie image
const MovieImageWrapper = styled.div`
  position: relative;
`;

// Styles for the movie image
const MovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
  position: relative;
`;

// Container for movie details
const MovieInfo = styled.div`
  text-align: left;
  margin-top: 10px;
`;

// Movie title with hover effect
const MovieTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;

  &:hover {
    color: #01b4e4;
  }
`;

// Release date styling
const MovieReleaseDate = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

// Helper function to format the release date (adds leading zero to day if needed)
const formatReleaseDate = (release_date) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Date(release_date).toLocaleDateString("en-GB", options);
};

const MovieCard = ({ movie }) => {
  const [isBlurred, setIsBlurred] = useState(false); // State to track blur effect

  // Function to toggle blur effect based on the menu state
  const toggleBlur = (state) => {
    setIsBlurred(state);
  };

  const { title, poster_path, release_date, vote_average } = movie; // Destructure movie props
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`; // Full URL for movie poster

  const formattedDate = formatReleaseDate(release_date); // Format the release date

  return (
    <MovieCardWrapper>
      <BlurWrapper isBlurred={isBlurred}>
        <MovieImageWrapper>
          {/* Display movie image */}
          <MovieImage src={posterUrl} alt={title} />

          {/* Display circular rating component */}
          <CircularRating rating={vote_average * 10} />
        </MovieImageWrapper>

        {/* Display movie title and release date */}
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieReleaseDate>{formattedDate}</MovieReleaseDate>
        </MovieInfo>
      </BlurWrapper>

      {/* Ellipsis menu for additional actions */}
      <EllipsisMenuWrapper toggleBlur={toggleBlur} />
    </MovieCardWrapper>
  );
};

export default MovieCard;
