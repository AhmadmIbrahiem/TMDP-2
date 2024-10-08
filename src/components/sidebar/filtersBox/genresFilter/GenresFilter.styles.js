import styled from "@emotion/styled";

/**
 * Styled wrapper for genres in a grid layout.
 */
export const GenresWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.1875rem;
`;

/**
 * Styled genre button.
 */
export const GenreButton = styled.button`
  background-color: var(--secondary-color);
  border-radius: 1.875rem;
  border: none;
  cursor: pointer;
  font-size: var(--footer-font-size);
  padding: 0.5rem 0.8rem;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    color: var(--text-color);
  }

  &.active {
    background-color: var(--accent-color);
    color: var(--text-color);
  }
`;
