import PageHeader from '../../components/PageHeader';
import PostForm from '../../components/PostForm';

export default function NewPost() {
  return (
    <>
      <PageHeader
        title="Nova Notícia"
      />

      <PostForm
        buttonLabel="Cadastrar"
        submitFunction="create"
      />
    </>
  );
}
