import React, { useState } from "react";
import { SidebarContainer } from "./Sidebar.styles";
import SortBox from "./SortBox";
import WhereToWatch from "./whereToWatchBox/WhereToWatch";
import FiltersBox from "./filtersBox/Filters";
import SearchButton from "./SearchButton";

/**
 * Sidebar component that displays sorting options, filters, and a search button.
 *
 *
 * @param   {Object}   props - Component props.
 * @param   {Function} props.setSortBy - Callback function to update the sorting criteria.
 * @param   {Function} props.onSearch - Callback function triggered when the search button is clicked.
 * @param   {Function} props.onDateSelect - Callback function for selecting a date range.
 * @returns {JSX.Element} The sidebar component.
 */
const Sidebar = ({ setSortBy, onSearch, onDateSelect }) => {
  const [isSearchClickable, setIsSearchClickable] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSearchClick = () => {
    if (isSearchClickable) {
      onSearch(selectedGenres);
    }
  };

  return (
    <SidebarContainer>
      <SortBox setSortBy={setSortBy} />
      <WhereToWatch />
      <FiltersBox
        onGenreSelect={setSelectedGenres}
        onDateSelect={onDateSelect}
        setIsSearchClickable={setIsSearchClickable}
      />
      <SearchButton
        isClickable={isSearchClickable}
        onClick={handleSearchClick}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
