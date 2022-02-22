import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 48px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h2 {
    width: 100%;
    text-align: center;
    color:  ${({ theme }) => theme.colors.gray.dark};
  }
`;
