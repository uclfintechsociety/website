import React, { Fragment, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import colors from '../../colors';
import Helmet from './Helmet';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-display: swap;
    font-display: fallback;
    overflow-x: hidden;
  }

  h1, h2 {
    font-family: 'Raleway', sans-serif;
    font-display: swap;
    font-display: fallback;
  }

  h3 {
    font-family: 'Raleway', sans-serif;
    font-display: swap;
    font-display: fallback;
  }
`;

config({ ssrFadeout: true });

const loadScript = src => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
};

const Layout = ({ children }) => {
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={{ colors }}>
        <ScrollingProvider>
          <Helmet />
          {children}
        </ScrollingProvider>
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
