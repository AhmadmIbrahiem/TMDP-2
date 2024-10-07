import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import EllipsisButton from "./EllipsisButton";
import DropdownMenu from "./DropdownMenu";

/**
 * Styled component to position the ellipsis menu using Emotion.
 */
const EllipsisWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
`;

/**
 * EllipsisMenuWrapper component that manages the display of a dropdown menu with an ellipsis button.
 *
 * @component
 * @param {Function} props.toggleBlur - Function to toggle blur effect when the menu is opened.
 * @returns {JSX.Element} The EllipsisMenuWrapper component.
 */
const EllipsisMenuWrapper = ({ toggleBlur }) => {
  const [showMenu, setShowMenu] = useState(false);
  const ellipsisRef = useRef(null);

  const handleEllipsisClick = () => {
    setShowMenu(!showMenu);
    toggleBlur(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ellipsisRef.current && !ellipsisRef.current.contains(event.target)) {
        setShowMenu(false);
        toggleBlur(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ellipsisRef, toggleBlur]);

  return (
    <EllipsisWrapper ref={ellipsisRef}>
      <EllipsisButton onClick={handleEllipsisClick} />
      <DropdownMenu showMenu={showMenu} />
    </EllipsisWrapper>
  );
};

export default EllipsisMenuWrapper;
