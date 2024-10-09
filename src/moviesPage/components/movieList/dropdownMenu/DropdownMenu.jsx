import React from "react";
import {
  DropdownWrapper,
  DropdownList,
  DropdownItem,
} from "./DropdownMenu.styles";
import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa";

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
