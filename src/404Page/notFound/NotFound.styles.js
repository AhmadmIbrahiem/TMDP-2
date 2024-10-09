import styled from "@emotion/styled";

/**
 * Wrapper for the entire 404 page, centers content on the screen.
 */
export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  text-align: center;
`;

/**
 * Title for the 404 error.
 */
export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  margin: 0;
  color: #333;
`;

/**
 * Message for the 404 page.
 */
export const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin: 10px 0 20px;
`;

/**
 * Button to navigate back to the home page.
 */
export const HomeButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
