import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/auth';
import Frame from '@/layouts/frame';
import RequireAuth from '@/layouts/require-auth';
import Home from '@/pages/home';
import History from '@/pages/history';
import Years from '@/pages/years';
import Login from '@/pages/login';
import Register from '@/pages/register';
import NotFound from '@/pages/not-found';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth to="/login">
              <Frame />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="years" element={<Years />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
