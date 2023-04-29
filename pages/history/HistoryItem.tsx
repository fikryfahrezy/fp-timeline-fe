import type { HistoryItemProps } from './types';

import Date from './Date';
import Timeline from './Timeline';

function HistoryItem({ timeline, isEditable, onChange }: HistoryItemProps) {
  function onDelete() {
    onChange('delete');
  }

  return (
    <Timeline isEditable={isEditable} onDelete={onDelete}>
      <div className="flex flex-col gap-5 xl:flex-row">
        <Date isEditable={isEditable} onChange={onChange} content={timeline.getStartDate()} />
        <Date isEditable={isEditable} onChange={onChange} content={timeline.getStartDate()} />
      </div>
      <div className="flex flex-col gap-1">
        <p
          className="mb-2 bg-transparent border-0 text-2xl font-bold"
          contentEditable={isEditable}
          suppressContentEditableWarning={isEditable}
          onKeyDown={(event) => {
            onChange((event.target as HTMLElement).innerText);
          }}
        >
          {timeline.getTitle()}
        </p>
        <pre
          className="bg-transparent border-0 text-4 break-word whitespace-break-spaces"
          contentEditable={isEditable}
          suppressContentEditableWarning={isEditable}
          onKeyDown={(event) => {
            onChange((event.target as HTMLElement).innerText);
          }}
        >
          {timeline.getDesciprtion()}
        </pre>
      </div>
    </Timeline>
  );
}

export default HistoryItem;
