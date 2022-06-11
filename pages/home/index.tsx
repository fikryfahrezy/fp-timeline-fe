import HistoryItem from '@/layouts/history-item/edit';

function Home() {
  return (
    <main className="h-100% max-w-800px mx-auto py-5">
      <h1 className="color-white">Timeline 2022</h1>
      <HistoryItem />
      <HistoryItem />
    </main>
  );
}

export default Home;
