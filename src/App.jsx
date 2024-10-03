import React, { useState } from "react";
import Navbar from "./components/NavBar/NavBar";
import MovieList from "./components/MovieList/MovieList";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "@emotion/styled";
import Footer from "./components/Footer/FooterWrapper";
import "./components/CSS/App.css"; // Global CSS for the app

// Wrapper for the entire app, applies global font style
const AppWrapper = styled.div`
  font-family: "Arial", sans-serif;
`;

// Container for the main content (sidebar and movie list)
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

function App() {
  // State to manage the sorting option
  const [sortBy, setSortBy] = useState("popularity.desc");

  // State to track selected genres for filtering movies
  const [selectedGenres, setSelectedGenres] = useState([]);

  // State to manage release date filters
  const [releaseDates, setReleaseDates] = useState({ from: "", to: "" });

  // Handler function for search, updates selected genres
  const handleSearch = (genres) => {
    setSelectedGenres(genres);
  };

  // Handler function for date selection, updates release dates
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
          setSortBy={setSortBy} // Pass function to update sort option
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
