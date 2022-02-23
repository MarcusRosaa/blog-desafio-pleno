import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    width: 100%;
    font-family: 'Times New Roman',Times,serif
  }
`;

export const PostBody = styled.div`
  padding-bottom: 112px;
  display: block;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.2px;

`;

export const Author = styled.small`
  display: block;
  font-style: italic;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray.lighter};
  text-transform: capitalize;
  margin-bottom: 16px;
`;
