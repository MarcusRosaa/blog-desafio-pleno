import PageHeader from '../../components/PageHeader';
import PostForm from '../../components/PostForm';

export default function NewPost() {
  return (
    <>
      <PageHeader
        title="Editar Notícia"
      />

      <PostForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
