import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};

    :visited {
      color: none;
    }
  }
`;
