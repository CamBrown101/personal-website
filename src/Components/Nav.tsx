import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav id="nav-bar">
      <nav id="nav-menu">
        <NavLink className="nav-menu-item" id="nav-menu-home" to="/">
          Home
        </NavLink>
        <NavLink className="nav-menu-item" id="nav-menu-about" to="/">
          About
        </NavLink>
        <NavLink className="nav-menu-item" id="nav-menu-contact" to="/">
          Contact
        </NavLink>
      </nav>
    </nav>
  );
};
