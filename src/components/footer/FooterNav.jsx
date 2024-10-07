import React from "react";
import { FooterNavWrapper } from "./FooterNav.styles";
import JoinSection from "./JoinSection";
import FooterColumn from "./FooterColumn";

/**
 * Navigation section of the footer containing multiple columns and the join section.
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

export default FooterNav;
