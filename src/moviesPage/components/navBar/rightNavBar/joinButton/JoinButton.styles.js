import styled from "@emotion/styled";

/**
 * Styled button for joining TMDB.
 */
export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: var(--font-color);

  @media (max-width: 480px) {
    font-size: var(--footer-font-size);
  }
`;
