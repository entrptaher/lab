import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = props => (<NavLink {...props} activeClassName="active" />);

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Nav to="/" className="navbar-brand">TahyLabs</Nav>
        </li>
        <li className="nav-item">
          <a href="https://github.com/TahyLabs" className="nav-link">Github</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
