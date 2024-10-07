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
  gap: 30px;
  margin: 0 auto;
  max-width: 1500px;
  padding-top: 100px;
  padding: 20px 30px;

  @media (max-width: 770px) {
    flex-direction: column;
    padding: 20px 15px;
  }
`;
