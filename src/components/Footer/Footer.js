import React, { Component } from 'react';
import './Footer.css';

function FooterLink(props) {
  return (
    <li><a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a></li>
  )
}

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="footerInfo">
          <FooterLink text="Repo" link="https://github.com/sam-parkinson/dynasty-client" />
          <FooterLink text="My Portfolio" link="https://sam-parkinson.github.io/portfolio/" />
        </ul>
      </footer>
    )
  }
}