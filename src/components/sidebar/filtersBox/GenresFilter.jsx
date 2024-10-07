import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

/**
 * Styled wrapper for genres in a grid layout.
 */
const GenresWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
`;

/**
 * Styled genre button.
 */
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

/**
 * GenresFilter component to display a list of genres for filtering.
 *
 * @component
 * @param {Array<number>} props.selectedGenres - Array of selected genre IDs.
 * @param {Function} props.toggleGenre - Function to handle genre selection/deselection.
 * @returns {JSX.Element} The genres filter component.
 */
const GenresFilter = ({ selectedGenres, toggleGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const apiKey = "a2e43792610eabefa63e1e91cde700d8";
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.genres);
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
            className={selectedGenres.includes(genre.id) ? "active" : ""}
            onClick={() => toggleGenre(genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </GenresWrapper>
    </div>
  );
};

export default GenresFilter;
