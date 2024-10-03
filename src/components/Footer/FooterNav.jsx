import React from "react";
import styled from "styled-components";
import JoinSection from "./JoinSection";
import FooterColumn from "./FooterColumn";

// Wrapper for footer navigation
const FooterNavWrapper = styled.nav`
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
