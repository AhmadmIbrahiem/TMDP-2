import React from "react";
import { ButtonWrapper, SearchButton } from "./SearchButton.styles";

/**
 * Search component renders a search button that can be clicked only if the `isClickable` prop is true.
 *
 *
 * @param   {Object}   props - Component props.
 * @param   {boolean}  props.isClickable - Determines if the search button is clickable.
 * @param   {Function} props.onClick - Callback function triggered when the button is clicked.
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
