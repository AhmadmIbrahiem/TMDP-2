import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import GenresFilter from "./GenresFilter";
import ReleaseDatesFilter from "./ReleaseDatesFilter";
import BoxWrapper from "../BoxWrapper";

// Styled component for filter content
const FilterContent = styled.div`
  background: var(--text-color);
  border-radius: 10px;
  margin-top: 10px;
  transition: all 0.3s ease;
`;

// Styled heading for filter section
const Heading = styled.h3`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: var(--header-font-size);
  font-weight: var(--font-weight);
  justify-content: space-between;
`;

// Main filter component
const FiltersBox = ({ onGenreSelect, onDateSelect, setIsSearchClickable }) => {
  const [isOpen, setIsOpen] = useState(false); // Track if filters are open/closed
  const [selectedGenres, setSelectedGenres] = useState([]); // Track selected genres
  const [releaseDates, setReleaseDates] = useState({ from: "", to: "" }); // Track selected release dates

  // Toggle filter visibility
  const toggleFilters = () => setIsOpen(!isOpen);

  // Handle genre selection/deselection
  const toggleGenre = (genre) => {
    const updatedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];

    setSelectedGenres(updatedGenres);
    setIsSearchClickable(
      updatedGenres.length > 0 || releaseDates.from || releaseDates.to
    );
    onGenreSelect(updatedGenres); // Notify parent of genre selection
  };

  // Handle release date changes
  const handleDateChange = (from, to) => {
    setReleaseDates({ from, to });
    setIsSearchClickable(from || to || selectedGenres.length > 0);
    onDateSelect(from, to); // Notify parent of date selection
  };

  return (
    <BoxWrapper isOpen={isOpen}>
      {" "}
      {/* Toggle box visibility */}
      <Heading onClick={toggleFilters}>
        <span>Filters</span>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />} {/* Toggle icon */}
      </Heading>
      {isOpen && (
        <FilterContent>
          {/* Release Dates */}
          <ReleaseDatesFilter onDateChange={handleDateChange} />

          {/* Genres */}
          <GenresFilter
            selectedGenres={selectedGenres}
            toggleGenre={toggleGenre}
          />
        </FilterContent>
      )}
    </BoxWrapper>
  );
};

export default FiltersBox;
