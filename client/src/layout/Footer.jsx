

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import './Footer.css'

function Footer() {
  console.log("Footer component is rendering.");
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/LauerPeter?tab=repositories"  rel="github">
          <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/peter-lauer-7898aa276/"  rel="linkedin">
          <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;





