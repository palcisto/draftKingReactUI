/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Header from '../Header';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
