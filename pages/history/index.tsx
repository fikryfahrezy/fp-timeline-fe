import { type TimelineChangeType } from '@/hooks/types';
import {
  type TimelineOnChangeParams,
  type TimelineOnInsertParams,
  type TimelineIdentifier,
} from './types';

import Timeline from '@/model/timeline';

import Presentation from './Presentation';
import useTimelineManagement from '@/hooks/useTimelineManagement';

import { changeTimeline, deleteTimeline } from '@/hooks/mutator';

export function Component() {
  const { timelines, setTimelines, sendMessage } = useTimelineManagement();

  function sendTimelineToServer(type: TimelineChangeType, timeline: Timeline) {
    const timelineMessage = {
      type,
      id: timeline.id,
      title: timeline.title,
      description: timeline.description,
      start_date: timeline.startDate,
      end_date: timeline.endDate,
    };
    sendMessage(JSON.stringify(timelineMessage));
  }

  function onTimelineInsert(params: TimelineOnInsertParams) {
    const [changedTimeline, newTimelines] = changeTimeline({
      prevTimelines: timelines,
      timelineId: params.id,
      field: params.field,
      value: params.value,
    });

    if (changedTimeline !== null) {
      sendTimelineToServer('INSERT', changedTimeline);
    }

    setTimelines(newTimelines);
  }

  function onTimelineDelete(params: TimelineIdentifier) {
    const [deletedTimeline, newTimelines] = deleteTimeline(timelines, params.id);

    if (deletedTimeline !== null) {
      sendTimelineToServer('DELETE', deletedTimeline);
    }

    setTimelines(newTimelines);
  }

  function onTimelinesChange(params: TimelineOnChangeParams) {
    switch (params.type) {
      case 'DELETE':
        onTimelineDelete(params);
        break;
      case 'INSERT':
        onTimelineInsert(params);
        break;
    }
  }

  function onAddTimelineClick() {
    const newTimeline = new Timeline({
      id: timelines.length + 1,
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      title: 'Title Placeholder',
      description: 'Description Placeholder',
    });

    sendTimelineToServer('INSERT', newTimeline);
    setTimelines((prevTimelines) => {
      return [...prevTimelines, newTimeline];
    });
  }

  return (
    <Presentation
      onAddTimelineClick={onAddTimelineClick}
      timelines={timelines}
      onChange={onTimelinesChange}
    />
  );
}

Component.displayName = 'History';
