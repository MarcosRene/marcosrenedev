import { createGlobalStyle } from 'styled-components';
import * as c from './constants';

export default createGlobalStyle`  
  * {
    padding: 0;
    margin: 0;
    box-sizing: 0;
  }

  *:focus {
    outline: 0;
  }

  body {
    height: 100%;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background: ${c.colors.darkPrimary};
  }

  a { 
    text-decoration: none;   
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;
