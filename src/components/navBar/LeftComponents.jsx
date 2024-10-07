import React from "react";
import styled from "@emotion/styled";
import MoviesDropdown from "./LeftNavBar/MoviesDropdown";
import TvShowsDropdown from "./LeftNavBar/TvShowsDropdown";
import PeopleDropdown from "./LeftNavBar/PeopleDropdown";
import MoreDropdown from "./LeftNavBar/MoreDropdown";

/**
 * Wrapper for the left components of the navigation bar, including dropdowns for movies, TV shows, people, and more.
 */
const LeftComponentsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 30px;
  white-space: nowrap;

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 15px;
  }
`;

/**
 * LeftComponents displays various dropdown menus for the left side of the navigation bar.
 *
 * @component
 * @returns {JSX.Element} The left components of the navigation bar.
 */
const LeftComponents = () => {
  return (
    <LeftComponentsWrapper>
      <MoviesDropdown />
      <TvShowsDropdown />
      <PeopleDropdown />
      <MoreDropdown />
    </LeftComponentsWrapper>
  );
};

export default LeftComponents;
