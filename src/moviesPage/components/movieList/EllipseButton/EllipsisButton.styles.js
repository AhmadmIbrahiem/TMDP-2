import styled from "@emotion/styled";

export const EllipsisButtonWrapper = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0.2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
  }

  & svg {
    color: rgba(255, 255, 255, 0.4);
    font-size: var(--font-size);
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: rgba(255, 255, 255, 0.7);
  }
`;
