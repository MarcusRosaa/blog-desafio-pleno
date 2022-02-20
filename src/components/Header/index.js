import { Link } from 'react-router-dom';
import { Container, Navigation } from './styles';

export default function Header() {
  return (
    <Container>
      <h2>LOGOTIPO</h2>
      <Navigation>
        <Link to="/">Minhas Notícias</Link>
        <Link to="new-post">Criar Notícia</Link>
      </Navigation>
    </Container>
  );
}
