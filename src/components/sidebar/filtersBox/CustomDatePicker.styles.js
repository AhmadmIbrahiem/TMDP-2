import styled from "@emotion/styled";
import DatePicker from "react-datepicker";

/**
 * Styled wrapper to customize the date picker.
 */
export const StyledDatePicker = styled(DatePicker)`
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: var(--font-size);
  padding: 10px;
  width: 100%;

  &:focus {
    border-color: #76c7c0;
    outline: none;
  }
`;
