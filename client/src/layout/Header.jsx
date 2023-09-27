

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  console.log("Header component is rendering.");
  
  return (
    <header>
      <nav>
        <h1>Peter Lauer</h1>
        <ul>
          <li>
            <NavLink exact to="/about">| About-Me</NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio">| Portfolio</NavLink>
          </li>
          <li>
            <NavLink exact to="/resume">| Resume</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">| Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
