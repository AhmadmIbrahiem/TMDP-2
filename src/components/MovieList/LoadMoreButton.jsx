import React from "react";
import styled from "styled-components";

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

const LoadMoreButton = ({ onClick }) => {
  return <Button onClick={onClick}>Load More</Button>;
};

export default LoadMoreButton;
