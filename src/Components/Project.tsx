import React, { useState } from 'react';
import './Project.scss';
type Props = {
  title: string;
  image: string;
  description: string;
  techstack: string;
  githubLink: string;
  projectLink: string;
  isRight: boolean;
};

export const Project = ({
  title,
  image,
  description,
  techstack,
  githubLink,
  projectLink,
  isRight,
}: Props) => {
  return (
    <article className='project'>
      <div className={isRight ? 'project-inner right' : 'project-inner'}>
        <img className='screenshot' alt='This is a project' src={image} />
        <div className='project-text'>
          <h4 className='project-title'>{title}</h4>
          <p className='project-description'>{description}</p>
          <h3 className='tech-stack-header'>Tech Stack</h3>
          <p className='tech-stack'>{techstack}</p>
          <div className='mobile-links'></div>
        </div>
        <div className='project-buttons'>
          <a className='link-container' href={githubLink}>
            <i className='fab fa-github' />
            <p>Github Link</p>
          </a>
          <a className='link-container' href={projectLink}>
            <i className='fas fa-link' />
            <p>Project Link</p>
          </a>
        </div>
      </div>
    </article>
  );
};
