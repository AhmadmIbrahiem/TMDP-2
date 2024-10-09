import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: var(--accent-color);
  border-radius: 0.3125rem;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: var(--font-size);
  margin-bottom: 1rem;
  padding: 0.625rem 1.25rem;
  width: 100%;

  &:hover {
    color: var(--invert-text-color);
  }
`;
