import React, { useEffect, useState } from "react";
import MoviesContainer from "./MoviesContainer";
import MoviesGrid from "./MoviesGrid";
import LoadMoreButton from "./LoadMoreButton";
import useInfiniteScroll from "./InfiniteScroll"; // Import the hook

/**
 * MovieList component fetches and displays a list of movies based on sorting, filtering, and search criteria.
 * It also supports infinite scrolling and manual loading of more movies.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.sortBy - The sorting option for fetching movies (e.g., popularity, release date).
 * @param {Array<number>} props.selectedProviders - The IDs of selected streaming providers for filtering.
 * @param {Array<number>} props.selectedGenres - The IDs of selected genres for filtering.
 * @param {Object} props.releaseDates - The selected release date range for filtering movies.
 * @param {string} props.releaseDates.from - The start of the release date range (YYYY-MM-DD).
 * @param {string} props.releaseDates.to - The end of the release date range (YYYY-MM-DD).
 * @param {string} props.searchQuery - The search term for querying movies by title.
 * @returns {JSX.Element} A list of movies with infinite scrolling support.
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
   * Fetches movies from the API based on the given filters, genres, dates, and query.
   *
   * @async
   * @param {number} pageNum - The current page number for pagination.
   * @param {string} sortOption - The sorting option for fetching movies (e.g., popularity.desc).
   * @param {Array<number>} [providerIds=[]] - The selected provider IDs for filtering.
   * @param {Array<number>} [genreIds=[]] - The selected genre IDs for filtering.
   * @param {string} [fromDate=""] - The start date of the release date range (YYYY-MM-DD).
   * @param {string} [toDate=""] - The end date of the release date range (YYYY-MM-DD).
   * @param {string} [query=""] - The search term for fetching movies by title.
   * @returns {Promise<void>} Fetches and appends movies to the state.
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

  // Effect to fetch movies when any filter changes (sortBy, providers, genres, releaseDates, or searchQuery)
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

  /**
   * Loads more movies when called (for pagination).
   */
  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Infinite scroll hook to automatically load more movies when scrolling near the bottom
  useInfiniteScroll(hasMore, loading, infiniteScrollEnabled, loadMoreMovies);

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
      {!infiniteScrollEnabled && (
        <LoadMoreButton onClick={() => setInfiniteScrollEnabled(true)} />
      )}
    </MoviesContainer>
  );
};

export default MovieList;
