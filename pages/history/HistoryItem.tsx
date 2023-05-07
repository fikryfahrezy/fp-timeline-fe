import type { HistoryItemProps } from './types';

import Timeline from './Timeline';
import Date from './Date';
import Title from './Title';
import Description from './Description';

function HistoryItem({ timeline, isEditable, onChange }: HistoryItemProps) {
  function onDelete() {
    onChange({ id: timeline.id, type: 'DELETE' });
  }

  function onStartDateChange(value: string) {
    onChange({ value, id: timeline.id, type: 'INSERT', field: 'startDate' });
  }

  function onEndDateChange(value: string) {
    onChange({ value, id: timeline.id, type: 'INSERT', field: 'endDate' });
  }

  function onTitleChange(value: string) {
    onChange({ value, id: timeline.id, type: 'INSERT', field: 'title' });
  }

  function onDescriptionChange(value: string) {
    onChange({ value, id: timeline.id, type: 'INSERT', field: 'description' });
  }

  return (
    <Timeline isEditable={isEditable} onDelete={onDelete}>
      <div className="flex flex-col gap-5 xl:flex-row w-full">
        <Date onChange={onStartDateChange} content={timeline.startDate} />
        <Date onChange={onEndDateChange} content={timeline.endDate} />
      </div>
      <div className="flex flex-col gap-1">
        <Title onChange={onTitleChange} content={timeline.title} />
        <Description onChange={onDescriptionChange} content={timeline.description} />
      </div>
    </Timeline>
  );
}

export default HistoryItem;
