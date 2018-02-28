import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/search/batman'>Batman</NavLink></li>
        <li><NavLink to='/search/coffee'>Coffee</NavLink></li>
        <li><NavLink to='/search/gym'>Gym</NavLink></li>
        <li><NavLink exact to='/search'>Search</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
