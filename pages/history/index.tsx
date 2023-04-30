import type { HistoryItemOnChangeParams } from './types';

import { useState } from 'react';
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

  function onEditClick() {
    if (validateTimelines(timelines)) {
      setIsEditable((prevIsEditableState) => {
        return !prevIsEditableState;
      });
    }
  }

  function onContentChange(params: HistoryItemOnChangeParams) {
    console.log(params);
  }

  function onAddTimelineClick() {
    setTimelines((prevTimelines) => {
      return [
        ...prevTimelines,
        new Timeline({
          id: prevTimelines.length,
          startDate: '2022-01-01',
          endDate: '2023-01-01',
          title: 'Title Placeholder',
          description: 'Description Placeholder',
        }),
      ];
    });
  }

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
