import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSearchContainer, Navigation,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo título.." />
      </InputSearchContainer>

      <Header>
        <strong>3 notícias</strong>
        <Navigation>
          <Link to="new">Criar Notícia</Link>
        </Navigation>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Título</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="post-title">
              <strong>Era uma vez em Roma</strong>
              <small>por João alberto</small>
            </div>
            <span>
              Cupidatat pariatur voluptate dolor et. Id magna excepteur consectetur do ullamco do. Sit dolore culpa dolore consectetur exercitation duis laborum nisi est.

              Reprehenderit eiusmod consectetur voluptate ut qui do. Laboris cupidatat sit officia id dolore id et. Proident voluptate id cupidatat elit laborum proident nostrud ea pariatur nulla id.
            </span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="post-title">
              <strong>Era uma vez em Roma</strong>
              <small>por João alberto</small>
            </div>
            <span>
              Cupidatat pariatur voluptate dolor et. Id magna excepteur consectetur do ullamco do. Sit dolore culpa dolore consectetur exercitation duis laborum nisi est.

              Reprehenderit eiusmod consectetur voluptate ut qui do. Laboris cupidatat sit officia id dolore id et. Proident voluptate id cupidatat elit laborum proident nostrud ea pariatur nulla id.
            </span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="post-title">
              <strong>Era uma vez em Roma</strong>
              <small>por João alberto</small>
            </div>
            <span>
              Cupidatat pariatur voluptate dolor et. Id magna excepteur consectetur do ullamco do. Sit dolore culpa dolore consectetur exercitation duis laborum nisi est.

              Reprehenderit eiusmod consectetur voluptate ut qui do. Laboris cupidatat sit officia id dolore id et. Proident voluptate id cupidatat elit laborum proident nostrud ea pariatur nulla id.
            </span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
