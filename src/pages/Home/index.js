/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import {
  Container, Header, ListContainer, Card, InputSearchContainer, Navigation, EmptyListContainer, SearchNotFoundContainer,
} from './styles';

import Loader from '../../components/Loader';

import convertToPlain from '../../utils/convertHtml';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import PostsService from '../../services/PostsService';
import emptyBox from '../../assets/images/icons/empty-box.svg';
import postsNotFound from '../../assets/images/icons/no-posts-found.svg';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredPosts = useMemo(() => posts.filter((post) => (
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )), [posts, searchTerm]);

  const loadPosts = useCallback(async () => {
    try {
      setIsLoading(true);

      const PostsList = await PostsService.listPosts();

      setPosts(PostsList);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  async function handleDelete(event, id) {
    event.preventDefault();

    await PostsService.deletePost(id);
    loadPosts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {posts.length > 0 && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquise pelo título.."
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header justifyContent={posts.length > 0 ? 'space-between' : 'center'}>
        {posts.length > 0 && (
          <strong>
            {filteredPosts.length}
            {' '}
            {filteredPosts.length === 1 ? 'postagem' : 'postagens'}
          </strong>
        )}
        <Navigation>
          <Link to="new">Criar Notícia</Link>
        </Navigation>
      </Header>

      <ListContainer>

        {(posts.length < 1 && !isLoading) && (
          <EmptyListContainer>
            <img src={emptyBox} alt="Empty box" />

            <p>
              Você ainda não tem nenhuma notícia cadastrada!
              Clique no botão <strong>”Criar Notícia”</strong> à cima para cadastrar a sua primeira!
            </p>
          </EmptyListContainer>
        )}

        {(posts.length > 0 && filteredPosts.length < 1) && (
          <SearchNotFoundContainer>
            <img src={postsNotFound} alt="No posts found" />

            <span>
              Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
            </span>
          </SearchNotFoundContainer>
        )}

        {filteredPosts.length > 0 && filteredPosts.map((post) => (
          <Card key={post.id}>
            <Link to={`/posts/${post.author_id}`}>
              <div className="info">
                <div className="post-title">
                  <h2>{post.title}</h2>
                  <small>
                    por
                    {' '}
                    {post.author}
                  </small>
                </div>
                <span
                  dangerouslySetInnerHTML={convertToPlain(post.body_text)}
                />
              </div>
            </Link>

            <div className="actions">
              <Link to={`/edit/${post.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button" onClick={(event) => handleDelete(event, post.id)}>
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}
