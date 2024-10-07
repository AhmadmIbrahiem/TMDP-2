import styled from "@emotion/styled";

/**
 * Styled container for the sidebar that holds filters, sorting, and the search button.
 */
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  max-width: 300px;
  padding: 10px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 770px) {
    max-width: 90%;
    margin-top: 50px;
  }
`;
