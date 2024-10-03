import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronRight } from "react-icons/fa"; // Icons for dropdown toggle
import BoxWrapper from "./BoxWrapper";

// Styled dropdown component for sorting options
const Dropdown = styled.select`
  font-size: var(--footer-font-size);
  margin-top: 10px;
  padding: 8px;
  width: 100%;
`;

// Header component for the sort box (displays the title and toggle icon)
const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

// SortBox component
const SortBox = ({ setSortBy }) => {
  const [open, setOpen] = useState(false); // State to track whether the dropdown is open or closed

  // Toggle the dropdown visibility
  const toggleDropdown = () => setOpen(!open);

  // Handle sorting option change
  const handleChange = (event) => {
    setSortBy(event.target.value); // Update the sorting criteria
  };

  return (
    <BoxWrapper isOpen={open}>
      {" "}
      {/* Wrapping the box content */}
      <Header onClick={toggleDropdown}>
        {" "}
        {/* Toggle dropdown on click */}
        <h3>Sort</h3>
        {open ? <FaChevronDown /> : <FaChevronRight />}{" "}
        {/* Show appropriate icon based on open state */}
      </Header>
      {open /* Show dropdown only when open */ && (
        <div>
          <h4>Sort Results By</h4>
          {/* Dropdown for sorting options */}
          <Dropdown onChange={handleChange} defaultValue="popularity.desc">
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="primary_release_date.desc">
              Release Date Descending
            </option>
            <option value="primary_release_date.asc">
              Release Date Ascending
            </option>
            <option value="title.asc">Title (A-Z)</option>
            <option value="title.desc">Title (Z-A)</option>
          </Dropdown>
        </div>
      )}
    </BoxWrapper>
  );
};

export default SortBox;
