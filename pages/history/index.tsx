import type {
  HistoryItemOnChangeParams,
  HistoryItemOnInsertParams,
  HistoryItemIdentifier,
} from './types';

import { useState, useRef } from 'react';
import Timeline from '@/model/timeline';

import Presentation from './Presentation';

import { validateTimelines } from './validator';
import { histories } from './constants';

function History() {
  const [isEditable, setIsEditable] = useState(false);
  const [timelines, setTimelines] = useState(
    histories.map((history) => {
      return new Timeline({
        id: history['id'],
        startDate: history['start_date'],
        endDate: history['end_date'],
        title: history['title'],
        description: history['description'],
      });
    }),
  );

  const timelinesSync = useRef(
    histories.map((history) => {
      return new Timeline({
        id: history['id'],
        startDate: history['start_date'],
        endDate: history['end_date'],
        title: history['title'],
        description: history['description'],
      });
    }),
  );

  function onEditClick() {
    if (validateTimelines(timelinesSync.current)) {
      setIsEditable((prevIsEditableState) => {
        return !prevIsEditableState;
      });

      setTimelines(timelinesSync.current);
    }
  }

  function onContentInsert(params: HistoryItemOnInsertParams) {
    const prevTimelines = timelinesSync.current;
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

  console.log(timelines, timelinesSync);

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
