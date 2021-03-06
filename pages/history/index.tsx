import Timeline from '@/model/timeline';
import HistoryItem from '@/layouts/history-item/view';

const history = {
  id: 0,
  start_date: '2022-01-02',
  end_date: '2022-01-02',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus, ex et vehicula posuere, mi lacus vestibulum nisl, vel malesuada ligula orci non dui. Sed ipsum felis, sollicitudin et magna eu, lacinia suscipit est. Proin sit amet tincidunt massa. Nullam vel metus feugiat, consequat enim sed, iaculis enim. Nulla eleifend metus massa, nec dapibus libero vehicula vel. Donec id blandit est. Aenean et mi eu nunc accumsan ultrices. Phasellus ligula elit, mollis ut nulla in, pellentesque iaculis nisi. Quisque iaculis, dui vel rhoncus tincidunt, magna turpis vehicula eros, sed volutpat mauris augue eget mi. Vivamus et libero in magna commodo eleifend vitae ultricies sapien. Maecenas quis felis scelerisque, rutrum nunc a, maximus ante. Aliquam malesuada velit eu quam volutpat, sed elementum nibh fringilla.',
};

const histories = Array.from([...Array<typeof history>(10).fill(history)], (v, i) => ({
  ...v,
  id: i,
}));

const timelines = histories.map((history) => {
  return new Timeline(
    history['id'],
    history['start_date'],
    history['end_date'],
    history['title'],
    history['description'],
  );
});

function History() {
  return (
    <main className="h-100% max-w-800px mx-auto py-5">
      <h1 className="color-white">Timeline 2022</h1>
      {timelines.map((timeline) => {
        return <HistoryItem key={timeline.getId()} timeline={timeline} />;
      })}
    </main>
  );
}

export default History;
