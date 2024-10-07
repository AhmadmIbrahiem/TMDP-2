import React from "react";
import styled from "@emotion/styled";
import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa";

// Wrapper to make sure the dropdown is positioned and in front of the movie card
const DropdownWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 10;
  padding: 10px;
  width: 150px;
  display: ${(props) => (props.showMenu ? "block" : "none")};
`;

const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #f1f1f1;
  }

  & svg {
    margin-right: 8px;
    color: black;
    font-size: 1rem;
  }
`;

const DropdownMenu = ({ showMenu }) => {
  return (
    <DropdownWrapper showMenu={showMenu}>
      <DropdownList>
        <DropdownItem>
          <FaListUl /> Add to List
        </DropdownItem>
        <DropdownItem>
          <FaHeart /> Favourite
        </DropdownItem>
        <DropdownItem>
          <FaBookmark /> Watchlist
        </DropdownItem>
        <DropdownItem>
          <FaStar /> Your Rating
        </DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
};

export default DropdownMenu;
