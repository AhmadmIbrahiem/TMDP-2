import React, { useEffect, useState, useCallback } from "react";
import MoviesContainer from "./MoviesContainer";
import MoviesGrid from "./MoviesGrid";
import LoadMoreButton from "./LoadMoreButton";

/**
 * MovieList component to fetch, display, and paginate a list of movies.
 * Handles sorting, filtering, and infinite scrolling.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.sortBy - The sort option for the movies (e.g., popularity).
 * @param {Array<number>} props.selectedProviders - Array of provider IDs to filter movies by provider.
 * @param {Array<number>} props.selectedGenres - Array of genre IDs to filter movies by genre.
 * @param {Object} props.releaseDates - Date range to filter movies by release date.
 * @param {string} props.releaseDates.from - Start date for filtering.
 * @param {string} props.releaseDates.to - End date for filtering.
 * @param {string} props.searchQuery - Search query to filter movies by title.
 * @returns {JSX.Element} Movie list with infinite scrolling and load more button.
 */
const MovieList = ({
  sortBy,
  selectedProviders,
  selectedGenres,
  releaseDates,
  searchQuery,
}) => {
  const [movies, setMovies] = useState([]); // State to store fetched movies
  const [page, setPage] = useState(1); // State for current page number
  const [loading, setLoading] = useState(false); // State to track loading status
  const [hasMore, setHasMore] = useState(true); // State to check if more movies are available
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false); // State to control infinite scroll

  /**
   * Fetches movies from the TMDB API based on filters and search query.
   *
   * @param {number} pageNum - The page number to fetch.
   * @param {string} sortOption - The sort option to use (e.g., popularity.asc).
   * @param {Array<number>} [providerIds=[]] - Array of provider IDs for filtering.
   * @param {Array<number>} [genreIds=[]] - Array of genre IDs for filtering.
   * @param {string} [fromDate=""] - Start date for filtering by release date.
   * @param {string} [toDate=""] - End date for filtering by release date.
   * @param {string} [query=""] - Search query for movie title.
   */
  const fetchMovies = async (
    pageNum,
    sortOption,
    providerIds = [],
    genreIds = [],
    fromDate = "",
    toDate = "",
    query = ""
  ) => {
    setLoading(true);
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=a2e43792610eabefa63e1e91cde700d8&sort_by=${sortOption}&page=${pageNum}`;

    if (providerIds.length > 0) {
      url += `&with_watch_providers=${providerIds.join(",")}&watch_region=US`;
    }

    if (genreIds.length > 0) {
      url += `&with_genres=${genreIds.join(",")}`;
    }

    if (fromDate) {
      url += `&release_date.gte=${fromDate}`;
    }
    if (toDate) {
      url += `&release_date.lte=${toDate}`;
    }

    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=a2e43792610eabefa63e1e91cde700d8&query=${query}&page=${pageNum}`;
    }

    try {
      const response = await fetch(url);
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
    setMovies([]);
    fetchMovies(
      1,
      sortBy,
      selectedProviders,
      selectedGenres,
      releaseDates.from,
      releaseDates.to,
      searchQuery
    );
    setPage(1);
  }, [sortBy, selectedProviders, selectedGenres, releaseDates, searchQuery]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
    setInfiniteScrollEnabled(true);
  };

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

  useEffect(() => {
    if (infiniteScrollEnabled) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, infiniteScrollEnabled]);

  useEffect(() => {
    if (page > 1) {
      fetchMovies(
        page,
        sortBy,
        selectedProviders,
        selectedGenres,
        releaseDates.from,
        releaseDates.to,
        searchQuery
      );
    }
  }, [
    page,
    sortBy,
    selectedProviders,
    selectedGenres,
    releaseDates,
    searchQuery,
  ]);

  return (
    <MoviesContainer>
      <MoviesGrid movies={movies} />
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {!infiniteScrollEnabled && <LoadMoreButton onClick={loadMoreMovies} />}
    </MoviesContainer>
  );
};

export default MovieList;
