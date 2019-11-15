import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component { 
  render() {
    return (
      <nav role="navigation">
        <ul>
          <li
            className="navLink"
          >
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link to={'/bylaws'}>
              Bylaws
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link to={'/minutes'}>
              Minutes
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link to={'/'}>
              Draft Board
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link to={'/'}>
              Schedule
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link to={'/'}>
              Links
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}