import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
  padding-top: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 800px;
`;

export const Form = styled.form`
  margin-top: 32px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }

  label {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  margin-top: 8px;
  padding: 16px;
  letter-spacing: 0.7px;
  font-size: 24px;
  outline: none;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
  background: #fff;
  font-family: 'Merriweather', serif;

  &#author {
    font-size: 16px;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const Textarea = styled.div`
  margin-top: 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);

  & .quill {
    border-radius: 8px;

    & .ql-container {
      font-family: 'Merriweather', serif;
      border: none;

      & .ql-editor {
        min-height: 200px;
        font-size: 16px;
      }
    }

    & .ql-toolbar {
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  }
`;
