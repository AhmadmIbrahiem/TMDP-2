import React from "react";
import styled from "@emotion/styled";

// Wrapper for each footer column
const ColumnWrapper = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;

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

const FooterColumn = ({ title, links }) => (
  <ColumnWrapper>
    <h3>{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </ColumnWrapper>
);

export default FooterColumn;
