// TvShowsDropdown.js
import React from "react";
import NavItemWithDropdown from "../NavItemWithDropdown";

const TvShowsDropdown = () => {
  return (
    <NavItemWithDropdown
      title="TV Shows"
      links={[
        { label: "Popular", href: "/tv/popular" },
        { label: "Airing Today", href: "/tv/airing-today" },
        { label: "On TV", href: "/tv/on-tv" },
        { label: "Top Rated", href: "/tv/top-rated" },
      ]}
    />
  );
};

export default TvShowsDropdown;
