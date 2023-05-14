import Timeline from '@/model/timeline';

import { type ChangeTimelineParams, TimelineMessage } from './types';

export function deleteTimeline(prevTimelines: Timeline[], timelineId: number) {
  const changedTimelineIndex = prevTimelines.findIndex((prevTimeline) => {
    return prevTimeline.id == timelineId;
  });

  if (changedTimelineIndex === -1) {
    return [null, prevTimelines] as const;
  }

  const newTimelines = [
    ...prevTimelines.slice(0, changedTimelineIndex),
    ...prevTimelines.slice(changedTimelineIndex + 1),
  ];

  const deletedTimeline = prevTimelines[changedTimelineIndex];

  return [deletedTimeline, newTimelines] as const;
}

export function changeTimeline({ prevTimelines, timelineId, field, value }: ChangeTimelineParams) {
  const changedTimelineIndex = prevTimelines.findIndex((prevTimeline) => {
    return prevTimeline.id == timelineId;
  });

  if (changedTimelineIndex === -1) {
    return [null, prevTimelines] as const;
  }

  const changedTimeline = prevTimelines[changedTimelineIndex];
  changedTimeline[field] = value;

  const newTimelines = [
    ...prevTimelines.slice(0, changedTimelineIndex),
    changedTimeline,
    ...prevTimelines.slice(changedTimelineIndex + 1),
  ];

  return [changedTimeline, newTimelines] as const;
}

export function setTimeline(prevTimelines: Timeline[], newTimelineMessage: TimelineMessage) {
  const newTimeline = new Timeline({
    id: newTimelineMessage['id'],
    startDate: newTimelineMessage['start_date'],
    endDate: newTimelineMessage['end_date'],
    title: newTimelineMessage['title'],
    description: newTimelineMessage['description'],
  });

  const changedTimelineIndex = prevTimelines.findIndex((prevTimeline) => {
    return prevTimeline.id == newTimelineMessage.id;
  });

  if (changedTimelineIndex === -1) {
    return [...prevTimelines, newTimeline];
  }

  if (newTimelineMessage.type === 'DELETE') {
    return [
      ...prevTimelines.slice(0, changedTimelineIndex),
      ...prevTimelines.slice(changedTimelineIndex + 1),
    ];
  }

  return [
    ...prevTimelines.slice(0, changedTimelineIndex),
    newTimeline,
    ...prevTimelines.slice(changedTimelineIndex + 1),
  ];
}
