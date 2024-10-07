import React from "react";
import styled from "@emotion/styled";

/**
 * Styled wrapper for the tooltip component.
 */
const TooltipWrapper = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  z-index: 1000;
  width: 220px;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

/**
 * Tooltip component to display a message in a styled tooltip.
 *
 * @component
 * @param {string} props.message - The message to display inside the tooltip.
 * @returns {JSX.Element} A tooltip component that displays a message.
 */
const Tooltip = ({ message }) => {
  return <TooltipWrapper>{message}</TooltipWrapper>;
};

export default Tooltip;
