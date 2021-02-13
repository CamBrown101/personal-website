import React from 'react';

type Props = {
  title: string;
  image: string;
  description: string;
  techstack: string;
};

export const Project = ({ title, image, description, techstack }) => {
  return (
    <article className="project">
      <img className="screenshot" alt="This is a project" src={image} />
      <h4 className="project-title">{title}</h4>
      <p className="project-description">{description}</p>
      <h3 className="tech-stack-header">Tech Stack</h3>
      <p className="tech-stack">{techstack}</p>
      <div className="project-buttons"></div>
    </article>
  );
};
