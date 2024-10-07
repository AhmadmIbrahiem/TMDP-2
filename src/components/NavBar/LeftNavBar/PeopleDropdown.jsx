import React from "react";
import NavItemWithDropdown from "../NavItemWithDropdown";

/**
 * PeopleDropdown component displaying a dropdown menu for the "People" section.
 * It provides a link to the popular people page.
 *
 * @component
 * @returns {JSX.Element} A dropdown menu with a link to the popular people page.
 */
const PeopleDropdown = () => {
  return (
    <NavItemWithDropdown
      title="People"
      links={[{ label: "Popular People", href: "/people/popular" }]}
    />
  );
};

export default PeopleDropdown;
