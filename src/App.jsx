// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./moviesPage/components/navBar/NavBar";
import Home from "./homePage/Home"; // Import the Home page
import MovieList from "./moviesPage/components/movieList/movieFetch/MovieFetch";
import Sidebar from "./moviesPage/components/sidebar/sideBoxes/Sidebar";
import Footer from "./moviesPage/components/footer/Footer";
import NotFound from "./404Page/notFound/NotFound";
import { AppWrapper, Container } from "./App.styles";
import "./global.css";

/**
 * App component that serves as the root of the application.
 * It manages the global state for sorting, filtering by genres, and release dates.
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
    <Router>
      <AppWrapper>
        <Navbar />

        <Routes>
          {/* Route for Home page */}
          <Route path="/home" element={<Home />} />

          {/* Route for the movies page */}
          <Route
            path="/movies"
            element={
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
            }
          />

          {/* Fallback route for any undefined path */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
