import React from "react";
import NavItemWithDropdown from "../NavItemWithDropdown";

/**
 * MoviesDropdown component displaying a dropdown menu for the "Movies" section.
 * It provides links to different movie categories such as popular, now playing, upcoming, and top-rated.
 *
 * @component
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
