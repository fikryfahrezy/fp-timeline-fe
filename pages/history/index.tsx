import {
  type HistoryItemOnChangeParams,
  type HistoryItemOnInsertParams,
  type HistoryItemIdentifier,
  type HistoryItemOnChangeType,
  type TimelineMessage,
  type TimelineResponse,
} from './types';

import { useState, useCallback, useEffect } from 'react';
import Timeline from '@/model/timeline';

import Presentation from './Presentation';
import useWebsocket, { type UseWebsocketOptions } from './useWebsocket';

import { changeTimeline, deleteTimeline, setTimeline } from './mutator';
import { timelineResponseToState } from './transformer';

export function Component() {
  const [timelines, setTimelines] = useState<Timeline[]>([]);

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

  useEffect(() => {
    fetch('http://localhost:8888/timelines')
      .then((res) => {
        return res.json();
      })
      .then((timelinesResponse: TimelineResponse[]) => {
        setTimelines(timelineResponseToState(timelinesResponse));
      });
  }, []);

  return (
    <Presentation
      onAddTimelineClick={onAddTimelineClick}
      timelines={timelines}
      onChange={onTimelinesChange}
    />
  );
}

Component.displayName = 'History';
