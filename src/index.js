import React from 'react';
import ReactDOM from 'react-dom';
import IntroWrapper from './components/IntroWrapper';
import MainWrapper from './components/MainWrapper';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: hsl(20, 33%, 98%);  
    font: 400 1.6rem / 1.625 'IBM Plex Sans', sans-serif;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <IntroWrapper />
    <MainWrapper />
  </React.Fragment>,
  document.getElementById('app')
);