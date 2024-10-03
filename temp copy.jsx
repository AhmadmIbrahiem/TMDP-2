import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 movies per row */
  gap: 20px; /* Adds spacing between movie cards */
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 movies per row on smaller screens */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr); /* 3 movies per row on tablet */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* 2 movies per row on mobile */
  }
`;

const LoadMoreButton = styled.button`
  background-color: #00a8e8;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  &:hover {
    color: black;
  }
`;

const MovieList = ({ sortBy }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false);

  // Fetch movies function with sort parameter
  const fetchMovies = async (pageNum, sortOption) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=a2e43792610eabefa63e1e91cde700d8&sort_by=${sortOption}&page=${pageNum}`
      );
      const data = await response.json();

      if (data.results.length === 0) {
        setHasMore(false);
      }

      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error("Error fetching the movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]); // Reset movies list when sorting changes
    fetchMovies(1, sortBy); // Fetch sorted movies
    setPage(1); // Reset the page to 1 when sorting changes
  }, [sortBy]);

  // Load more movies handler
  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
    setInfiniteScrollEnabled(true); // Enable infinite scroll after the first click
  };

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      hasMore &&
      !loading &&
      infiniteScrollEnabled
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, loading, infiniteScrollEnabled]);

  // Attach infinite scroll event listener
  useEffect(() => {
    if (infiniteScrollEnabled) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, infiniteScrollEnabled]);

  // Use effect to load more movies when page changes
  useEffect(() => {
    if (page > 1) {
      fetchMovies(page, sortBy);
    }
  }, [page, sortBy]);

  return (
    <MoviesContainer>
      <MoviesGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesGrid>
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {!infiniteScrollEnabled && (
        <LoadMoreButton onClick={loadMoreMovies}>Load More</LoadMoreButton>
      )}
    </MoviesContainer>
  );
};

export default MovieList;
