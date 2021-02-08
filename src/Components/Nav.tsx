import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav id="nav-bar">
      <NavLink className="nav-menu-item" id="nav-menu-home" to="/home" />
    </nav>
  );
};
