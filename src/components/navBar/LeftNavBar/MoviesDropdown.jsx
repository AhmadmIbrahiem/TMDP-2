import React from "react";
import NavItemWithDropdown from "../navItemWithDropDown/NavItemWithDropdown";

/**
 * MoviesDropdown component displaying a dropdown menu for the "Movies" section.
 *
 * @returns {JSX.Element} A dropdown menu with links to movie categories.
 */
const MoviesDropdown = () => {
  return (
    <NavItemWithDropdown
      title="Movies"
      links={[
        { label: "Popular", href: "/movie/popular" },
        { label: "Now Playing", href: "/movie/now-playing" },
        { label: "Upcoming", href: "/movie/upcoming" },
        { label: "Top Rated", href: "/movie/top-rated" },
      ]}
    />
  );
};

export default MoviesDropdown;
