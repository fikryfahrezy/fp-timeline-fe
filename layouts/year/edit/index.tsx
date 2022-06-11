import TimelineLayout from '@/layouts/timeline';

function YearItem() {
  return (
    <TimelineLayout>
      <input
        type="text"
        autoComplete="off"
        placeholder="200.."
        className="inline-block color-white mb-4 bg-transparent border-0 text-5xl font-bold outline-none"
      />
    </TimelineLayout>
  );
}

export default YearItem;
