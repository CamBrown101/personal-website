import React, { useState } from 'react';
import './Project.scss';
type Props = {
  title: string;
  image: string;
  description: string;
  techstack: string;
};

export const Project = ({ title, image, description, techstack }: Props) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <article
      onMouseOver={() => setHover(true)}
      onMouseOut={() => {
        setHover(false);
      }}
      className="project">
      <img className="screenshot" alt="This is a project" src={image} />
      <h4 className="project-title">{title}</h4>
      <p className="project-description">{description}</p>
      <h3 className="tech-stack-header">Tech Stack</h3>
      <p className="tech-stack">{techstack}</p>
      <div className={hover ? 'project-buttons' : 'project-buttons hide'}>
        <i className="fab fa-github hover-icon" />
        <i className="fas fa-link hover-icon" />
      </div>
    </article>
  );
};
