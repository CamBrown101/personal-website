import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav id="nav-bar">
      <nav id="nav-menu">
        <NavLink exact to="/" className="nav-menu-item" id="nav-menu-home">
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          className="nav-menu-item"
          id="nav-menu-about">
          About
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="nav-menu-item"
          id="nav-menu-contact">
          Contact
        </NavLink>
        <NavLink
          exact
          to="/projects"
          className="nav-menu-item"
          id="nav-menu-projects">
          Projects
        </NavLink>
      </nav>
    </nav>
  );
};
