import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";

// Circular rating component using Emotion
const RatingWrapper = styled.div`
  background-color: #081c22;
  border-radius: 50%;
  bottom: -15px;
  font-family: var(--font-family);
  height: 40px;
  left: 10px;
  padding: 2px;
  position: absolute;
  width: 40px;
  z-index: 1;
`;

const CircularRating = ({ rating }) => {
  const ratingColor = rating >= 70 ? "#21d07a" : "#d2d531";

  return (
    <RatingWrapper>
      <CircularProgressbar
        value={rating}
        text={`${rating.toFixed(0)}%`}
        styles={buildStyles({
          pathColor: ratingColor,
          textColor: "var(--text-color)",
          trailColor: "#204529",
          backgroundColor: "#081c22",
          textSize: "35px",
        })}
      />
    </RatingWrapper>
  );
};

export default CircularRating;
