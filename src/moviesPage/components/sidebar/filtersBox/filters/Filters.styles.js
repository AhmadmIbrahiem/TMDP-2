import styled from "@emotion/styled";

/**
 * Styled wrapper for filter content.
 */
export const FilterContent = styled.div`
  background: var(--text-color);
  border-radius: 0.625rem;
  margin-top: 0.625rem;
  transition: all 0.3s ease;
`;

/**
 * Styled heading for the filter section.
 */
export const Heading = styled.h3`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: var(--header-font-size);
  font-weight: var(--font-weight);
  justify-content: space-between;
`;
