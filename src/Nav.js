import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/batman'>Batman</NavLink></li>
        <li><NavLink to='/coffee'>Coffee</NavLink></li>
        <li><NavLink to='/gym'>Gym</NavLink></li>
        <li><NavLink to='/search'>Search</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
