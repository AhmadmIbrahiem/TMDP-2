import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  background-color: var(--text-color);
  border-radius: 0.5rem;
  box-shadow: 0rem 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  position: absolute;
  right: 0;
  top: 1.6rem;
  z-index: 10;
  display: ${(props) => (props.showMenu ? "block" : "none")};
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DropdownItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0.625rem 0.5rem;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: var(--secondary-color);
  }

  & svg {
    color: var(--invert-text-color);
    font-size: var(--font-size);
    margin-right: 0.5rem;
  }
`;
