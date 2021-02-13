import React from 'react';
import './Skills.scss';

export const Skills = () => {
  return (
    <div>
      <h3>Skills Section</h3>
      <h4>Languages</h4>
      <ul className="languages-list list">
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>C#</li>
        <li>Ruby</li>
      </ul>
      <h4>Frameworks</h4>
      <ul className="frameworks-list list">
        <li>React</li>
        <li>React-Router</li>
        <li>React-Native</li>
        <li>Redux</li>
        <li>Node</li>
        <li>Express</li>
        <li>Rails</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>.Net</li>
      </ul>
      <h4>Experience</h4>
      <ul className="experiences-list list">
        <li>Single page applications</li>
        <li>AJAX</li>
        <li>Restful routing with express</li>
        <li>Normalizing databases</li>
        <li>Test driven development</li>
        <li>End to end testing with Cypress</li>
        <li>Git on group projects</li>
        <li>Component testing with storybook</li>
        <li>Insertion testing with Jest</li>
        <li>Continuous integration with CircleCI</li>
        <li>Object Orientated Programming</li>
        <li>MVC concept</li>
        <li>Unity</li>
      </ul>
    </div>
  );
};
