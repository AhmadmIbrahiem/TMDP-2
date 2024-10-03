import React, { useState } from "react";
import styled from "styled-components";
import SortBox from "./SortBox";
import WhereToWatch from "./WhereToWatch/WhereToWatchBox";
import FiltersBox from "./FiltersBox/FiltersBox";
import SearchButton from "./SearchButton";

// Styled container for the sidebar
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  max-width: 300px;
  padding: 10px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 770px) {
    max-width: 90%;
    margin-top: 50px;
  }
`;

// Sidebar component containing sorting, filters, and search button
const Sidebar = ({ setSortBy, onSearch, onDateSelect }) => {
  const [isSearchClickable, setIsSearchClickable] = useState(false); // Track if search is enabled
  const [selectedGenres, setSelectedGenres] = useState([]); // Track selected genres

  // Handle search button click
  const handleSearchClick = () => {
    if (isSearchClickable) {
      onSearch(selectedGenres); // Trigger search with selected genres
    }
  };

  return (
    <SidebarContainer>
      {/* Sorting options */}
      <SortBox setSortBy={setSortBy} />

      {/* Where to watch component (streaming providers) */}
      <WhereToWatch />

      {/* Filters box for genres and release dates */}
      <FiltersBox
        onGenreSelect={setSelectedGenres} // Update selected genres
        onDateSelect={onDateSelect} // Handle release date selection
        setIsSearchClickable={setIsSearchClickable} // Enable search when filters are applied
      />

      {/* Search button that triggers search only when clickable */}
      <SearchButton
        isClickable={isSearchClickable} // Control button's clickable state
        onClick={handleSearchClick} // Handle search button click
      />
    </SidebarContainer>
  );
};

export default Sidebar;
