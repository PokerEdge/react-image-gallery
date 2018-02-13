import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/batman'>Batman</NavLink></li>
        <li><NavLink to='/coffee'>Coffee</NavLink></li>
        <li><NavLink to='/gym'>Gym</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;