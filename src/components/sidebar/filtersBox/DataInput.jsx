import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import CustomDatePicker from "./CustomDatePicker ";

/**
 * Wrapper for the date input and its label.
 */
const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: var(--font-size);
    margin-bottom: 5px;
  }

  .date-picker-wrapper {
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
  }

  input {
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: var(--font-size);
    padding-right: 40px;
    padding: 5px 10px;
    width: 100%;
  }

  input:focus {
    border-color: #01b4e4;
    outline: none;
  }

  input::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  .calendar-icon {
    background-color: var(--accent-color);
    border-radius: 5px;
    color: var(--text-color);
    cursor: pointer;
    padding: 8px;
    position: absolute;
    right: -20px;
  }
`;

/**
 * DateInput component to display a date input field with a custom date picker.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.label - The label for the date input.
 * @param {Date} props.selectedDate - The currently selected date.
 * @param {Function} props.onChange - Function to handle date changes.
 * @param {Object} props.inputRef - Ref to access the input programmatically.
 * @param {Function} props.triggerDatePicker - Function to trigger the date picker.
 * @returns {JSX.Element} The date input component with a label.
 */
const DateInput = ({
  label,
  selectedDate,
  onChange,
  inputRef,
  triggerDatePicker,
}) => (
  <DateInputWrapper>
    <label>{label}</label>
    <div className="date-picker-wrapper">
      <CustomDatePicker
        selectedDate={selectedDate}
        onChange={onChange}
        inputRef={inputRef}
      />
      <FaCalendarAlt className="calendar-icon" onClick={triggerDatePicker} />
    </div>
  </DateInputWrapper>
);

export default DateInput;
