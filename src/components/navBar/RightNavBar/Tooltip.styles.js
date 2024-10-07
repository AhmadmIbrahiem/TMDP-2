import styled from "@emotion/styled";

/**
 * Styled wrapper for the tooltip component.
 */
export const TooltipWrapper = styled.div`
  background-color: var(--text-color);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: black;
  font-size: var(--footer-font-size);
  left: 50%;
  padding: 10px;
  position: absolute;
  text-align: center;
  top: 110%;
  transform: translateX(-50%);
  width: 220px;
  z-index: 1000;

  &:before {
    border-color: transparent transparent white transparent;
    border-style: solid;
    border-width: 5px;
    content: "";
    left: 50%;
    position: absolute;
    top: -10px;
    transform: translateX(-50%);
  }
`;
