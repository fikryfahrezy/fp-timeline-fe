import type {
  HistoryItemOnChangeParams,
  HistoryItemOnInsertParams,
  HistoryItemIdentifier,
  HistoryItemOnChangeType,
} from './types';

import { useState, useCallback } from 'react';
import Timeline from '@/model/timeline';

import Presentation from './Presentation';
import useWebsocket, { type UseWebsocketOptions } from './useWebsocket';

import { histories } from './constants';

function generateHistories() {
  return histories.map((history) => {
    return new Timeline({
      id: history['id'],
      startDate: history['start_date'],
      endDate: history['end_date'],
      title: history['title'],
      description: history['description'],
    });
  });
}

function History() {
  const [isEditable, setIsEditable] = useState(false);
  const [timelines, setTimelines] = useState(() => {
    return generateHistories();
  });

  const onReceiveMessage: UseWebsocketOptions['onReceiveMessage'] = useCallback((data) => {
    console.log(data);
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
    const prevTimelines = timelines;
    const changedTimelineIndex = prevTimelines.findIndex((prevTimeline) => {
      return prevTimeline.id == params.id;
    });

    if (changedTimelineIndex === -1) {
      return;
    }

    const changedTimeline = prevTimelines[changedTimelineIndex];
    changedTimeline[params.field] = params.value;

    sendTimelineToServer('INSERT', changedTimeline);
    setTimelines([
      ...prevTimelines.slice(0, changedTimelineIndex),
      changedTimeline,
      ...prevTimelines.slice(changedTimelineIndex + 1),
    ]);
  }

  function deleteTimeline(prevTimelines: Timeline[], timelineId: number) {
    const changedTimelineIndex = prevTimelines.findIndex((prevTimeline) => {
      return prevTimeline.id == timelineId;
    });

    if (changedTimelineIndex === -1) {
      return prevTimelines;
    }

    return [
      ...prevTimelines.slice(0, changedTimelineIndex),
      ...prevTimelines.slice(changedTimelineIndex + 1),
    ];
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
