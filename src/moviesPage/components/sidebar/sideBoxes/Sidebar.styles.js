import styled from "@emotion/styled";

/**
 * Styled container for the sidebar that holds filters, sorting, and the search button.
 */
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.25rem;
  max-width: 12rem;
  padding: 0.625rem;
  width: 100%;
  margin-top: 0.5rem;

  @media (max-width: 770px) {
    max-width: 90%;
    margin-top: 3.125rem;
  }
`;
