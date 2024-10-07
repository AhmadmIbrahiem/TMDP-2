import styled from "@emotion/styled";

/**
 * BoxWrapper is a styled container to standardize the appearance of the three filter boxes.
 */
export const BoxWrapper = styled.div`
  background: var(--text-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 20px;
  transition: height 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  @media (max-width: 770px) {
    width: 100%;
  }
`;
