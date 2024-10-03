import React from "react";
import styled from "@emotion/styled";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchButton = styled.button`
  padding: 10px 70px;
  background-color: ${({ isClickable }) =>
    isClickable ? "var(--accent-color)" : "var(--secondary-color)"};
  color: ${({ isClickable }) => (isClickable ? "#fff" : "#555")};
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  border-radius: 28px;
  width: 300px;
  border: none;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "not-allowed")};
  pointer-events: ${({ isClickable }) => (isClickable ? "auto" : "none")};
  transition: var(--bg-color) 0.3s ease;

  &:hover {
    background-color: ${({ isClickable }) =>
      isClickable ? "#0d253f" : "transparent"};
  }
`;

const Search = ({ isClickable, onClick }) => {
  return (
    <ButtonWrapper>
      <SearchButton isClickable={isClickable} onClick={onClick}>
        Search
      </SearchButton>
    </ButtonWrapper>
  );
};

export default Search;
