/**
 * <SportsNav />
 */

import React from 'react';
import './SportsNav.scss';
import Link from '../Link';

function SportsNav() {
  return (
    <nav className="sports-nav">
      <ul>
        <li><a href="/featured">Featured</a></li>
        <li><a href="/nfl" onClick={Link.handleClick}>NFL</a></li>
        <li><a href="/nba" onClick={Link.handleClick}>NBA</a></li>
        <li><a href="/pga" onClick={Link.handleClick}>PGA</a></li>
        <li><a href="/nhl" onClick={Link.handleClick}>NHL</a></li>
        <li><a href="/cfb" onClick={Link.handleClick}>CFB</a></li>
        <li><a href="/cbb" onClick={Link.handleClick}>CBB</a></li>
        <li><a href="/soc" onClick={Link.handleClick}>SOC</a></li>
        <li><a href="/mma" onClick={Link.handleClick}>MMA</a></li>
        <li><a href="/mlb" onClick={Link.handleClick}>MLB</a></li>
        <li><a href="/nas" onClick={Link.handleClick}>NAS</a></li>
      </ul>
    </nav>
  );
}

export default SportsNav;
