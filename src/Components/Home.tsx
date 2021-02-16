import React from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Resume } from './Resume';
import './Home.scss';

export const Home = () => {
  return (
    <div id="home-container">
      <div className="home-container-inner">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};
