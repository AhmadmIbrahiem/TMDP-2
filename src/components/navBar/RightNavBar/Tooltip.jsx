import React from "react";
import { TooltipWrapper } from "./Tooltip.styles";

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
