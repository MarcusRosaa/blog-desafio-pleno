import styled from 'styled-components';

export const Container = styled.div`
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;

  input {
    border: 1px solid #fff;
    border-radius: 25px;
    width: 100%;
    height: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    padding: 0 16px;
    font-size: 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.lighter};
  padding-bottom: 16px;

  strong {
    color: ${({ theme }) => theme.colors.gray.dark};
    font-size: 24px
  }
`;

export const Navigation = styled.nav`
  display: flex;

a {
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

      button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 16px;
        font-weight: bold;
        margin-right: 8px;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }

`;

export const Card = styled.div`
  padding: 16px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 16px;
  }

  .info {
    .post-title {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.gray.dark};


      h2 {
        width: 100%;
        font-family: 'Times New Roman', Times, serif
      }

      small {
        font-style: italic;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray.lighter};
        text-transform: capitalize;
        margin-top: 4px;
      }
    }

    span {
      display: block;
      margin-top: 4px;
      color: #8c8c8c;
      height: fit-content;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    margin-top: 8px;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray.light};
    text-align: center;
    margin-top: 8px;
    max-width: 450px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.gray.light};
    margin-left: 24px;
    word-break: break-word;
  }
`;
