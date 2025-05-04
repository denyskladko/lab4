import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <h1>{props.title}</h1>
    </footer>
  );
};

export default Footer;