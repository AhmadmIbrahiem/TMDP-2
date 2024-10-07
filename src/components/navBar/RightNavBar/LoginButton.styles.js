import styled from "@emotion/styled";

/**
 * Styled button for the login action.
 */
export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: var(--font-size);

  @media (max-width: 480px) {
    font-size: var(--footer-font-size);
  }
`;
