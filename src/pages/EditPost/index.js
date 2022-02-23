import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import PostForm from '../../components/PostForm';
import PostsService from '../../services/PostsService';

export default function EditPost() {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const loadPost = useCallback(async () => {
    try {
      setIsLoading(true);

      const postsList = await PostsService.getPost(id);
      setPost(postsList);
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

      <PageHeader
        title="Editar Notícia"
      />

      {Object.keys(post).length > 0 && (
      <PostForm
        buttonLabel="Salvar alterações"
        submitFunction="edit"
        currentPost={post}
        postId={id}
      />
      )}
    </>
  );
}
