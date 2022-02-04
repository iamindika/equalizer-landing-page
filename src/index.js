import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font: 400 1.125rem 'IBM Plex Sans', sans-serif;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('app')
);