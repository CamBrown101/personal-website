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
        <div className="nav-contacts">
          <a
            className="nav-contact"
            href="mailto:cameron-brown@live.com?subject=Mail from Cameron Brown's Website">
            <i className="fas fa-envelope-square mail-icon icon"></i>
            <h3>Cameron-Brown@live.com</h3>
          </a>
          <a
            className="nav-contact"
            href="https://www.linkedin.com/in/cameron-brown-101/">
            <i className="fab fa-linkedin linkedin-icon icon"></i>
            <h3>Cameron-Brown-101</h3>
          </a>
          <a className="nav-contact" href="https://github.com/CamBrown101">
            <i className="fab fa-github-square github-icon icon"></i>
            <h3>CamBrown101</h3>
          </a>
        </div>
      </nav>
    </nav>
  );
};
