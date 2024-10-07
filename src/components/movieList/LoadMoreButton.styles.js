import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: var(--accent-color);
  border-radius: 5px;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: var(--font-size);
  margin-bottom: 20px;
  padding: 10px 20px;
  width: 100%;

  &:hover {
    color: var(--invert-text-color);
  }
`;
