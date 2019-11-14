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
            <Link>
              Home
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link>
              Bylaws
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link>
              Draft Board
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link>
              Schedule
            </Link>
          </li>
          <li
            className="navLink"
          >
            <Link>
              Links
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}