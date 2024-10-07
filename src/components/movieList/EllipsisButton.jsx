import React from "react";
import { EllipsisButtonWrapper } from "./EllipsisButton.styles";
import { FaEllipsisH } from "react-icons/fa";

/**
 * EllipsisButton component rendering an ellipsis icon button.
 *
 *
 * @param   {Function}       props.onClick - Callback function triggered on button click.
 *
 *
 * @returns {JSX.Element} The EllipsisButton component.
 */
const EllipsisButton = ({ onClick }) => {
  return (
    <EllipsisButtonWrapper onClick={onClick}>
      <FaEllipsisH />
    </EllipsisButtonWrapper>
  );
};

export default EllipsisButton;
