import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import DateInput from "./DataInput";

// Container for the release dates filter
const Container = styled.div`
  margin-bottom: 20px;
`;

// Component to select release date range
const ReleaseDatesFilter = ({ onDateChange }) => {
  const [fromDate, setFromDate] = useState(null); // State for "From" date
  const [toDate, setToDate] = useState(null); // State for "To" date

  const fromDateInputRef = useRef(null); // Reference for "From" date input
  const toDateInputRef = useRef(null); // Reference for "To" date input

  // Handle change in "From" date
  const handleFromDateChange = (date) => {
    setFromDate(date);
    onDateChange(date, toDate); // Notify parent of date change
  };

  // Handle change in "To" date
  const handleToDateChange = (date) => {
    setToDate(date);
    onDateChange(fromDate, date); // Notify parent of date change
  };

  // Trigger date picker for "From" date
  const triggerFromDatePicker = () => {
    fromDateInputRef.current.setFocus();
  };

  // Trigger date picker for "To" date
  const triggerToDatePicker = () => {
    toDateInputRef.current.setFocus();
  };

  return (
    <Container>
      <h4>Release Dates</h4>
      {/* Date input for "From" date */}
      <DateInput
        label="From"
        selectedDate={fromDate}
        onChange={handleFromDateChange}
        inputRef={fromDateInputRef}
        triggerDatePicker={triggerFromDatePicker}
      />
      {/* Date input for "To" date */}
      <DateInput
        label="To"
        selectedDate={toDate}
        onChange={handleToDateChange}
        inputRef={toDateInputRef}
        triggerDatePicker={triggerToDatePicker}
      />
    </Container>
  );
};

export default ReleaseDatesFilter;
