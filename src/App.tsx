import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/auth';
import ProtectedFrame from '@/layouts/protected-frame';
import PublicFrame from '@/layouts/public-frame';
import RequireAuth from '@/layouts/require-auth';
import Home from '@/pages/home';
import History from '@/pages/history';
import Years from '@/pages/years';
import YearsEdit from '@/pages/years-edit';
import Login from '@/pages/login';
import Register from '@/pages/register';
import NotFound from '@/pages/not-found';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PublicFrame />}>
          <Route index element={<History />} />
          <Route path=":year" element={<History />} />
          <Route path="years" element={<Years />} />
        </Route>
        <Route
          path="/home"
          element={
            <RequireAuth isAdmin={false} to="/login">
              <ProtectedFrame />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="years" element={<YearsEdit />} />
        </Route>
        <Route path="/login" element={<Login to="/home" />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
