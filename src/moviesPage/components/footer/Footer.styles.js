import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2rem 1.25rem;
  text-align: left;
`;

export const FooterNavWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 56.25rem) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const ColumnWrapper = styled.div`
  margin-bottom: 1.25rem;

  h3 {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    margin-bottom: 0.9375rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: var(--text-color);
        text-decoration: none;

        &:hover {
          color: var(--accent-color);
        }
      }
    }
  }
`;

export const BottomWrapper = styled.section`
  color: var(--text-color);
  font-size: var(--footer-font-size);
  margin-top: 2rem;
  text-align: center;
`;

export const JoinWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    margin-bottom: 1.25rem;
  }

  a {
    background-color: var(--accent-color);
    border-radius: 30px;
    color: var(--text-color);
    font-weight: var(--font-weight);
    padding: 0.625rem 1.25rem;
    text-decoration: none;
  }
`;

export const LogoImage = styled.img`
  height: 7rem;
  width: 7rem;
`;
