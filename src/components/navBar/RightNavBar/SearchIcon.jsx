import React, { useState } from "react";
import { StyledSearchIcon, SearchInput } from "./SearchIcon.styles";

/**
 * SearchIcon component that shows a search input when clicked, allowing the user to input and submit a search query.
 *
 * @component
 * @param {Function} props.onSearch - Callback function that is triggered when a search query is submitted.
 * @returns {JSX.Element} A search icon with an input field that appears on click.
 */
const SearchIcon = ({ onSearch }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div>
      <StyledSearchIcon onClick={handleSearchClick} />
      <SearchInput
        type="text"
        placeholder="Search..."
        visible={searchVisible}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleSearchSubmit}
      />
    </div>
  );
};

export default SearchIcon;
