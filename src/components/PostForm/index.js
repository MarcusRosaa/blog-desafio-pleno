import { useRef, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import propTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';

import { Textarea } from '../Textarea';
import { Input } from '../Input';
import { Button } from '../Button';

import useErrors from '../../hooks/useErrors';

export default function PostForm({ buttonLabel }) {
  const [bodyText, setBodyText] = useState('');
  const title = useRef('');
  const author = useRef('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (
    title.current.value
    && author.current.value
    && bodyText
    && errors.length === 0
  );

  function handleTitleChange(event) {
    if (!event.target.value) {
      setError({ field: 'title', message: 'Título é obrigatório.' });
    } else {
      removeError('title');
    }
  }

  function handleAuthorChange(event) {
    if (!event.target.value) {
      setError({ field: 'author', message: 'Autor é obrigatório.' });
    } else {
      removeError('author');
    }
  }

  function handleTextChange(value) {
    setBodyText(value);

    if (!value || value === '<p><br></p>') {
      setError({ field: 'text', message: 'Texto da notícia é obrigatório.' });
    } else {
      removeError('text');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const uuidGenerator = () => {
      const uuid = () => Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

      return `${uuid()}-${uuid()}-${uuid()}-${uuid()}`;
    };

    const id = uuidGenerator();

    const newPost = {
      author: author.current.value,
      title: title.current.value,
      body_text: bodyText,
      author_id: id,
    };

    await fetch(
      'http://localhost:3001/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('title')}>
        <label htmlFor="title">Título *</label>
        <Input
          error={getErrorMessageByFieldName('title')}
          id="title"
          name="title"
          type="text"
          placeholder="Pense em algo chamativo..."
          ref={title}
          onChange={handleTitleChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('author')}>
        <label htmlFor="author">Autor *</label>
        <Input
          error={getErrorMessageByFieldName('author')}
          id="author"
          name="author"
          type="text"
          placeholder="Autor da notícia..."
          ref={author}
          onChange={handleAuthorChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('text')}>
        <Textarea>
          <ReactQuill
            error={getErrorMessageByFieldName('text')}
            placeholder="Escreva sua notícia aqui..."
            theme="snow"
            value={bodyText}
            onChange={handleTextChange}
          />
        </Textarea>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

PostForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
