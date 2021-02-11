import React from 'react';
import './Contact.scss';

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <a href="mailto:cameron-brown@live.com?subject=Mail from Cameron Brown's Website">
        <div className="flex">
          <i className="fas fa-envelope-square mail-icon icon"></i>
          <h3>cameron-brown@live.com</h3>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/cameron-brown-101/">
        <div className="flex">
          <i className="fab fa-linkedin linkedin-icon icon"></i>
          <h3>cameron-brown-101</h3>
        </div>
      </a>
      <a href="https://github.com/CamBrown101">
        <div className="flex">
          <i className="fab fa-github-square github-icon icon"></i>
          <h3>CamBrown101</h3>
        </div>
      </a>
    </div>
  );
};
