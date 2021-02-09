import React from 'react';
import './Home.scss';

export const Home = () => {
  return (
    <div className="home-container">
      <article className="about-me-container">
        <h3>About Me</h3>
        <p>Some stuff about me</p>
      </article>
      <article className="career-container">
        <h3>Career</h3>
        <p>Some stuff about my career</p>
      </article>
    </div>
  );
};
