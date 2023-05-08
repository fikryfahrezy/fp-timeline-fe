import { type HistoryPresentationProps } from './types';

import HistoryItem from './HistoryItem';

function HistoryPresentation({
  isEditable,
  onChange,
  onEditClick,
  onAddTimelineClick,
  timelines,
}: HistoryPresentationProps) {
  return (
    <main className="h-100% max-w-800px mx-auto py-5 [&>*:nth-last-child(n+2)]:mb-3">
      <div className="flex justify-end">
        <button onClick={onEditClick} className="bg-transparent border-none cursor-pointer">
          {isEditable ? 'Done' : 'Edit'}
        </button>
      </div>
      <h1>Timeline 2022</h1>
      {timelines.map((timeline) => {
        return (
          <HistoryItem
            isEditable={isEditable}
            timeline={timeline}
            onChange={onChange}
            key={timeline.id}
          />
        );
      })}
      {isEditable && (
        <button
          className="bg-transparent p-3 w-100% border-3 border-accent border-dashed rounded-md cursor-pointer"
          onClick={onAddTimelineClick}
        >
          Add Timeline
        </button>
      )}
    </main>
  );
}

export default HistoryPresentation;
