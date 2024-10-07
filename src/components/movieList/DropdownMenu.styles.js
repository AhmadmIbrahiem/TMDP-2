import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  background-color: var(--text-color);
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: absolute;
  right: 0;
  top: 30px;
  width: 150px;
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
  padding: 10px 8px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: var(--secondary-color);
  }

  & svg {
    color: var(--invert-text-color);
    font-size: var(--font-size);
    margin-right: 8px;
  }
`;
