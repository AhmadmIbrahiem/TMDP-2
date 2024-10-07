import React, { useState } from "react";
import styled from "@emotion/styled";
import GenresFilter from "./GenresFilter";
import ReleaseDatesFilter from "./ReleaseDatesFilter";
import BoxWrapper from "../BoxWrapper";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

/**
 * Styled wrapper for filter content.
 */
const FilterContent = styled.div`
  background: var(--text-color);
  border-radius: 10px;
  margin-top: 10px;
  transition: all 0.3s ease;
`;

/**
 * Styled heading for the filter section.
 */
const Heading = styled.h3`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: var(--header-font-size);
  font-weight: var(--font-weight);
  justify-content: space-between;
`;

/**
 * FiltersBox component to display filters for selecting genres and release dates.
 *
 * @component
 * @param {Function} props.onGenreSelect - Function to handle genre selection.
 * @param {Function} props.onDateSelect - Function to handle release date selection.
 * @param {Function} props.setIsSearchClickable - Function to set the search button's clickable state.
 * @returns {JSX.Element} The filter box with genre and date filters.
 */
const FiltersBox = ({ onGenreSelect, onDateSelect, setIsSearchClickable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [releaseDates, setReleaseDates] = useState({ from: "", to: "" });

  const toggleFilters = () => setIsOpen(!isOpen);

  const toggleGenre = (genre) => {
    const updatedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];

    setSelectedGenres(updatedGenres);
    setIsSearchClickable(
      updatedGenres.length > 0 || releaseDates.from || releaseDates.to
    );
    onGenreSelect(updatedGenres);
  };

  const handleDateChange = (from, to) => {
    setReleaseDates({ from, to });
    setIsSearchClickable(from || to || selectedGenres.length > 0);
    onDateSelect(from, to);
  };

  return (
    <BoxWrapper isOpen={isOpen}>
      <Heading onClick={toggleFilters}>
        <span>Filters</span>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </Heading>
      {isOpen && (
        <FilterContent>
          <ReleaseDatesFilter onDateChange={handleDateChange} />
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
