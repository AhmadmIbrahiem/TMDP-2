// SearchIcon.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "@emotion/styled";

const StyledSearchIcon = styled(FaSearch)`
  cursor: pointer;
  color: #76c7c0;
  font-size: 1.2rem;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: ${(props) => (props.visible ? "inline-block" : "none")};
`;

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
        onKeyDown={handleSearchSubmit} // Trigger search on 'Enter' key
      />
    </div>
  );
};

export default SearchIcon;
