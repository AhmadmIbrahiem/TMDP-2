import React, { useState } from "react";
import { NavItem, NavLink, DropdownMenu } from "./NavItemWithDropdown.styles";

/**
 * NavItemWithDropdown component renders a navigation item that shows a dropdown on hover.
 *
 * @param   {Object}        props       - Component props.
 * @param   {string}        props.title - The title of the navigation item.
 * @param   {Array<Object>} props.links - The links to be displayed in the dropdown.
 *
 * @returns {JSX.Element} The navigation item with a dropdown.
 */
const NavItemWithDropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <NavItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink href="#">{title}</NavLink>
      <DropdownMenu isOpen={isOpen}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </DropdownMenu>
    </NavItem>
  );
};

export default NavItemWithDropdown;
