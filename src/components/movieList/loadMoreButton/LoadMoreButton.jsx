import React from "react";
import { Button } from "./LoadMoreButton.styles";

/**
 * LoadMoreButton component that triggers loading more movies on click.
 *
 * @param {Function} props.onClick - Function to call when the button is clicked.
 *
 * @returns {JSX.Element} Button element for loading more content.
 */
const LoadMoreButton = ({ onClick }) => {
  return <Button onClick={onClick}>Load More</Button>;
};

export default LoadMoreButton;
