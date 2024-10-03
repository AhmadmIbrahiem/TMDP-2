// CustomDatePicker.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // A react Library that enhanced the datePicker Feature

const CustomDatePicker = ({ selectedDate, onChange, inputRef }) => (
  <DatePicker
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
