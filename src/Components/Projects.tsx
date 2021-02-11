import React from 'react';
import './Projects.scss';
import ScreenShot from '../images/ScreenShot.png';

export const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <img className="screenshot" src={ScreenShot} />
      </div>
    </div>
  );
};
