import Year from '@/model/year';
import YearItem from '@/layouts/year/view';

const year = {
  id: 0,
  date: '2022',
};

const years = Array.from([...Array<typeof year>(10).fill(year)], (v, i) => ({
  ...v,
  id: i,
}));

const yearLines = years.map((year) => {
  return new Year(year['id'], year['date']);
});

function Years() {
  return (
    <main className="h-100% max-w-800px mx-auto py-5">
      <h1 className="color-white">Timeline</h1>
      {yearLines.map((year) => {
        return <YearItem key={year.getId()} year={year} />;
      })}
    </main>
  );
}

export default Years;
