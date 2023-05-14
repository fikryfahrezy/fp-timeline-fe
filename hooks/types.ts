import { type TimelineProperty } from '@/model/types';

import Timeline from '@/model/timeline';

export type TimelineChangeType = 'INSERT' | 'DELETE';

export type TimelineResponse = {
  description: string;
  end_date: string;
  id: number;
  start_date: string;
  title: string;
};

export type TimelineMessage = TimelineResponse & {
  type: TimelineChangeType;
};

export type ChangeTimelineParams = {
  prevTimelines: Timeline[];
  timelineId: number;
  field: TimelineProperty;
  value: string;
};
