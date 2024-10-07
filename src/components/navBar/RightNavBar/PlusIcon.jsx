import React, { useState } from "react";
import { StyledPlusIcon } from "./PlusIcon.styles";
import Tooltip from "./Tooltip";

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
