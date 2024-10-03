// MoviesDropdown.js
import React from "react";
import NavItemWithDropdown from "../NavItemWithDropdown";

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
