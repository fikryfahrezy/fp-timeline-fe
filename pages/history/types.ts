import { type ReactNode } from 'react';

import { type TimelineProperty } from '@/model/types';

import Timeline from '@/model/timeline';

export type FieldProps = {
  onChange: (value: string) => void;
  content: string;
};

export type TimelineIdentifier = {
  id: number;
};

export type TimelineOnInsertParams = TimelineIdentifier & {
  field: TimelineProperty;
  value: string;
};

export type TimelineOnChangeParams =
  | ({ type: 'INSERT' } & TimelineOnInsertParams)
  | ({ type: 'DELETE' } & TimelineIdentifier);

export type TimelineField = {
  onChange: (params: TimelineOnChangeParams) => void;
};

export type TimelineItemProps = TimelineField & {
  timeline: Timeline;
};

export type TimelinePresentationProps = TimelineField & {
  onAddTimelineClick: () => void;
  timelines: Timeline[];
};

export type TimelineProps = {
  onDelete: () => void;
  children?: ReactNode;
};
