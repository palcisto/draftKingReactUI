/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <ul className="c-navigation" role="menu">
      <li className="c-navigation__item">
        <a className="c-navigation__link" href="/" onClick={Link.handleClick}>Lobby</a>
      </li>
      <li className="c-navigation__item">
        <a className="c-navigation__link" href="/lineup" onClick={Link.handleClick}>My Lineups</a>
      </li>
      <li className="c-navigation__item">
        <a className="c-navigation__link" href="/mycontests" onClick={Link.handleClick}>My Contests</a>
      </li>
      <li className="c-navigation__item">
        <a className="c-navigation__link" href="/leagehub" onClick={Link.handleClick}>League Hub</a>
      </li>
      <li className="c-navigation__item">
        <a className="c-navigation__link" href="/promotions" onClick={Link.handleClick}>Promotions</a>
      </li>
    </ul>
  );
}

export default Navigation;
