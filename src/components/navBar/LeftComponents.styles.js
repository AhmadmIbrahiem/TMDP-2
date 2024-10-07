import styled from "@emotion/styled";

/**
 * Wrapper for the left components of the navigation bar, including dropdowns for movies, TV shows, people, and more.
 */
export const LeftComponentsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 30px;
  white-space: nowrap;

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 15px;
  }
`;
