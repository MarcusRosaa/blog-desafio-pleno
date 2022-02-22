import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  outline: none;
  border:none;
  border-radius: 4px;
  font-size: 20px;
  letter-spacing: 0.7px;
  background: transparent;

  /* bottom-effect */
  display: inline-block;
  padding-bottom: 8px;
  background-image: linear-gradient(${({ theme }) => theme.colors.primary.main}, ${({ theme }) => theme.colors.primary.main});
  background-position: 0 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s,
  background-position 0s 0.3s;
  /*****/

  ::-webkit-input-placeholder {
   font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }

  &:focus {
    display: inline-block;
    background-position: 100% 100%; /*OR bottom right*/
    background-size: 100% 2px;
  }

  &#title {
    font-weight: 500;
    font-size: 24px;
  }

  &#author {
    font-size: 14px;
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    display: inline-block;
    background-image: linear-gradient(${theme.colors.danger.main}, ${theme.colors.danger.main});
    background-position: 100% 100%;
    background-size: 100% 2px;
  `}
`;
