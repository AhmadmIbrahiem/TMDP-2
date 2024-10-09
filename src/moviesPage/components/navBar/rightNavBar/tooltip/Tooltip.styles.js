import styled from "@emotion/styled";

/**
 * Styled wrapper for the tooltip component.
 */
export const TooltipWrapper = styled.div`
  background-color: var(--text-color);
  border-radius: 0.3125rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
  color: black;
  font-size: var(--footer-font-size);
  left: 50%;
  padding: 0.5rem;
  position: absolute;
  text-align: center;
  top: 110%;
  transform: translateX(-50%);
  width: 10rem;
  z-index: 1000;

  &:before {
    border-color: transparent transparent white transparent;
    border-style: solid;
    border-width: 0.2rem;
    content: "";
    left: 50%;
    position: absolute;
    top: -0.5rem;
    transform: translateX(-50%);
  }
`;
