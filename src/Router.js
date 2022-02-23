import { Routes, Route } from 'react-router-dom';
import EditPost from './pages/EditPost';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import ViewPost from './pages/ViewPost';

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/new" element={<NewPost />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/posts/:id" element={<ViewPost />} />
    </Routes>
  );
}
