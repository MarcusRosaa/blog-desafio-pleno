import styled from 'styled-components';

export const Textarea = styled.div`
  border-radius: 4px;
  background: transparent;

  & .quill {
    border-radius: 8px;

    .ql-container {
      font-family: 'Merriweather', serif;
      border: none;
      width: 100%;

      & .ql-editor {
        width: 100%;
        min-height: 200px;
        font-size: 16px;
        border-radius: 0 0px 4px 4px;
        border: 2px solid transparent;

        display: inline-block;
        padding-bottom: 8px;
        background-image: linear-gradient(${({ theme }) => theme.colors.primary.main}, ${({ theme }) => theme.colors.primary.main});
        background-position: 0 100%;
        background-size: 0% 2px;
        background-repeat: no-repeat;
        transition: background-size 0.3s,
        background-position 0s 0.3s;

        &:focus {
          display: inline-block;
          background-position: 100% 100%; /*OR bottom right*/
          background-size: 100% 2px;
        }
      }
    }

    .ql-toolbar {
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }
`;
