import React from "react";
import { StyledDatePicker } from "./CustomDatePicker.styles";
import "react-datepicker/dist/react-datepicker.css";

/**
 * CustomDatePicker component to display a date picker with enhanced features.
 *
 *
 * @param {Object} props - Component props.
 * @param {Date} props.selectedDate - The currently selected date.
 * @param {Function} props.onChange - Function to handle date change.
 * @param {Object} props.inputRef - Ref to access the input programmatically.
 *
 * @returns {JSX.Element} The custom date picker component.
 */
const CustomDatePicker = ({ selectedDate, onChange, inputRef }) => (
  <StyledDatePicker
    selected={selectedDate}
    onChange={onChange}
    dateFormat="dd/MM/yyyy"
    placeholderText="dd / mm / yyyy"
    ref={inputRef}
    showYearDropdown
    yearDropdownItemNumber={5}
    scrollableYearDropdown
    showMonthDropdown
    dropdownMode="select"
  />
);

export default CustomDatePicker;
