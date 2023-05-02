import type {
  HistoryItemOnChangeParams,
  HistoryItemOnInsertParams,
  HistoryItemIdentifier,
} from './types';

import { useState, useRef, useEffect } from 'react';
import Timeline from '@/model/timeline';

import Presentation from './Presentation';

import { validateTimelines } from './validator';
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

  const timelinesSync = useRef<Timeline[] | null>(null);
  if (timelinesSync.current === null) {
    timelinesSync.current = generateHistories();
  }

  function getCurrentTimelineSync() {
    if (timelinesSync.current === null) {
      return [];
    }

    return timelinesSync.current;
  }

  function onEditClick() {
    const currentTimelineSync = getCurrentTimelineSync();
    if (validateTimelines(currentTimelineSync)) {
      setIsEditable((prevIsEditableState) => {
        return !prevIsEditableState;
      });

      setTimelines(currentTimelineSync);
    }
  }

  function onContentInsert(params: HistoryItemOnInsertParams) {
    const prevTimelines = getCurrentTimelineSync();
    const changedTimelineIndex = prevTimelines.findIndex((prevTimeline) => {
      return prevTimeline.id == params.id;
    });

    if (changedTimelineIndex === -1) {
      return;
    }

    const changedTimeline = prevTimelines[changedTimelineIndex];
    changedTimeline[params.field] = params.value;

    timelinesSync.current = [
      ...prevTimelines.slice(0, changedTimelineIndex),
      changedTimeline,
      ...prevTimelines.slice(changedTimelineIndex + 1),
    ];
  }

  function onContentDelete(params: HistoryItemIdentifier) {
    setTimelines((prevTimelines) => {
      const changedTimelineIndex = prevTimelines.findIndex((prevTimeline) => {
        return prevTimeline.id == params.id;
      });

      if (changedTimelineIndex === -1) {
        return prevTimelines;
      }

      const newTimelines = [
        ...prevTimelines.slice(0, changedTimelineIndex),
        ...prevTimelines.slice(changedTimelineIndex + 1),
      ];

      timelinesSync.current = newTimelines;
      return newTimelines;
    });
  }

  function onContentChange(params: HistoryItemOnChangeParams) {
    switch (params.type) {
      case 'DELETE':
        onContentDelete(params);
        break;
      case 'INSERT':
        onContentInsert(params);
        break;
    }
  }

  function onAddTimelineClick() {
    setTimelines((prevTimelines) => {
      const newTimelines = [
        ...prevTimelines,
        new Timeline({
          id: prevTimelines.length,
          startDate: '2022-01-01',
          endDate: '2023-01-01',
          title: 'Title Placeholder',
          description: 'Description Placeholder',
        }),
      ];

      timelinesSync.current = newTimelines;
      return newTimelines;
    });
  }

  useEffect(() => {
    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:8888/ws');

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log(event);
      socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      console.log('Message from server ', event.data);
    });

    () => {
      socket.close();
    };
  }, []);

  return (
    <Presentation
      onAddTimelineClick={onAddTimelineClick}
      onEditClick={onEditClick}
      timelines={timelines}
      onChange={onContentChange}
      isEditable={isEditable}
    />
  );
}

export default History;
