import styled, { css } from 'styled-components';

export const Button = styled.button`
  border-radius: inherit;
  padding: 12px 16px;
  border-radius: 4px;
  width: inherit;
  height: inherit;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
    transition: background 0.2s ease-in;
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.gray.light};
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background-color: ${theme.colors.danger.light};
      transition: background 0.2s ease-in;
    };

    &:active {
      background-color: ${theme.colors.danger.dark};
    };
  `}
`;
