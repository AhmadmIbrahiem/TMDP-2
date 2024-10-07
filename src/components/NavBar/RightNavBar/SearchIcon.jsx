import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "@emotion/styled";

/**
 * Styled icon for the search action.
 */
const StyledSearchIcon = styled(FaSearch)`
  cursor: pointer;
  color: #76c7c0;
  font-size: 1.2rem;
`;

/**
 * Styled input field for search queries, which is toggled by the search icon.
 */
const SearchInput = styled.input`
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: ${(props) => (props.visible ? "inline-block" : "none")};
`;

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
      onSearch(searchQuery); // Pass the query to the parent component
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
