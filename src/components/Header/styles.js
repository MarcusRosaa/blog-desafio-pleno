import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  padding: 0px 3vw;
  position: fixed;
  width: 100vw;
  height: 64px;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary.lighter};
`;

export const Navigation = styled.nav`

  a:not(:first-of-type) {
    margin-left: 20px;
  }
`;
