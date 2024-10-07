import React from "react";
import styled from "@emotion/styled";
import { FaEllipsisH } from "react-icons/fa";

/**
 * Button wrapper for the ellipsis button using Emotion.
 */
const EllipsisButtonWrapper = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
  }

  & svg {
    color: rgba(255, 255, 255, 0.4);
    font-size: var(--font-size);
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: rgba(255, 255, 255, 0.7);
  }
`;

/**
 * EllipsisButton component rendering an ellipsis icon button.
 *
 * @component
 * @param {Function} props.onClick - Callback function triggered on button click.
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
