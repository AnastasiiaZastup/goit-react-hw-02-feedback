import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 31px;
  }
  
  ul {
    padding: 0;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h2 {
    font-size: 40px;
  }
`;