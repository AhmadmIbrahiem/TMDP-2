import React, { useState } from "react";
import styled from "styled-components";

const NavItem = styled.li`
  list-style: none;
  position: relative;
`;

const NavLink = styled.a`
  color: var(--text-color);
  cursor: pointer;
  display: inline-block;
  padding: 8px 15px;
  position: relative;
  text-decoration: none;
`;

const DropdownMenu = styled.ul`
  background-color: var(--text-color);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: var(--invert-text-color);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  left: 0;
  list-style-type: none;
  padding: 10px 0;
  position: absolute;
  top: 100%;
  transition: opacity 0.3s ease;
  width: 200px;
  z-index: 1000;

  & li {
    padding: 10px 15px;
  }

  & li:hover {
    background-color: #f1f1f1;
  }

  & a {
    text-decoration: none;
    color: var(--invert-text-color);
    display: block;
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;

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
