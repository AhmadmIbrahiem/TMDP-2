import styled from "@emotion/styled";

/**
 * Wrapper component for centering the search button.
 */
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * Styled button component that changes its appearance based on whether it's clickable.
 */
export const SearchButton = styled.button`
  padding: 0.625rem 4.375rem;
  background-color: ${({ isClickable }) =>
    isClickable ? "var(--accent-color)" : "var(--secondary-color)"};
  color: ${({ isClickable }) => (isClickable ? "#fff" : "#555")};
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  border-radius: 1.75rem;
  width: 18.75rem;
  border: none;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "not-allowed")};
  pointer-events: ${({ isClickable }) => (isClickable ? "auto" : "none")};
  transition: var(--bg-color) 0.3s ease;

  &:hover {
    background-color: ${({ isClickable }) =>
      isClickable ? "#0d253f" : "transparent"};
  }
`;
