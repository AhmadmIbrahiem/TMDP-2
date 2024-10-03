// MoreDropdown.js
import React from "react";
import NavItemWithDropdown from "../NavItemWithDropdown";

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
