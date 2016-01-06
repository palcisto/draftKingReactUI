/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Header.scss';
import Navigation from '../Navigation';
import Link from '../Link';

function Header() {
  return (
    <header>
      <div className="Branding"><a href="/" onClick={Link.handleClick}></a></div>
      <Navigation />
    </header>
  );
}

export default Header;
