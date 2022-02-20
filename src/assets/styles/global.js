import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merriweather', serif;
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.dark};

    :visited {
      color: none;
    }
  }
`;
