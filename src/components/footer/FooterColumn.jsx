import React from "react";
import { ColumnWrapper } from "./FooterColumn.styles";

/**
 * Footer column displaying a list of links.
 *
 *
 * @param   {Object}                               props - React props.
 * @param   {string}                               props.title - Title of the column.
 * @param   {Array<{label: string, href: string}>} props.links - Array of link objects containing label and href.
 *
 * @returns {JSX.Element} JSX for the footer column.
 */
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
