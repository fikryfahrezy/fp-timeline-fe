import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const History = lazy(() => import('@/pages/history'));
const NotFound = lazy(() => import('@/pages/not-found'));

function App() {
  return (
    <Routes>
      <Route index path="/" element={<History />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
