import React, { useState } from "react";
import Navbar from "./components/navBar/NavBar";
import MovieList from "./components/movieList/MovieFetch";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "@emotion/styled";
import Footer from "./components/footer/FooterWrapper";
import "./global.css"; // Global CSS for the app

/**
 * Wrapper for the entire app, applying a global font style.
 */
const AppWrapper = styled.div`
  font-family: "Arial", sans-serif;
`;

/**
 * Container for the main content (sidebar and movie list), with responsive behavior.
 */
const Container = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 auto;
  max-width: 1500px;
  padding: 20px 30px;
  padding-top: 100px;

  @media (max-width: 770px) {
    flex-direction: column; // Stack the sidebar and movie list on smaller screens
    padding: 20px 15px;
  }
`;

/**
 * App component that serves as the root of the application.
 * It manages the global state for sorting, filtering by genres, and release dates.
 *
 * @component
 * @returns {JSX.Element} The main app component with Navbar, Sidebar, MovieList, and Footer.
 */
function App() {
  // State to manage the sorting option
  const [sortBy, setSortBy] = useState("popularity.desc");

  // State to track selected genres for filtering movies
  const [selectedGenres, setSelectedGenres] = useState([]);

  // State to manage release date filters
  const [releaseDates, setReleaseDates] = useState({ from: "", to: "" });

  /**
   * Handler function for updating the sorting option.
   *
   * @param {string} sortOption - The new sort option.
   */
  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  /**
   * Handler function for searching movies by selected genres.
   *
   * @param {Array<number>} genres - The selected genre IDs.
   */
  const handleSearch = (genres) => {
    setSelectedGenres(genres);
  };

  /**
   * Handler function for selecting a date range for filtering movies.
   *
   * @param {string} from - The start date for the release date filter.
   * @param {string} to - The end date for the release date filter.
   */
  const handleDateSelect = (from, to) => {
    setReleaseDates({ from, to });
  };

  return (
    <AppWrapper>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main container with Sidebar and MovieList */}
      <Container>
        {/* Sidebar for sorting, filtering by genres and release dates */}
        <Sidebar
          setSortBy={handleSort} // Pass function to handle sorting
          onSearch={handleSearch} // Pass function to handle search
          onDateSelect={handleDateSelect} // Pass function to handle date selection
        />

        {/* MovieList that displays movies based on the sort option, selected genres, and release dates */}
        <MovieList
          sortBy={sortBy} // Pass selected sorting option
          selectedGenres={selectedGenres} // Pass selected genres for filtering
          releaseDates={releaseDates} // Pass selected release dates for filtering
        />
      </Container>

      {/* Footer at the bottom */}
      <Footer />
    </AppWrapper>
  );
}

export default App;
