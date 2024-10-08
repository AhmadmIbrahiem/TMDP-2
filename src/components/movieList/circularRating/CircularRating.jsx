import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { RatingWrapper } from "./CircularRating.styles";
import "react-circular-progressbar/dist/styles.css";

/**
 * CircularRating component displaying a percentage rating inside a circular progress bar.
 *
 * @param   {Object}      props        - Component props.
 * @param   {number}      props.rating - Rating value for the circular progress bar (0-100).
 *
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
