import React, { useState } from "react";
import Navbar from "./components/navBar/NavBar";
import MovieList from "./components/movieList/movieFetch/MovieFetch";
import Sidebar from "./components/sidebar/sideBoxes/Sidebar";
import Footer from "./components/footer/Footer";
import { AppWrapper, Container } from "./App.styles";
import "./global.css";

/**
 * App component that serves as the root of the application. It manages the global state for sorting, filtering by genres, and release dates.
 *
 * @returns {JSX.Element} The main app component with Navbar, Sidebar, MovieList, and Footer.
 */
function App() {
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [releaseDates, setReleaseDates] = useState({ from: "", to: "" });

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleSearch = (genres) => {
    setSelectedGenres(genres);
  };

  const handleDateSelect = (from, to) => {
    setReleaseDates({ from, to });
  };

  return (
    <AppWrapper>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main container with Sidebar and MovieList */}
      <Container>
        <Sidebar
          setSortBy={handleSort}
          onSearch={handleSearch}
          onDateSelect={handleDateSelect}
        />
        <MovieList
          sortBy={sortBy}
          selectedGenres={selectedGenres}
          releaseDates={releaseDates}
        />
      </Container>

      {/* Footer at the bottom */}
      <Footer />
    </AppWrapper>
  );
}

export default App;
