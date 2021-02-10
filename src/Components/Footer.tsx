import React from 'react';
import './Footer.scss';

export const Footer = () => {
  const todaysYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>
        Copyright {todaysYear} Desgin and Developed By Cameron Brown. All Rights
        Reserved.
      </p>
    </footer>
  );
};
