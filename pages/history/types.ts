import type { ReactNode } from 'react';

import Timeline from '@/model/timeline';

export type EditableComponent = {
  isEditable: boolean;
};

export type EditableComponentWithOnChange = EditableComponent & {
  onChange: (value: string) => void;
};

export type HistoryItemProps = EditableComponentWithOnChange & {
  timeline: Timeline;
};

export type DateProps = EditableComponentWithOnChange & {
  content: string;
};

export type HistoryPresentationProps = EditableComponentWithOnChange & {
  onEditClick: () => void;
  onAddTimelineClick: () => void;
  timelines: Timeline[];
};

export type TimelineProps = EditableComponent & {
  onDelete: () => void;
  children?: ReactNode;
};
