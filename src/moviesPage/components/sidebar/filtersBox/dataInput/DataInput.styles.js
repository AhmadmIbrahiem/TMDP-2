import styled from "@emotion/styled";

/**
 * Wrapper for the date input and its label.
 */
export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.625rem;

  label {
    font-size: var(--font-size);
    margin-bottom: 0.3125rem;
  }

  .date-picker-wrapper {
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
  }

  input {
    border-radius: 0.3125rem;
    border: 1px solid #ccc;
    font-size: var(--font-size);
    padding-right: 2.5rem;
    padding: 0.3125rem 0.625rem;
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
    border-radius: 0.3125rem;
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5rem;
    position: absolute;
    right: -0.7rem;
  }
`;
