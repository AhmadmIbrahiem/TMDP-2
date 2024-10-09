import React from "react";
import { Link } from "react-router-dom";
import NavItemWithDropdown from "../navItemWithDropDown/NavItemWithDropdown";

/**
 * MoviesDropdown component displaying a dropdown menu for the "Movies" section.
 *
 * @returns {JSX.Element} A dropdown menu with links, all directing to "/movies".
 */
const MoviesDropdown = () => {
  return (
    <NavItemWithDropdown
      title={
        <Link to="/movies" style={{ textDecoration: "none", color: "inherit" }}>
          Movies
        </Link>
      }
      links={[
        { label: "Popular", href: "/movies" },
        { label: "Now Playing", href: "/movies" },
        { label: "Upcoming", href: "/movies" },
        { label: "Top Rated", href: "/movies" },
      ]}
    />
  );
};

export default MoviesDropdown;
