import { type HistoryPresentationProps } from './types';

import { Link } from 'react-router-dom';

import HistoryItem from './HistoryItem';

function HistoryPresentation({
  onChange,
  onAddTimelineClick,
  timelines,
}: HistoryPresentationProps) {
  return (
    <main className="h-100% max-w-800px mx-auto py-5 [&>*:nth-last-child(n+2)]:mb-3">
      <div className="flex justify-end">
        <Link to="/" className="text-black no-underline">
          Done
        </Link>
      </div>
      <h1>Timeline 2022</h1>
      {timelines.map((timeline) => {
        return <HistoryItem timeline={timeline} onChange={onChange} key={timeline.id} />;
      })}
      <button
        className="bg-transparent p-3 w-100% border-3 border-accent border-dashed rounded-md cursor-pointer"
        onClick={onAddTimelineClick}
      >
        Add Timeline
      </button>
    </main>
  );
}

export default HistoryPresentation;
