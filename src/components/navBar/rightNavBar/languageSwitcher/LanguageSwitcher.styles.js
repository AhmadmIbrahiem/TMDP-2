import styled from "@emotion/styled";

/**
 * Styled component for the language switcher.
 */
export const StyledSwitcher = styled.span`
  border-radius: 5px;
  border: 1px solid white;
  color: var(--text-color);
  cursor: pointer;
  font-size: var(--footer-font-size);
  padding: 0.2rem 0.4rem;

  &:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
  }

  @media (max-width: 480px) {
    font-size: var(--footer-font-size);
    padding: 0.1875rem 0.5rem;
  }
`;
