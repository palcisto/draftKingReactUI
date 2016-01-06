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
      </ul>
    </nav>
  );
}

export default SportsNav;
