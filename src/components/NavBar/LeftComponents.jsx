import React from "react";
import styled from "styled-components";

import MoviesDropdown from "./LeftComponents/MoviesDropdown";
import TvShowsDropdown from "./LeftComponents/TvShowsDropdown";
import PeopleDropdown from "./LeftComponents/PeopleDropdown";
import MoreDropdown from "./LeftComponents/MoreDropdown";

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
