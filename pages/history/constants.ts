export const history = {
  id: 0,
  start_date: '2022-01-02',
  end_date: '2022-01-02',
  title: 'Title',
  description: 'Description',
};

export const histories = Array.from([...Array<typeof history>(1).fill(history)], (v, i) => ({
  ...v,
  id: i + 1,
}));
