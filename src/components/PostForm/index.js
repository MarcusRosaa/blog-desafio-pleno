import {
  useRef, useState,
} from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import uuidGenerator from '../../utils/uuid';

import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';

import { Textarea } from '../Textarea';
import { Input } from '../Input';
import { Button } from '../Button';

import useErrors from '../../hooks/useErrors';
import PostsService from '../../services/PostsService';

export default function PostForm({
  buttonLabel, submitFunction, currentPost, postId,
}) {
  const [bodyText, setBodyText] = useState(currentPost?.body_text || '');
  const title = useRef(currentPost?.title || '');
  const author = useRef(currentPost?.author || '');
  const navigate = useNavigate();

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

  const handleCreatePost = async (event) => {
    event.preventDefault();
    const uuid = await uuidGenerator();

    const newPost = {
      author: author.current.value,
      title: title.current.value,
      body_text: bodyText,
      author_id: uuid,
    };
    await PostsService.createPost(newPost);
    navigate('/');
  };

  const handleEditPost = async (event) => {
    event.preventDefault();

    const newPost = {
      author: author.current.value,
      title: title.current.value,
      body_text: bodyText,
      author_id: postId,
    };

    await PostsService.editPost(postId, newPost);
    navigate('/');
  };
  return (
    <Form
      onSubmit={submitFunction === 'create' ? handleCreatePost : handleEditPost}
      noValidate
    >
      <FormGroup error={getErrorMessageByFieldName('title')}>
        <label htmlFor="title">Título *</label>
        <Input
          error={getErrorMessageByFieldName('title')}
          id="title"
          name="title"
          type="text"
          placeholder="Pense em algo chamativo..."
          defaultValue={currentPost ? title.current : title.current.value}
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
          defaultValue={currentPost ? author.current : author.current.value}
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

PostForm.propTypes = {
  submitFunction: propTypes.string.isRequired,
};

PostForm.propTypes = {
  currentPost: propTypes.shape({
    author: propTypes.string,
    author_id: propTypes.string,
    body_text: propTypes.string,
    id: propTypes.number,
    title: propTypes.string,
  }),
};

PostForm.defaultProps = {
  currentPost: null,
};

PostForm.propTypes = {
  postId: propTypes.string,
};

PostForm.defaultProps = {
  postId: null,
};
