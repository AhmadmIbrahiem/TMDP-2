import styled from "@emotion/styled";

/**
 * Styled grid layout for displaying movies.
 */
export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 1rem;

  @media (max-width: 1235px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
