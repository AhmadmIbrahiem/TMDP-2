import React from "react";
import styled from "@emotion/styled";

/**
 * Styled button component for loading more movies.
 */
const Button = styled.button`
  background-color: var(--accent-color);
  border-radius: 5px;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: var(--font-size);
  margin-bottom: 20px;
  padding: 10px 20px;
  width: 100%;
  &:hover {
    color: var(--invert-text-color);
  }
`;

/**
 * LoadMoreButton component that triggers loading more movies on click.
 *
 * @component
 * @param {Function} props.onClick - Function to call when the button is clicked.
 * @returns {JSX.Element} Button element for loading more content.
 */
const LoadMoreButton = ({ onClick }) => {
  return <Button onClick={onClick}>Load More</Button>;
};

export default LoadMoreButton;
