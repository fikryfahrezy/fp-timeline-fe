import type { ReactNode } from 'react';

import Timeline from '@/model/timeline';

export type EditableComponent = {
  isEditable: boolean;
};

export type DateProps = EditableComponent & {
  onChange: (value: string) => void;
  content: string;
};

export type HistoryItemOnChangeFieldname = 'start_date' | 'end_date' | 'title' | 'description';

export type HistoryItemOnChangeField =
  | { type: 'INSERT'; field: HistoryItemOnChangeFieldname; value: string }
  | { type: 'DELETE' };

export type HistoryItemOnChangeParams = HistoryItemOnChangeField & {
  id: number;
};

export type HistoryItemField = {
  onChange: (params: HistoryItemOnChangeParams) => void;
};

export type HistoryItemProps = EditableComponent &
  HistoryItemField & {
    timeline: Timeline;
  };

export type HistoryPresentationProps = EditableComponent &
  HistoryItemField & {
    onEditClick: () => void;
    onAddTimelineClick: () => void;
    timelines: Timeline[];
  };

export type TimelineProps = EditableComponent & {
  onDelete: () => void;
  children?: ReactNode;
};
