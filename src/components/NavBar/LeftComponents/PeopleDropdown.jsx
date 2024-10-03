// PeopleDropdown.js
import React from "react";
import NavItemWithDropdown from "../NavItemWithDropdown";

const PeopleDropdown = () => {
  return (
    <NavItemWithDropdown
      title="People"
      links={[{ label: "Popular People", href: "/people/popular" }]}
    />
  );
};

export default PeopleDropdown;
