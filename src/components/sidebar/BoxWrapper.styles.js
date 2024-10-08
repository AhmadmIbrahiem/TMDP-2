import styled from "@emotion/styled";

/**
 * BoxWrapper is a styled container to standardize the appearance of the three filter boxes.
 */
export const BoxWrapper = styled.div`
  background: var(--text-color);
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 1.25rem;
  overflow: hidden;
  padding: 1rem;
  transition: height 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  @media (max-width: 770px) {
    width: 100%;
  }
`;
