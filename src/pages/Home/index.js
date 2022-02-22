import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import {
  Container, Header, ListContainer, Card, InputSearchContainer, Navigation,
} from './styles';

import Loader from '../../components/Loader';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import delay from '../../utils/delay';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => posts.filter((post) => (
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )), [posts, searchTerm]);

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true);

        const response = await fetch(
          'http://localhost:3001/posts',
        );

        await delay(500);

        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  function convertToPlain(html) {
    const temDivElement = document.createElement('div');
    temDivElement.innerHTML = html;

    return temDivElement.textContent;
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo título.."
          onChange={handleChangeSearchTerm}

        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}
        </strong>
        <Navigation>
          <Link to="new">Criar Notícia</Link>
        </Navigation>
      </Header>

      <ListContainer>
        {filteredContacts.map((post) => (
          <Card key={post.id}>
            <div className="info">
              <div className="post-title">
                <h2>{post.title}</h2>
                <small>
                  por
                  {' '}
                  {post.author}
                </small>
              </div>
              <span>
                {convertToPlain(post.body_text)}
              </span>
            </div>

            <div className="actions">
              <Link to={`/edit/${post.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}
