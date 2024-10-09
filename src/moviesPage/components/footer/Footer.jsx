import React from "react";
import {
  FooterWrapper,
  FooterNavWrapper,
  ColumnWrapper,
  BottomWrapper,
  JoinWrapper,
  LogoImage,
} from "./Footer.styles";
import logo from "../../../assets/Logo2.svg";

/**
 * Join Section component rendering a "Join the Community" section with a logo and link.
 *
 * @returns {JSX.Element} JSX for the join section.
 */
const JoinSection = () => {
  return (
    <JoinWrapper>
      <LogoImage src={logo} alt="Logo" />
      <a href="/signup">Join the Community</a>
    </JoinWrapper>
  );
};

/**
 * Footer Column displaying a list of links.
 *
 * @param {Object}                               props       - React props.
 * @param {string}                               props.title - Title of the column.
 * @param {Array<{label: string, href: string}>} props.links - Array of link objects containing label and href.
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

/**
 * Footer Navigation section containing multiple columns and the join section.
 *
 * @returns {JSX.Element} JSX for the footer navigation.
 */
const FooterNav = () => {
  return (
    <FooterNavWrapper>
      <JoinSection />
      <FooterColumn
        title="The Basics"
        links={[
          { label: "About TMDB", href: "/about" },
          { label: "Contact Us", href: "/about/staying-in-touch" },
          { label: "Support Forums", href: "/talk" },
          { label: "API", href: "https://developer.themoviedb.org/docs" },
          { label: "System Status", href: "https://status.themoviedb.org/" },
        ]}
      />
      <FooterColumn
        title="Get Involved"
        links={[
          { label: "Contribution Bible", href: "/bible" },
          { label: "Add New Movie", href: "/movie/new" },
          { label: "Add New TV Show", href: "/tv/new" },
        ]}
      />
      <FooterColumn
        title="Community"
        links={[
          { label: "Guidelines", href: "/documentation/community/guidelines" },
          { label: "Discussions", href: "/discuss" },
          { label: "Leaderboard", href: "/leaderboard" },
        ]}
      />
      <FooterColumn
        title="Legal"
        links={[
          { label: "Terms of Use", href: "/terms-of-use" },
          { label: "API Terms of Use", href: "/api-terms-of-use" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "DMCA Policy", href: "/dmca-policy" },
        ]}
      />
    </FooterNavWrapper>
  );
};

/**
 * Footer Bottom component showing build information.
 *
 * @returns {JSX.Element} JSX for the footer's bottom section.
 */
const FooterBottom = () => {
  return <BottomWrapper>Build 13f37d1 (7903)</BottomWrapper>;
};

/**
 * Footer component containing navigation and bottom build info.
 *
 * @returns {JSX.Element} JSX for the full footer.
 */
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav />
      <FooterBottom />
    </FooterWrapper>
  );
};

export default Footer;
