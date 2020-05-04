import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  

  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #3f4850;
    text-align: center;
  }
  

ul {
  list-style-type: none;
  padding-left: 0;
}

.active {
  background-color: #051c33;
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  body {
    padding-top: 4em;
  }
}

`;

export default GlobalStyles;
