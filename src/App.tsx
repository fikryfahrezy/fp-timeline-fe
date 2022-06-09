import { Routes, Route } from 'react-router-dom';
import Frame from '@/layouts/frame';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Register from '@/pages/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frame />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
