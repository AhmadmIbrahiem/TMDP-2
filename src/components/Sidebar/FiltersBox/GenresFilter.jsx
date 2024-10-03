import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

// Wrapper for genre buttons in a grid layout
const GenresWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two-column grid
  gap: 3px; // Space between buttons
`;

// Styled genre button
const GenreButton = styled.button`
  background-color: var(--secondary-color);
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: var(--footer-font-size);
  padding: 10px 20px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    color: var(--text-color);
  }

  &.active {
    background-color: var(--accent-color);
    color: var(--text-color);
  }
`;

// Component for filtering by genres
const GenresFilter = ({ selectedGenres, toggleGenre }) => {
  const [genres, setGenres] = useState([]); // State to store genres

  // Fetch genres from TMDB API on component mount
  useEffect(() => {
    const fetchGenres = async () => {
      const apiKey = "a2e43792610eabefa63e1e91cde700d8";
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.genres); // Set fetched genres in state
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <h4>Genres</h4>
      <GenresWrapper>
        {genres.map((genre) => (
          <GenreButton
            key={genre.id}
            className={selectedGenres.includes(genre.id) ? "active" : ""} // Highlight selected genres
            onClick={() => toggleGenre(genre.id)} // Toggle genre selection
          >
            {genre.name}
          </GenreButton>
        ))}
      </GenresWrapper>
    </div>
  );
};

export default GenresFilter;
