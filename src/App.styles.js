import styled from "@emotion/styled";

/**
 * Wrapper for the entire app, applying a global font style.
 */
export const AppWrapper = styled.div`
  font-family: "Arial", sans-serif;
`;

/**
 * Container for the main content (sidebar and movie list), with responsive behavior.
 */
export const Container = styled.div`
  display: flex;
  gap: 1.875rem;
  margin: 0 auto;
  /* Whenever I convert the max width to rem the interface is merged to the top left */
  max-width: 1500px;
  padding-top: 6.25rem;
  padding: 1.25rem 1.875rem;
  margin-top: 3.125rem;

  @media (max-width: 770px) {
    flex-direction: column;
    padding: 1.25rem 0.9375rem;
  }
`;
