import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;  // Esse valor é para ajustar o valor de px com rem, assim 1 rem é igual a 10px
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${() => theme.font.sizes.medium}
  }
  a {
    color: ${() => theme.colors.secondary};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    &:hover {
      opacity: .6;
    }
  }
`;
