import React from "react";
import styled from "@emotion/styled";

/**
 * Wrapper component for centering the search button.
 */
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * Styled button component that changes its appearance based on whether it's clickable.
 */
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

/**
 * Search component renders a search button that can be clicked only if the `isClickable` prop is true.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.isClickable - Determines if the search button is clickable.
 * @param {Function} props.onClick - Callback function triggered when the button is clicked.
 * @returns {JSX.Element} The search button component.
 */
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
