import React, { useState } from "react";
import { Dropdown, Header } from "./SortBox.styles";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { BoxWrapper } from "../BoxWrapper.styles";
/**
 * SortBox component that displays a dropdown for sorting options and allows users to select a sorting criterion.
 *
 * @param   {Object}   props           - Component props.
 * @param   {Function} props.setSortBy - Callback function to update the sorting criteria.
 *
 * @returns {JSX.Element} The sort box component.
 */
const SortBox = ({ setSortBy }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <BoxWrapper isOpen={open}>
      <Header onClick={toggleDropdown}>
        <h3>Sort</h3>
        {open ? <FaChevronDown /> : <FaChevronRight />}
      </Header>
      {open && (
        <div>
          <h4>Sort Results By</h4>
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
