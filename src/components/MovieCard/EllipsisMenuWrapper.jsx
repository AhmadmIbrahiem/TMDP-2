import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import EllipsisButton from "./EllipsisButton";
import DropdownMenu from "./DropdownMenu";

// Styled component to position the ellipsis menu
const EllipsisWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
`;

const EllipsisMenuWrapper = ({ toggleBlur }) => {
  const [showMenu, setShowMenu] = useState(false); // Manages the visibility of the dropdown menu
  const ellipsisRef = useRef(null); // Reference to track clicks outside the menu

  // Toggles the menu and blur effect when the ellipsis button is clicked
  const handleEllipsisClick = () => {
    setShowMenu(!showMenu);
    toggleBlur(!showMenu);
  };

  // Adds an event listener to detect clicks outside the menu, closes the menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ellipsisRef.current && !ellipsisRef.current.contains(event.target)) {
        setShowMenu(false);
        toggleBlur(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside); // Adds event listener when the component mounts

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Removes event listener when the component unmounts
    };
  }, [ellipsisRef, toggleBlur]);

  return (
    <EllipsisWrapper ref={ellipsisRef}>
      <EllipsisButton onClick={handleEllipsisClick} />{" "}
      {/* Ellipsis button to toggle the menu */}
      <DropdownMenu showMenu={showMenu} />{" "}
      {/* Renders the dropdown menu if `showMenu` is true */}
    </EllipsisWrapper>
  );
};

export default EllipsisMenuWrapper;
