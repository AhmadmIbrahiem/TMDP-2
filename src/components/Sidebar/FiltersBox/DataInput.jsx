// DateInput.jsx
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import CustomDatePicker from "./CustomDatePicker ";

const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: var(----font-size);
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
    font-size: var(----font-size);
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
