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
            <Link to={'/draftboard'}>
              Draft Board
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link to={'/schedule'}>
              Schedule
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link to={'/links'}>
              Links
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}