import React from "react";
import { LeftComponentsWrapper } from "./LeftComponents.styles";
import MoviesDropdown from "./LeftNavBar/MoviesDropdown";
import TvShowsDropdown from "./LeftNavBar/TvShowsDropdown";
import PeopleDropdown from "./LeftNavBar/PeopleDropdown";
import MoreDropdown from "./LeftNavBar/MoreDropdown";

/**
 * LeftComponents displays various dropdown menus for the left side of the navigation bar.
 *
 *
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
