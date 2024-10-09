import styled from "@emotion/styled";

/**
 * Wrapper for the right-side action buttons.
 */
export const RightActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-right: 50px;

  @media (max-width: 770px) {
    flex-direction: column;
    margin-right: 0;
    gap: 0.9375rem;
  }
`;
