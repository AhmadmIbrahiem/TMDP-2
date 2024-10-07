import styled from "@emotion/styled";

export const FooterNavWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
