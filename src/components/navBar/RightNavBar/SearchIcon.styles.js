import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";

/**
 * Styled icon for the search action.
 */
export const StyledSearchIcon = styled(FaSearch)`
  color: #76c7c0;
  cursor: pointer;
  font-size: var(--font-size);
`;

/**
 * Styled input field for search queries, which is toggled by the search icon.
 */
export const SearchInput = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-left: 10px;
  padding: 5px;
  display: ${(props) => (props.visible ? "inline-block" : "none")};
`;
