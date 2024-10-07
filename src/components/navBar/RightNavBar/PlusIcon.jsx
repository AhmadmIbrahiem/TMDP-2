import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styled from "@emotion/styled";
import Tooltip from "./Tooltip"; // Assuming Tooltip is in a parent folder

/**
 * Styled icon for the plus symbol.
 */
const StyledPlusIcon = styled(FaPlus)`
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
`;

/**
 * PlusIcon component that toggles a tooltip when clicked.
 *
 * @component
 * @returns {JSX.Element} The PlusIcon component with a tooltip on click.
 */
const PlusIcon = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePlusClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div style={{ position: "relative" }}>
      <StyledPlusIcon onClick={handlePlusClick} />
      {showTooltip && (
        <Tooltip message="Can't find a movie or TV show? Login to create it." />
      )}
    </div>
  );
};

export default PlusIcon;
