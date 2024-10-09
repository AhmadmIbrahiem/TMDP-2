import styled from "@emotion/styled";

/**
 * Wrapper for the entire Home page, centers content on the screen.
 */
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f8f8;
`;

/**
 * Logo for the Home page.
 */
export const LogoImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

/**
 * Welcome text for the Home page.
 */
export const WelcomeText = styled.h1`
  font-size: 2rem;
  color: #333;
`;
