import React, { useEffect, useState, useCallback } from "react";
import MoviesContainer from "./MoviesContainer";
import MoviesGrid from "./MoviesGrid";
import LoadMoreButton from "./LoadMoreButton";

const MovieList = ({
  sortBy,
  selectedProviders,
  selectedGenres,
  releaseDates,
  searchQuery, // Search query input
}) => {
  const [movies, setMovies] = useState([]); // State to store fetched movies
  const [page, setPage] = useState(1); // State for current page number
  const [loading, setLoading] = useState(false); // State to track loading status
  const [hasMore, setHasMore] = useState(true); // State to check if more movies are available
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false); // State to control infinite scroll

  // Function to fetch movies from the API with filters
  const fetchMovies = async (
    pageNum,
    sortOption,
    providerIds = [],
    genreIds = [],
    fromDate = "",
    toDate = "",
    query = "" // Optional search query
  ) => {
    setLoading(true); // Set loading state to true
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=a2e43792610eabefa63e1e91cde700d8&sort_by=${sortOption}&page=${pageNum}`;

    // Add provider filters to the API request if any are selected
    if (providerIds.length > 0) {
      url += `&with_watch_providers=${providerIds.join(",")}&watch_region=US`;
    }

    // Add genre filters if selected
    if (genreIds.length > 0) {
      url += `&with_genres=${genreIds.join(",")}`;
    }

    // Add release date filters if provided
    if (fromDate) {
      url += `&release_date.gte=${fromDate}`;
    }
    if (toDate) {
      url += `&release_date.lte=${toDate}`;
    }

    // Override URL if search query is provided
    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=a2e43792610eabefa63e1e91cde700d8&query=${query}&page=${pageNum}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      // If no results, disable further fetching
      if (data.results.length === 0) {
        setHasMore(false);
      }

      // Append new movies to the existing list
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error("Error fetching the movies", error);
    } finally {
      setLoading(false); // Set loading to false once the fetch is complete
    }
  };

  // Effect to fetch movies when sorting, providers, genres, dates, or search query changes
  useEffect(() => {
    setMovies([]); // Reset movie list on new search/filter
    fetchMovies(
      1,
      sortBy,
      selectedProviders,
      selectedGenres,
      releaseDates.from,
      releaseDates.to,
      searchQuery // Include search query in the request
    );
    setPage(1); // Reset to the first page
  }, [sortBy, selectedProviders, selectedGenres, releaseDates, searchQuery]); // Dependencies for fetching movies

  // Function to load more movies (for pagination or button click)
  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1); // Increase page number
    setInfiniteScrollEnabled(true); // Enable infinite scroll when loading more
  };

  // Infinite scroll handler, loads more movies when scrolling near the bottom
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      hasMore &&
      !loading &&
      infiniteScrollEnabled
    ) {
      setPage((prevPage) => prevPage + 1); // Load next page when scrolled to bottom
    }
  }, [hasMore, loading, infiniteScrollEnabled]); // Dependencies for scroll handler

  // Effect to enable/disable scroll listener for infinite scrolling
  useEffect(() => {
    if (infiniteScrollEnabled) {
      window.addEventListener("scroll", handleScroll); // Add scroll event listener
    }
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
  }, [handleScroll, infiniteScrollEnabled]);

  // Effect to fetch more movies when the page number changes
  useEffect(() => {
    if (page > 1) {
      fetchMovies(
        page,
        sortBy,
        selectedProviders,
        selectedGenres,
        releaseDates.from,
        releaseDates.to,
        searchQuery // Include search query for fetching next page
      );
    }
  }, [
    page,
    sortBy,
    selectedProviders,
    selectedGenres,
    releaseDates,
    searchQuery,
  ]); // Dependencies for fetching additional pages

  return (
    <MoviesContainer>
      <MoviesGrid movies={movies} /> {/* Display movies in grid format */}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}{" "}
      {/* Show loading state */}
      {!infiniteScrollEnabled && (
        <LoadMoreButton onClick={loadMoreMovies} />
      )}{" "}
      {/* Load more button if infinite scroll is disabled */}
    </MoviesContainer>
  );
};

export default MovieList;
