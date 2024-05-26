import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header {
    background: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
  }

  nav a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;
