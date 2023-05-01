import type { ReactNode } from 'react';

import Timeline from '@/model/timeline';

export type EditableComponent = {
  isEditable: boolean;
};

export type DateProps = EditableComponent & {
  onChange: (value: string) => void;
  content: string;
};

export type HistoryItemIdentifier = {
  id: number;
};

export type HistoryItemOnInsertFieldname = 'startDate' | 'endDate' | 'title' | 'description';

export type HistoryItemOnInsertParams = HistoryItemIdentifier & {
  field: HistoryItemOnInsertFieldname;
  value: string;
};

export type HistoryItemOnChangeParams =
  | ({ type: 'INSERT' } & HistoryItemOnInsertParams)
  | ({ type: 'DELETE' } & HistoryItemIdentifier);

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
