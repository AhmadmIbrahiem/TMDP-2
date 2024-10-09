import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { DateInputWrapper } from "./DataInput.styles";
import CustomDatePicker from "../cutomDatePicker/CustomDatePicker";

/**
 * DateInput component to display a date input field with a custom date picker.
 *
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - The label for the date input.
 * @param {Date} props.selectedDate - The currently selected date.
 * @param {Function} props.onChange - Function to handle date changes.
 * @param {Object} props.inputRef - Ref to access the input programmatically.
 * @param {Function} props.triggerDatePicker - Function to trigger the date picker.
 *
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
