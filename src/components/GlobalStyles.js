import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Jost', sans-serif;
    font-style: normal;
    margin: 0;
    padding: 0;
    background: #F8F8F7;
    color: #1d1d1d;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  p, ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  picture {
    display: block;
  }

  img {
    display: block;
    // width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  button {
    padding: 0;
    font-family: inherit;
    background-color: inherit;
    border: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
