import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
  Container, Form, Input, InputGroup, Textarea,
} from './styles';

export default function NewPost() {
  const [richText, setRichText] = useState('');

  function handleRichTextChange(event) {
    setRichText(event.target.value);
  }

  return (
    <Container>
      <h1>Crie uma nova notícia</h1>
      <Form>
        <InputGroup>
          <label htmlFor="title">Título da notícia *</label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Crie um título chamativo"
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="author">Autor *</label>
          <Input
            id="author"
            name="author"
            type="text"
            placeholder="Autor da notícia"
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="postBody">Escreva sua notícia aqui *</label>
          <Textarea>
            <ReactQuill
              theme="snow"
              value={richText}
              onChange={handleRichTextChange}
            />
          </Textarea>
        </InputGroup>
      </Form>
    </Container>
  );
}
