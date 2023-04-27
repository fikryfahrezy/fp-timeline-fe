import Timeline from '@/model/timeline';

export type EditableComponent = {
  isEditable: boolean;
  onChange: (value: string) => void;
};

export type HistoryItemProps = EditableComponent & {
  timeline: Timeline;
};

export type DateProps = EditableComponent & {
  content: string;
};
