import React from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skills } from './Skills';
import './Home.scss';

export const Home = () => {
  return (
    <div className="home-container">
      <About />
      <Skills />
      <article className="career-container">
        <h3>Career</h3>
        <p>Some stuff about my career</p>
      </article>
      <Projects />
      <Contact />
    </div>
  );
};
