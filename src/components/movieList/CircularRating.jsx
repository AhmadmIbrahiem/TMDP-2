import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";

/**
 * Wrapper for the circular rating component using Emotion.
 */
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

/**
 * CircularRating component displaying a percentage rating inside a circular progress bar.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.rating - Rating value for the circular progress bar (0-100).
 * @returns {JSX.Element} The CircularRating component.
 */
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
