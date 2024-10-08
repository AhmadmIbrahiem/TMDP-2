import React from "react";
import NavItemWithDropdown from "../navItemWithDropDown/NavItemWithDropdown";

/**
 * TvShowsDropdown component displaying a dropdown menu for the "TV Shows" section.
 *
 * @returns {JSX.Element} A dropdown menu with links to TV show categories.
 */
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
