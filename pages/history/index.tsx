import {
  type HistoryItemOnChangeParams,
  type HistoryItemOnInsertParams,
  type HistoryItemIdentifier,
  type HistoryItemOnChangeType,
  type TimelineMessage,
} from './types';

import { useState, useCallback } from 'react';
import Timeline from '@/model/timeline';

import Presentation from './Presentation';
import useWebsocket, { type UseWebsocketOptions } from './useWebsocket';

import { changeTimeline, deleteTimeline, setTimeline } from './mutator';
import { generateHistories } from './utils';

function History() {
  const [isEditable, setIsEditable] = useState(false);
  const [timelines, setTimelines] = useState(() => {
    return generateHistories();
  });

  const onReceiveMessage: UseWebsocketOptions['onReceiveMessage'] = useCallback((data) => {
    const newTimelineMessage: TimelineMessage = JSON.parse(data);
    setTimelines((prevTimelines) => {
      return setTimeline(prevTimelines, newTimelineMessage);
    });
  }, []);

  const { sendMessage } = useWebsocket({
    onReceiveMessage,
    url: 'ws://localhost:8888/ws',
  });

  function onEditClick() {
    setIsEditable((prevIsEditableState) => {
      return !prevIsEditableState;
    });
  }

  function sendTimelineToServer(type: HistoryItemOnChangeType, timeline: Timeline) {
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

  function onTimelineInsert(params: HistoryItemOnInsertParams) {
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

  function onTimelineDelete(params: HistoryItemIdentifier) {
    setTimelines((prevTimelines) => {
      return deleteTimeline(prevTimelines, params.id);
    });
  }

  function onTimelinesChange(params: HistoryItemOnChangeParams) {
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
      onEditClick={onEditClick}
      timelines={timelines}
      onChange={onTimelinesChange}
      isEditable={isEditable}
    />
  );
}

export default History;
