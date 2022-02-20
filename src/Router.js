import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/new-post" exact element={<NewPost />} />
    </Routes>
  );
}
