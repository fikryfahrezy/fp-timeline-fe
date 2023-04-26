import { Routes, Route } from 'react-router-dom';
import History from '@/pages/history';
import HistoryEdit from '@/pages/history-edit';
import NotFound from '@/pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<History />} />
        <Route path="edit" element={<HistoryEdit />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
