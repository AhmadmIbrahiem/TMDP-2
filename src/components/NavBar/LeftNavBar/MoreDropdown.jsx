import React from "react";
import NavItemWithDropdown from "../NavItemWithDropdown";

/**
 * MoreDropdown component displaying a dropdown menu for the "More" section.
 * It provides links to discussions, leaderboard, support, and API pages.
 *
 * @component
 * @returns {JSX.Element} A dropdown menu with links for additional resources.
 */
const MoreDropdown = () => {
  return (
    <NavItemWithDropdown
      title="More"
      links={[
        { label: "Discussions", href: "/discussions" },
        { label: "Leaderboard", href: "/leaderboard" },
        { label: "Support", href: "/support" },
        { label: "API", href: "/api" },
      ]}
    />
  );
};

export default MoreDropdown;
