/* eslint-disable react/no-danger */
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import PostsService from '../../services/PostsService';

import convertToPlain from '../../utils/convertHtml';

import Loader from '../../components/Loader';
import { Author, Container, PostBody } from './styles';

export default function ViewPost() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const loadPost = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await PostsService.getPostByAuthor(id);
      setPost(response);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  return (
    <>
      <Loader isLoading={isLoading} />

      {post.length > 0 && (
      <Container>
        <PageHeader
          title={post[0].title}
        />
        <Author>{post[0].author}</Author>
        <PostBody
          dangerouslySetInnerHTML={convertToPlain(post[0].body_text)}
        />
      </Container>
      )}
    </>
  );
}
