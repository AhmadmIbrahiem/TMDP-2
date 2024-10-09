import React, { useEffect, useState, useCallback, useMemo } from "react";
import MoviesContainer from "../movieContainer/MoviesContainer";
import MoviesGrid from "../moviesGrid/MoviesGrid";
import LoadMoreButton from "../loadMoreButton/LoadMoreButton";
import useInfiniteScroll from "../infiniteScroll/InfiniteScroll";
import { LoadingMessage } from "./MovieFetch.styles"; // Import the new styled component

/**
 * MovieList component fetches and displays a list of movies based on sorting, filtering, and search criteria. It also supports infinite scrolling and manual loading of more movies.
 *
 * @param   {Object}        props                   - Component props.
 * @param   {string}        props.sortBy            - The sorting option for fetching movies (e.g., popularity, release date).
 * @param   {Array<number>} props.selectedProviders - The IDs of selected streaming providers for filtering.
 * @param   {Array<number>} props.selectedGenres    - The IDs of selected genres for filtering.
 * @param   {Object}        props.releaseDates      - The selected release date range for filtering movies.
 * @param   {string}        props.releaseDates.from - The start of the release date range (YYYY-MM-DD).
 * @param   {string}        props.releaseDates.to   - The end of the release date range (YYYY-MM-DD).
 * @param   {string}        props.searchQuery       - The search term for querying movies by title.
 *
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

  // Memoize the filters object so it only changes when the inputs change
  const filters = useMemo(
    () => ({
      sortBy,
      selectedProviders,
      selectedGenres,
      releaseDates,
      searchQuery,
    }),
    [sortBy, selectedProviders, selectedGenres, releaseDates, searchQuery]
  );

  const fetchMovies = async (
    pageNum,
    {
      sortBy,
      selectedProviders = [],
      selectedGenres = [],
      releaseDates = {},
      searchQuery = "",
    }
  ) => {
    setLoading(true);

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=a2e43792610eabefa63e1e91cde700d8&sort_by=${sortBy}&page=${pageNum}`;

    if (selectedProviders.length > 0) {
      url += `&with_watch_providers=${selectedProviders.join(
        ","
      )}&watch_region=US`;
    }

    if (selectedGenres.length > 0) {
      url += `&with_genres=${selectedGenres.join(",")}`;
    }

    if (releaseDates.from) {
      url += `&release_date.gte=${releaseDates.from}`;
    }
    if (releaseDates.to) {
      url += `&release_date.lte=${releaseDates.to}`;
    }

    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=a2e43792610eabefa63e1e91cde700d8&query=${searchQuery}&page=${pageNum}`;
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

  const handleFilterChange = useCallback(() => {
    setMovies([]);
    setPage(1);
    fetchMovies(1, filters);
  }, [filters]);

  useEffect(() => {
    handleFilterChange();
  }, [handleFilterChange]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useInfiniteScroll(hasMore, loading, infiniteScrollEnabled, loadMoreMovies);

  useEffect(() => {
    if (page > 1) {
      fetchMovies(page, filters);
    }
  }, [page, filters]);

  return (
    <MoviesContainer>
      <MoviesGrid movies={movies} />
      {loading && <LoadingMessage>Loading...</LoadingMessage>}
      {!infiniteScrollEnabled && (
        <LoadMoreButton onClick={() => setInfiniteScrollEnabled(true)} />
      )}
    </MoviesContainer>
  );
};

export default MovieList;
