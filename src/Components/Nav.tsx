import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav id="nav-bar">
      <nav id="nav-menu">
        <NavLink className="nav-menu-item" id="nav-menu-home" to="/home" />
      </nav>
    </nav>
  );
};
