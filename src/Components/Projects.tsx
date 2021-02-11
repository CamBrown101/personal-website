import React from 'react';
import './Projects.scss';
import ScreenShot1 from '../images/ScreenShot.png';

export const Projects = () => {
  return (
    <div className="projects-container">
      <article className="project">
        <img className="screenshot" alt="This is a project" src={ScreenShot1} />
        <h4 className="project-title">Buy Food, Sell Food</h4>
        <p className="project-description">
          A point of sales system for a restaurant. Including analytics,
          employee clock in, stripe integration, the ability to email bills,
          sort bills by seat and a separate screen for the kitchen and bar for
          items that need to be prepared. We also a sort by categories for menu
          items as well as a search bar that you can search by item name or
          category.
        </p>
        <h3 className="tech-stack-header">Tech Stack</h3>
        <p className="tech-stack">
          React, React-Router, SASS, HTML, Node, Express, Node-mailer, Canvas.js
        </p>
      </article>
    </div>
  );
};
