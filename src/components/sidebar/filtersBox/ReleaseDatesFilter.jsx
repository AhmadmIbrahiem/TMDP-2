import React, { useState, useRef } from "react";
import { Container } from "./ReleaseDatesFilter.styles";
import DateInput from "./DataInput";

/**
 * Helper function to format the date to "YYYY-MM-DD".
 * @param {Date} date - The date to format.
 *
 * @returns {string} The formatted date string.
 */
const formatDate = (date) => {
  if (!date) return null;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * ReleaseDatesFilter component to allow users to select a range of release dates.
 *
 * @component
 * @param {Function} props.onDateChange - Function to handle changes in the date range.
 * @returns {JSX.Element} The release dates filter component.
 */
const ReleaseDatesFilter = ({ onDateChange }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const fromDateInputRef = useRef(null);
  const toDateInputRef = useRef(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);

    onDateChange(formatDate(date), formatDate(toDate));
  };

  const handleToDateChange = (date) => {
    setToDate(date);

    onDateChange(formatDate(fromDate), formatDate(date));
  };

  const triggerFromDatePicker = () => {
    fromDateInputRef.current.setFocus();
  };

  const triggerToDatePicker = () => {
    toDateInputRef.current.setFocus();
  };

  return (
    <Container>
      <h4>Release Dates</h4>
      <DateInput
        label="From"
        selectedDate={fromDate}
        onChange={handleFromDateChange}
        inputRef={fromDateInputRef}
        triggerDatePicker={triggerFromDatePicker}
      />
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
