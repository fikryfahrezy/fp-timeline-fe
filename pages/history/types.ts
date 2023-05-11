import type { ReactNode } from 'react';

import Timeline from '@/model/timeline';

export type FieldProps = {
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

export type HistoryItemOnChangeType = 'INSERT' | 'DELETE';

export type HistoryItemOnChangeParams =
  | ({ type: 'INSERT' } & HistoryItemOnInsertParams)
  | ({ type: 'DELETE' } & HistoryItemIdentifier);

export type HistoryItemField = {
  onChange: (params: HistoryItemOnChangeParams) => void;
};

export type HistoryItemProps = HistoryItemField & {
  timeline: Timeline;
};

export type HistoryPresentationProps = HistoryItemField & {
  onAddTimelineClick: () => void;
  timelines: Timeline[];
};

export type TimelineProps = {
  onDelete: () => void;
  children?: ReactNode;
};

export type ChangeTimelineParams = {
  prevTimelines: Timeline[];
  timelineId: number;
  field: HistoryItemOnInsertFieldname;
  value: string;
};

export type TimelineResponse = {
  description: string;
  end_date: string;
  id: number;
  start_date: string;
  title: string;
};

export type TimelineMessage = TimelineResponse & {
  type: HistoryItemOnChangeType;
};
