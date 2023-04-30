import type { HistoryItemProps } from './types';

import Date from './Date';
import Timeline from './Timeline';

function HistoryItem({ timeline, isEditable, onChange }: HistoryItemProps) {
  function onDelete() {
    onChange({ id: timeline.getId(), type: 'DELETE' });
  }

  function onStartDateChange(value: string) {
    onChange({ value, id: timeline.getId(), type: 'INSERT', field: 'start_date' });
  }

  function onEndDateChange(value: string) {
    onChange({ value, id: timeline.getId(), type: 'INSERT', field: 'end_date' });
  }

  function onTitleChange(value: string) {
    onChange({ value, id: timeline.getId(), type: 'INSERT', field: 'title' });
  }

  function onDescriptionChange(value: string) {
    onChange({ value, id: timeline.getId(), type: 'INSERT', field: 'description' });
  }

  return (
    <Timeline isEditable={isEditable} onDelete={onDelete}>
      <div className="flex flex-col gap-5 xl:flex-row">
        <Date
          isEditable={isEditable}
          onChange={onStartDateChange}
          content={timeline.getStartDate()}
        />
        <Date
          isEditable={isEditable}
          onChange={onEndDateChange}
          content={timeline.getStartDate()}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2
          className="mb-2 bg-transparent border-0 text-2xl font-bold"
          contentEditable={isEditable}
          suppressContentEditableWarning={isEditable}
          onKeyDown={(event) => {
            onTitleChange((event.target as HTMLElement).innerText);
          }}
        >
          {timeline.getTitle()}
        </h2>
        <pre
          className="bg-transparent border-0 text-4 break-word whitespace-break-spaces"
          contentEditable={isEditable}
          suppressContentEditableWarning={isEditable}
          onKeyDown={(event) => {
            onDescriptionChange((event.target as HTMLElement).innerText);
          }}
        >
          {timeline.getDesciprtion()}
        </pre>
      </div>
    </Timeline>
  );
}

export default HistoryItem;
