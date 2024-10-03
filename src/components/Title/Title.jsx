import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  color: #333;
`;

const Title = ({ text }) => {
  return <Heading>Popular Movies</Heading>;
};

export default Title;
